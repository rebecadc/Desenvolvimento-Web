const btn = document.getElementById('btn');
const input = document.getElementById('ip-input');
const table = document.getElementById('result');

btn.addEventListener('click', async () => {
  const ip = input.value.trim();
  if (!ip) return;

  try {
    const res = await fetch(`https://ipinfo.io/${ip}/json?token=7dbd37994eba05`);
    const data = await res.json();

    if (data.error) {
      table.innerHTML = `<tr><td colspan="2">Erro: ${data.error.message}</td></tr>`;
      return;
    }

    table.innerHTML = `
      <tr><th>Campo</th><th>Valor</th></tr>
      ${Object.entries(data)
        .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
        .join('')}
    `;
  } catch (err) {
    table.innerHTML = `<tr><td colspan="2">Erro ao consultar API</td></tr>`;
  }
});
