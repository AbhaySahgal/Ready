import './AlertBox.css';

export default function AlertBox(message) {
  const alertBox = document.createElement('div');
  alertBox.className = 'alert-overlay';
  alertBox.innerHTML = `
    <div class="alert-backdrop"></div>
    <div class="alert-content">
      <p class="alert-message">${message}</p>
      <button id="alert-ok-button" class="alert-button">OK</button>
    </div>
  `;
  document.body.appendChild(alertBox);
  document.getElementById('alert-ok-button').onclick = () => {
    document.body.removeChild(alertBox);
  };
}
