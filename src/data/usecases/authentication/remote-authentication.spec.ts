import { HttpPostCliententSpy } from '../../test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';


describe('RemoteAuthentication', () => {
  test(' Shouls call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostCliententSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })

})