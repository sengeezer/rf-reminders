const getMatchedReminders = ({ reminders }, { text, sortBy, date }, listDate) => {
  return reminders.filter((reminder) => {
    const reminderDate = reminder.fullDate;
    const compareDate = listDate;

    const dateMatch = compareDate ? compareDate.isSame(reminderDate, 'day') : true;
    const textMatch = typeof text !== 'string' || reminder.text.toLowerCase().includes(text.toLowerCase());

    return dateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }

    return undefined;
  });
}

export default getMatchedReminders;
