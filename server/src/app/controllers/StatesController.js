import { api, apiPopulation } from '../../lib/api';
import Cache from '../../lib/Cache';

class StatesController {
  async show(req, res) {
    async function getPopulation(data) {
      return Promise.all(
        data.map(async state => {
          const population = await apiPopulation.get(
            `populacao/${state.sigla}`
          );
          return {
            ...state,
            population: population.data.populacao,
          };
        })
      );
    }

    const cached = await Cache.get('states');

    if (cached) {
      return res.json(cached);
    }

    const states = await api.get('localidades/estados');

    const p = await getPopulation(states.data);

    const response = p.map(state => ({
      nome: state.nome,
      uf: state.sigla,
      populacao: state.population,
    }));

    await Cache.set('states', response);

    return res.json({ estados: response });
  }
}

export default new StatesController();
