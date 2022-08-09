import { EmailValidation } from '../../../presentation/helpers/validators/email-validation'
import { RequiredFielValidation } from '../../../presentation/helpers/validators/required-field-validation'
import { ValidationComposite } from '../../../presentation/helpers/validators/validation-composite'
import { Validation } from '../../../presentation/protocols/validation'
import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFielValidation(field))
  }

  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
