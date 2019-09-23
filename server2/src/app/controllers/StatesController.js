import api from '../../lib/api';
import Cache from '../../lib/Cache';

class StatesController {
  async show(req, res) {
    const { uf } = req.params;

    const cached = await Cache.get(`states:${uf}`);

    if (cached) {
      return res.json(cached);
    }

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

    const result = {
      uf,
      populacao: state_population.data.projecao.populacao,
    };

    await Cache.set(`states:${uf}`, result);

    return res.json(result);
  }
}

export default new StatesController();
