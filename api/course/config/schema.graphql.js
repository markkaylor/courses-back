const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  query: `
    courseBySlug(slug: String): Course
  `,
  resolver: {
    Query: {
      courseBySlug: {
        resolverOf: 'Course.findOne',
        async resolver(_, { slug }) {
          const entity = await strapi.services.course.findOne({ slug });
          return sanitizeEntity(entity, { model: strapi.models.course });
        },
      },
    },
  },
};
