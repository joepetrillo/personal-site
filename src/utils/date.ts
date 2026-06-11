/* Short month so the widest result ("Sep 2026") still fits the 5.5rem date
   column of `.dated-entry`. */
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

export function dateFromInput(input: Date | string): Date {
  if (input instanceof Date) {
    return input;
  }

  return new Date(`${input}T00:00:00.000Z`);
}

export function formatFullDate(input: Date | string): string {
  return fullDateFormatter.format(dateFromInput(input));
}

export function formatMonthYear(input: Date | string): string {
  return monthYearFormatter.format(dateFromInput(input));
}
