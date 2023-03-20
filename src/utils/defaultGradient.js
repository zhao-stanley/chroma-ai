let gradients = [
  ["#c3e4ff", "#6ec3f4", "#eae2ff", "#b9beff"],
  ["#054a91", "#3e7cb1", "#81a4cd", "#dbe4ee"],
  ["#13293d", "#006494", "#247ba0", "#1b98e0"],
  ["#210b2c", "#55286f", "#bc96e6", "#d8b4e2"],
  ["#f2ff49", "#ff4242", "#fb62f6", "#645dd7"],
  ["#fff275", "#ff8c42", "#ff3c38", "#a23e48"],
  ["#320e3b", "#e56399", "#7f96ff", "#a6cfd5"],
  ["#022b3a", "#1f7a8c", "#bfdbf7", "#e1e5f2"],
  ["#d81159", "#8f2d56", "#218380", "#fbb13c"],
  ["#922765", "#4f174d", "#1c061b", "#eb2364"],
];

export function getRandomGradient() {
  return gradients[Math.floor(Math.random() * gradients.length)];
}
