import { useState } from "react";
import { format, formatRelative, subDays } from "date-fns";
import { custom } from "zod";

export const useFormatDate = (date) => {
  const [formattedDate, setFormatDate] = useState(date);
  const formatDate = async () =>
    await formatRelative(subDays(date, 3), new Date());
  formatDate().then((response) => setFormatDate(response));
  return { formattedDate };
};
