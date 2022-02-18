import { AccountModel } from '../model/account-model' //importando modelo token
type AuthenticationParams = { //setando tipo e campos necessarios "como antigo sctruct"

  email: string
  password: string

}

export interface Authentication { //seguindo o padrão CA  deve ser utilizado sempre uma interface para "intermediar/comunicar" entre as camadas
  auth(params: AuthenticationParams): Promise<AccountModel> // metodo auth que recebe  como parametro o  AuthenticationParams e retorna um  AccountModel
}