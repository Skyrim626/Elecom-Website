export function formatDate(dateTime) {
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

export function formatDateOnly(datetime) {
  const date = new Date(datetime); // Convert the string to a Date object

  // Check if the date is valid
  if (isNaN(date)) {
      return 'Invalid Date';
  }

  // Use toLocaleDateString() to format the date without time
  const options = {
      year: 'numeric',
      month: 'long',  // 'short' for abbreviated month (e.g., "Jun")
      day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options); // You can change 'en-US' to your preferred locale
}

export function formatDateTime(datetime) {
  const date = new Date(datetime); // Convert the string to a Date object

  // Check if the date is valid
  if (isNaN(date)) {
      return 'Invalid Date';
  }

  // Use toLocaleString() to format the date in a more readable format
  const options = {
      year: 'numeric',
      month: 'long',  // 'short' for abbreviated month (e.g., "Jun")
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true // 12-hour format (AM/PM)
  };

  return date.toLocaleString('en-US', options); // You can change 'en-US' to your preferred locale
}
