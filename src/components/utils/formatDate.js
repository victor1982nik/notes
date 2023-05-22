export const formatDate = (date) => {
  const dateInput = new Date(date);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZoneName: "short",
  };
  return dateInput.toLocaleString("en-US", options);
};

export const convertDate = (date) => {
  const dateInput = new Date(date);
  const day = dateInput.getUTCDate();
  const month = dateInput.getUTCMonth() + 1;
  const year = dateInput.getUTCFullYear();
  return `${day}/${month}/${year}`;
};
