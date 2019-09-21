import api from '../../lib/api';

class StatesController {
  async show(req, res) {
    const { uf } = req.params;

    if (!uf) {
      return res.status(400).json({ error: 'uf required' });
    }

    const states = await api.get('localidades/estados');

    const state_info = states.data.find(
      state => state.sigla === uf.toUpperCase()
    );

    if (!state_info) {
      return res.status(400).json({ error: 'uf does not exist' });
    }

    const state_population = await api.get(
      `projecoes/populacao/${state_info.id}`
    );

    return res.json({
      uf,
      populacao: state_population.data.projecao.populacao,
    });
  }
}

export default new StatesController();
