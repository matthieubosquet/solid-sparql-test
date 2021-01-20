import { IQueryResult, IQueryResultBindings, newEngine } from '@comunica/actor-init-sparql';

const engine = newEngine();

async function query(sparql: string, sources: string[]) {
  const result: IQueryResult = await engine.query(sparql, { sources });
  (result as IQueryResultBindings).bindingsStream.on('data', (binding) => {
    console.log(binding.get('?s').value);
    console.log(binding.get('?p').value);
    console.log(binding.get('?o').value);
});
}

const sparql = 'SELECT * WHERE { ?s ?p ?o . }';
const sources = [ 'http://localhost:3000/foo' ];

query(sparql, sources);
