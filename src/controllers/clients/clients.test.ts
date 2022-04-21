import request from 'supertest'
import app from '../../server'

describe('clients routes', ()=> {
  it('GET /cliets/new', async  () => {
    const response = 
      await request(app)
        .get('/clients/new')
    
    expect(response.status).toEqual(200)
    expect(response.text).toEqual('Fullstack')
  })
  it('GET /cliets/list', async  () => {
    const response = 
      await request(app)
        .get('/clients/list')
    
    expect(response.status).toEqual(200)
    expect(response.text).toEqual('Fullstack Master')
  })
})