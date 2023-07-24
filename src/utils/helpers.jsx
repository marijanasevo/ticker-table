// Custom cell renderer functions

export function formatAmountCell({ value }) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
  }).format(value);
}

export function formatSymbolCell(params) {
  if (params.symbols) {
    const symbol = params.symbols.find((pair) => pair.symbol === params.value);
    return symbol ? `${symbol.baseAsset} ⇄ ${symbol.quoteAsset}` : params.value;
  }

  return params.value;
}

export function formatPercentageCell({ value }) {
  const absoluteValue = Math.abs(value);
  return <div className="price-percentage">{absoluteValue + "%"}</div>;
}

export function formatDateCell({ value }) {
  // Convert the timestamp to a Date object
  const date = new Date(value);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  return <span>{formattedDate}</span>;
}
