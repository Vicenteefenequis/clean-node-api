import { MissingParamError } from '../../errors'
import { RequiredFielValidation } from './required-field-validation'

describe('RequiredField Validation', () => {
  test('Should returns a MissingParamError if validations fails ', () => {
    const sut = new RequiredFielValidation('field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
