import { api, apiPopulation } from '../../lib/api';

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

    const states = await api.get('localidades/estados');

    const p = await getPopulation(states.data);

    const response = p.map(state => ({
      nome: state.nome,
      uf: state.sigla,
      populacao: state.population,
    }));

    res.json({ estados: response });
  }
}

export default new StatesController();
