import app from '../../server'
import request from 'supertest'
import sinon from 'sinon'

import  {home, calc} from './'

describe('Home routes', () => {
    
  

  describe('Calcular', () => {
    
    it('calcular o valor se passado', async () => {
      const res: any = {
        render: function(){}
      }
      const req: any = {
        query: {
          n1: 4,
          n2: 4
        }
      }
  
      let mock = sinon.mock(res)
      mock.expects('render').once().withArgs('calc', {
        valorDaSoma : 8
      })
      calc(req,res)
    })
  
    it('Nenhum número fornecido', async () => {
      const req: any = {
        query: {}
      }
      const res: any = {
        render: function(){}
      }

      let mock = sinon.mock(res)
      mock.expects('render').once().withArgs('calc', { 
        valorDaSoma: 'nenhum número fornecido'
      })
      calc(req,res)

    }) 
  })

  it('home message', async () => {
    const req: any = {}
    const res: any = {
      render: function(){}
    }

    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('home', { 
      time: 10,
      list: ['Leonardo','Rodrigo','Jessica'],
      animals: [
        { name: 'cacy' },
        { name: 'tihuana' },
        { name: 'Qqi' }
      ]
    })

    home(req, res)
  })

  it('Page message', async () => {
    const response = await request(app).get('/pagina').expect(200)

    expect(response.text).toEqual("Fullstack Master")
  })

  describe('verificando número', () => {
    it('verificando número par', async () => {
      const response = await request(app).get('/par/2')
      expect(response.status).toEqual(200)
      expect(response.text).toEqual('Número é par')
    })
    it('verificando número impar', async () => {
      const response = await request(app).get('/par/5')
  
      expect(response.status).toEqual(200)
      expect(response.text).toEqual('Número é impar')
    })
  })


})