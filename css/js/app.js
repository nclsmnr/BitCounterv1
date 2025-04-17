// app.js: fetch API, calcoli e aggiornamento DOM

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Esempio: Prezzo BTC
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await res.json();
    const price = data.bitcoin.usd;
    document.getElementById('btc-price').innerText = price.toLocaleString('it-IT', { minimumFractionDigits: 2 });

    // TODO: fetch per tutte le altre API (blockchain.info, alternative.me, mempool.space...)
    // e aggiornare gli elementi con ID corrispondente.

    // Esempio Chart.js: Distribuzione nodi
    const ctx = document.getElementById('nodeDistributionChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Listening', 'Non-Listening'],
        datasets: [{ data: [/* valori */] }]
      },
      options: {}
    });

  } catch (e) {
    console.error('Errore fetch API', e);
  }
});
