import { Request, Response } from 'express';
import api from '../services/api';

class FormController {

  async getDataForm( req:Request, res:Response ) {

    const { name, titleform, email, phone, cargo, linkedin } = req.body; //Campos vindos do formulário.

    try {

      const objPerson = {
        name,
        email,
        phone,
        owner_id: "",
        org_id:"",
        visible_to: 1,
        "987eaebd7073b17a262e9c144cf62d770d9b1d1b": cargo, // Cargo no pipedrive.
        "5f02a982c2ba476ee53af395323c163272f4b908": linkedin, // Endereco
        "5715d1988c8249f076041aa7b9482b55c2f4b64d": "mensagem teste" // Endereco 2 - Pode usar pra mensagem
      }

        const { data: respostaPerson } = await api.post('/persons?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objPerson)


        if(respostaPerson){

        const objDeal = {
          title: titleform,
          value: 0,
          currency: 'BRL',
          user_id: '1063083',
          person_id: respostaPerson.data.id,
          org_id: null,
          stage_id: '570',
          status: 'open',
          expected_close_date: null,
          probability: null,
          lost_reason: null,
          visible_to: '1',
          add_time: new Date().getHours(),
        }

        const { data: respostaDeal } = await api.post('/deals?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objDeal)

        return res.status(200).json({ Deal:respostaDeal, Person:respostaPerson, message: 'Pessoa encaminhada para o pipedrive!', PERSONID:respostaPerson.data.id })
      }


    } catch (error) {
      console.log(error)
      return res.json({message: error})
    }
  }

}

export default new FormController()