export function formatNumberWithK(value: number): string {
  const valueDivided = (value / 1000).toFixed(1);
  const result = valueDivided.endsWith('.0') ? valueDivided.slice(0, -2) : valueDivided;
  return `${result}K`;
}