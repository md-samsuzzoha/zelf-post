export function formatTimestampToMonthDay(timestamp) {
    const date = new Date(timestamp);
    const options = { month: "short", day: "2-digit" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}
