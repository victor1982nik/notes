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
