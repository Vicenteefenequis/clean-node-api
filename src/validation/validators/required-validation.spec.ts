import { MissingParamError } from '../../presentation/errors'
import { RequiredFielValidation } from './required-field-validation'

const makeSut = (): RequiredFielValidation => new RequiredFielValidation('field')

describe('RequiredField Validation', () => {
  test('Should returns a MissingParamError if validations fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
