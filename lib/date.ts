import moment from 'moment';

export function formatDate(dateString: string): string {
  return moment(dateString).format('MMMM D, YYYY'); // e.g., April 22, 2025
}

export function formatRelativeTime(dateString: string): string {
  const date = moment(dateString);
  // If the date is within the last 7 days, show relative time, otherwise show full date
  if (moment().diff(date, 'days') < 7) {
    return date.fromNow(); // e.g., a day ago, 5 days ago
  } else {
    return date.format('MMMM D, YYYY'); // e.g., April 22, 2025
  }
}