import swaggerJSDoc from "swagger-jsdoc"

const option = {
    definition: {
        "openapi": '3.0.3',
        "info": {
            "title": "Contact API",
            "description": "API for managing contacts, allowing users to create, read, and manage contact information.",
            "version": "1.0.0"
        },
        "host": "localhost:5000",
        "basePath": "/",
        "schemes": [
            "http"
        ],
        "paths": {
            "/users": {
                "get": {
                    "description": "",
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                },
                "post": {
                    "description": "",
                    "responses": {
                        "201": {
                            "description": "Created"
                        },
                        "400": {
                            "description": "Bad Request"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    },
                    "requestBody": {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    required: ['firstName', 'lastName', 'email'],
                                    properties: {
                                        firstName: { type: 'string' },
                                        lastName: { type: 'string' },
                                        email: { type: 'string', format: 'email' },
                                        favoriteColor: { type: 'string' },
                                        birthday: { type: 'string', format: 'date' },
                                    },
                                },
                            },
                        },
                    },
                }
            },
            "/users/{id}": {
                "get": {
                    "description": "",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "404": {
                            "description": "Not Found"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                },
                "put": {
                    "description": "",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "400": {
                            "description": "Bad Request"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    },
                    "requestBody": {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    required: ['firstName', 'lastName', 'email'],
                                    properties: {
                                        firstName: { type: 'string' },
                                        lastName: { type: 'string' },
                                        email: { type: 'string', format: 'email' },
                                        favoriteColor: { type: 'string' },
                                        birthday: { type: 'string', format: 'date' },
                                    },
                                },
                            },
                        },
                    },
                },
                "delete": {
                    "description": "",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "404": {
                            "description": "Not Found"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            }
        },
        "definitions": {
            "User": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "example": "object"
                    },
                    "required": {
                        "type": "array",
                        "example": [
                            "firstName",
                            "lastName",
                            "email"
                        ],
                        "items": {
                            "type": "string"
                        }
                    },
                    "properties": {
                        "type": "object",
                        "properties": {
                            "firstName": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "John"
                                    }
                                }
                            },
                            "lastName": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "Doe"
                                    }
                                }
                            },
                            "email": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "format": {
                                        "type": "string",
                                        "example": "email"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "john@example.com"
                                    }
                                }
                            },
                            "favoriteColor": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "blue"
                                    }
                                }
                            },
                            "birthday": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "format": {
                                        "type": "string",
                                        "example": "date"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "1990-01-01"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "UpdateUser": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "example": "object"
                    },
                    "properties": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "user_id"
                                    }
                                }
                            },
                            "firstName": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "John"
                                    }
                                }
                            },
                            "lastName": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "Doe"
                                    }
                                }
                            },
                            "email": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "format": {
                                        "type": "string",
                                        "example": "email"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "john@example.com"
                                    }
                                }
                            },
                            "favoriteColor": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "blue"
                                    }
                                }
                            },
                            "birthday": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "example": "string"
                                    },
                                    "format": {
                                        "type": "string",
                                        "example": "date"
                                    },
                                    "example": {
                                        "type": "string",
                                        "example": "1990-01-01"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    apis: []
}

export const swaggerDoc = swaggerJSDoc(option);