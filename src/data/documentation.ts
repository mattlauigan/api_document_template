export const documentation = {
  introduction: {
    title: "Introduction",
    content: `This documentation provides comprehensive information about our REST API built with Laravel, Inertia.js, React (TypeScript), and PostgreSQL. The API follows REST principles and uses JSON for request and response payloads.`,
    subsections: [
      {
        id: "tech-stack",
        title: "Technology Stack",
        content: `
- **Backend Framework**: Laravel 10.x
- **Frontend Framework**: React 18.x with TypeScript
- **Server-Side Rendering**: Inertia.js
- **Database**: PostgreSQL 14+
- **Authentication**: Laravel Sanctum
- **Testing**: PHPUnit, React Testing Library`
      },
      {
        id: "database",
        title: "Database Structure",
        content: `Our PostgreSQL database is designed with performance and scalability in mind. We use:

- **Migrations**: All database changes are version controlled
- **Foreign Keys**: Maintain referential integrity
- **Indexes**: Optimized for common queries
- **Soft Deletes**: Safe data removal with recovery options`
      },
      {
        id: "authentication",
        title: "Authentication",
        content: "The API uses Laravel Sanctum for token-based authentication. All authenticated endpoints require a valid Bearer token in the Authorization header."
      }
    ]
  },
  endpoints: [
    {
      method: "POST",
      path: "/api/v1/auth/register",
      description: "Register a new user",
      parameters: [
        {
          name: "email",
          type: "string",
          required: true,
          description: "User's email address"
        },
        {
          name: "password",
          type: "string",
          required: true,
          description: "User's password (min: 8 characters)"
        },
        {
          name: "name",
          type: "string",
          required: true,
          description: "User's full name"
        }
      ],
      responses: [
        {
          status: 201,
          description: "User successfully registered",
          example: {
            data: {
              id: 1,
              name: "John Doe",
              email: "john@example.com",
              created_at: "2024-03-15T12:00:00Z"
            },
            message: "Registration successful"
          }
        }
      ]
    },
    {
      method: "POST",
      path: "/api/v1/auth/login",
      description: "Authenticate user and receive token",
      parameters: [
        {
          name: "email",
          type: "string",
          required: true,
          description: "User's email address"
        },
        {
          name: "password",
          type: "string",
          required: true,
          description: "User's password"
        }
      ],
      responses: [
        {
          status: 200,
          description: "Login successful",
          example: {
            token: "1|laravel_sanctum_token",
            user: {
              id: 1,
              name: "John Doe",
              email: "john@example.com"
            }
          }
        }
      ]
    },
    {
      method: "GET",
      path: "/api/v1/posts",
      description: "Retrieve a paginated list of posts",
      parameters: [
        {
          name: "page",
          type: "integer",
          required: false,
          description: "Page number for pagination (default: 1)"
        },
        {
          name: "per_page",
          type: "integer",
          required: false,
          description: "Number of items per page (default: 15)"
        },
        {
          name: "sort",
          type: "string",
          required: false,
          description: "Sort field (created_at, title, etc.)"
        },
        {
          name: "order",
          type: "string",
          required: false,
          description: "Sort order (asc, desc)"
        }
      ],
      responses: [
        {
          status: 200,
          description: "List of posts retrieved successfully",
          example: {
            data: [
              {
                id: 1,
                title: "First Post",
                content: "This is the content of the first post",
                user_id: 1,
                created_at: "2024-03-15T12:00:00Z",
                updated_at: "2024-03-15T12:00:00Z",
                user: {
                  id: 1,
                  name: "John Doe"
                }
              }
            ],
            meta: {
              current_page: 1,
              last_page: 5,
              per_page: 15,
              total: 68
            }
          }
        }
      ]
    },
    {
      method: "POST",
      path: "/api/v1/posts",
      description: "Create a new post",
      parameters: [
        {
          name: "title",
          type: "string",
          required: true,
          description: "Post title (max: 255 characters)"
        },
        {
          name: "content",
          type: "string",
          required: true,
          description: "Post content"
        },
        {
          name: "category_id",
          type: "integer",
          required: false,
          description: "Category ID for the post"
        }
      ],
      responses: [
        {
          status: 201,
          description: "Post created successfully",
          example: {
            data: {
              id: 1,
              title: "New Post",
              content: "Post content here",
              user_id: 1,
              category_id: 2,
              created_at: "2024-03-15T12:00:00Z",
              updated_at: "2024-03-15T12:00:00Z"
            },
            message: "Post created successfully"
          }
        }
      ]
    },
    {
      method: "GET",
      path: "/api/v1/categories",
      description: "Retrieve all categories with their posts count",
      responses: [
        {
          status: 200,
          description: "Categories retrieved successfully",
          example: {
            data: [
              {
                id: 1,
                name: "Technology",
                slug: "technology",
                posts_count: 15,
                created_at: "2024-03-15T12:00:00Z"
              },
              {
                id: 2,
                name: "Travel",
                slug: "travel",
                posts_count: 8,
                created_at: "2024-03-15T12:00:00Z"
              }
            ]
          }
        }
      ]
    }
  ]
};