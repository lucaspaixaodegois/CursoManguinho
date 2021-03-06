import { HttpPostCliententSpy } from '../../test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostCliententSpy
}

const makeSut = (url:string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostCliententSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}


describe('RemoteAuthentication', () => {
  test(' Shouls call HttpClient with correct URL', async () => {
    const url ='other_url'
    const { sut, httpPostClientSpy} = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })

})