import "./style.css"

function main() {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('Root element not found');
  }

  root.innerHTML = '<h1>Hello, worrrld!</h1>';
}

main();