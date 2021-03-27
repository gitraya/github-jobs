export const checkDate = (date) => {
  const today = new Date().getDate();
  const created = new Date(date).getDate();

  if (created < today) {
    let day = today - created;
    if (day > 1) {
      return `${day} days ago`;
    } else {
      return 'yesterday';
    }
  } else if (created === today) {
    return 'today';
  }
};
