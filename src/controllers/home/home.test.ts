import app from '../../server'
import request from 'supertest'

describe('Home routes', () => {
  it('calcular o valor se passado', async () => {
    const responseQuery = await request(app).get('/calc?n1=5&n2=3')

    expect(responseQuery.body).toMatchObject({
      valorDaSoma: 8
    })

    const response = await request(app).get('/calc')

    expect(response.body).toMatchObject({
      valorDaSoma: 'nenhum número fornecido'
    })
  })

  it('home message', async () => {
    const response = await request(app).get('/').expect(200)

    expect(response.body).toMatchObject({
      ok : "Fullstack Master"
    })
  })
  it('Page message', async () => {
    const response = await request(app).get('/pagina').expect(200)

    expect(response.text).toEqual("Fullstack Master")
  })

  describe('verificando número', () => {
    it('verificando número par', async () => {
      const response = await request(app).get('/par/2')
      console.log(response.text)
      expect(response.status).toEqual(200)
      expect(response.text).toEqual('Número é par')
    })
    it('verificando número impar', async () => {
      const response = await request(app).get('/par/5')
  
      console.log(response.text)
      expect(response.status).toEqual(200)
      expect(response.text).toEqual('Número é impar')
    })
  })


})