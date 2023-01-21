const swaggerDocument = {
  swagger: '2.0',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/artists/': {
      get: {
        summary: 'Lists all the artistss',
        tags: ['artists'],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Returns a list',
            schema: {
              $ref: '#/definitions/Artists',
            },
          },
        },
      },
      post: {
        summary: 'Creates a artists',
        tags: ['artists'],
        parameters: [
          {
            name: 'artists',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateArtists',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Returns a new artists',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateArtists',
            },
          },
        },
      },
    },
    '/artists/{id}': {
      get: {
        summary: 'Gets a artists by its primary key',
        tags: ['artists'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Returns a artists with primary key',
            schema: {
              $ref: '#/definitions/Artists',
            },
          },
        },
      },
      delete: {
        summary: 'Deletes a artists by its primary key',
        tags: ['artists'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
      put: {
        summary: 'Overrides the values of a artists',
        tags: ['artists'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              $ref: '#/definitions/Artists',
            },
          },
          {
            name: 'artists',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateArtists',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a artists',
            schema: {
              $ref: '#/definitions/Artists',
            },
          },
        },
      },
      patch: {
        tags: ['artists'],
        summary: 'patch a artists',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/definitions/Artists',
            },
          },
          {
            name: 'artists',
            in: 'body',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateArtists',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a artists and its partially overwritten values',
            schema: {
              $ref: '#/definitions/Artists',
            },
          },
        },
      },
    },
  },
  definitions: {
    Artists: {
      required: ['name', 'youtubeId', 'spotifyId'],
      properties: {
        id: {
          type: 'integer',
          format: 'int32',
          uniqueItems: true,
          readOnly: true,
        },
        name: {
          type: 'string',
          uniqueItems: true,
          maxLength: 255,
        },
        image: {
          type: 'string',
          maxLength: 255,
        },
        youtubeId: {
          type: 'string',
          uniqueItems: true,
          maxLength: 255,
        },
        vevoId: {
          type: 'string',
          uniqueItems: true,
          maxLength: 255,
        },
        spotifyId: {
          type: 'string',
          maxLength: 255,
        },
        isDeleted: {
          type: 'boolean',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
  },
  createUpdateDef: {
    CreateUpdateArtists: {
      required: ['name', 'youtubeId', 'spotifyId'],
      properties: {
        id: {
          type: 'integer',
          format: 'int32',
          uniqueItems: true,
          readOnly: true,
        },
        name: {
          type: 'string',
          uniqueItems: true,
          maxLength: 255,
        },
        image: {
          type: 'string',
          maxLength: 255,
        },
        youtubeId: {
          type: 'string',
          uniqueItems: true,
          maxLength: 255,
        },
        vevoId: {
          type: 'string',
          uniqueItems: true,
          maxLength: 255,
        },
        spotifyId: {
          type: 'string',
          maxLength: 255,
        },
        isDeleted: {
          type: 'boolean',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
  },
};

export { swaggerDocument };
