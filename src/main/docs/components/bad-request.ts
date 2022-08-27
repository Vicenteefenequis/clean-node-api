export const badRequest = {
  description: 'Requisicao invalida',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
