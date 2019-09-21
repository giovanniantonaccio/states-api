import api from '../../lib/api';

class StatesController {
  async show(req, res) {
    const states = await api.get('localidades/estados');

    const response = states.data.map(state => ({
      nome: state.nome,
      uf: state.sigla,
    }));

    res.json({ estados: response });
  }
}

export default new StatesController();
