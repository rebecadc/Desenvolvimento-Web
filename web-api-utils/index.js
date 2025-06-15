import express from 'express';

const app = express();
app.use(express.json());

app.post('/util/text/:action', (req, res) => {
  const { action } = req.params;
  const { input } = req.body;

  const output = action === 'lowercase' ? input.toLowerCase() : input.toUpperCase();
  res.json({ action, input, output });
});

app.get('/util/number/:action', (req, res) => {
  const { action } = req.params;
  const input = req.query.input.split(',');
  const numbers = input.map(Number);

  const output = action === 'minimum' ? Math.min(...numbers) : Math.max(...numbers);
  res.json({ action, input, output });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
