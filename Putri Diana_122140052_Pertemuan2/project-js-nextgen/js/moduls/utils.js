// Update jam setiap detik
export function updateClock(element) {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    element.textContent = now.toLocaleTimeString('id-ID', options);
  }
  
  // Format tanggal deadline
  export function formatDateTime(datetimeString) {
    const date = new Date(datetimeString);
    return date.toLocaleString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  