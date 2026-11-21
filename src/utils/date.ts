const monthYearFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  timeZone: "UTC",
  year: "numeric",
});

const fullDateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  timeZone: "UTC",
  year: "numeric",
});

export function dateFromInput(input: Date | string) {
  if (input instanceof Date) {
    return input;
  }

  return new Date(`${input}T00:00:00.000Z`);
}

export function formatFullDate(input: Date | string) {
  return fullDateFormatter.format(dateFromInput(input));
}

export function formatMonthYear(input: Date | string) {
  return monthYearFormatter.format(dateFromInput(input));
}
