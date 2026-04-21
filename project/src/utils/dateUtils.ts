export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  
  // Check if it's today
  if (date.toDateString() === now.toDateString()) {
    return formatTime(date);
  }
  
  // Check if it's yesterday
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday, ${formatTime(date)}`;
  }
  
  // Check if it's within the last week
  const oneWeekAgo = new Date(now);
  oneWeekAgo.setDate(now.getDate() - 7);
  if (date > oneWeekAgo) {
    return date.toLocaleDateString('en-US', { weekday: 'long' }) + `, ${formatTime(date)}`;
  }
  
  // Otherwise, show the full date
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  });
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
};