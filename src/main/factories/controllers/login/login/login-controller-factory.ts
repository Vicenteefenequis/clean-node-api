import { makeLoginValidation } from './login-validation-factory'
import { Controller } from '../../../../../presentation/protocols'
import { makeDbAuthentication } from '../../../usecases/account/authentication/db-authentication-factory'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { LoginController } from '../../../../../presentation/controllers/login/login/login-controller'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}
