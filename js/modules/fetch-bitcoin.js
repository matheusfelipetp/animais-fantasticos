export default function initFetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((btc) => {
      const btcPrice = document.querySelector(target);
      btcPrice.innerText = (1000 / btc.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(Error(error));
    });
}
