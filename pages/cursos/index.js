import Pagina from '@/components/Pagina'
import React from 'react'
import { Button, Table } from 'react-bootstrap'
import {AiOutlinePlus} from 'react-icons/ai'

const index = () => {
  return (
    <Pagina titulo='Cursos'>
      <Button href='/cursos/form' className='mb-2' variant="primary">Novo
           <AiOutlinePlus/>
      </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Pagina>
  )
}

export default index