import { LoadSurveyByIdRepository, SurveyModel } from './db-load-survey-by-id-protocols'
import { LoadSurveyById } from '@/domain/usecases/survey/load-survey-by-id'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) {}

  async loadById (id: string): Promise<SurveyModel> {
    const survey = await this.loadSurveyByIdRepository.loadById(id)
    return survey
  }
}
