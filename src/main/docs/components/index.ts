import { apiKeyAuthSchema } from '../schemas/api-key-auth-schema'
import { badRequest } from './bad-request'
import { forbidden } from './forbidden'
import { notFound } from './not-found'
import { serverError } from './server-error'
import { unauthorized } from './unauthorized'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  serverError,
  notFound,
  forbidden
}
