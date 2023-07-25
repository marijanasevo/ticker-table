export function getRowClass(params) {
  const priceChange = params.data.priceChange;
  return priceChange < 0
    ? 'negative'
    : priceChange > 0
    ? 'positive'
    : 'unchanged';
}

// Custom cell renderer functions

export function formatAmountCell({ value }) {
  return formatAmount(value);
}

export function formatSymbolCell(params) {
  if (params.symbols) {
    const symbol = params.symbols.find(pair => pair.symbol === params.value);
    return symbol ? `${symbol.baseAsset} ⇄ ${symbol.quoteAsset}` : params.value;
  }

  return params.value;
}

export function formatPercentageCell(params) {
  const percentageChange = Math.abs(params.value);
  let valueChange = Math.abs(params.data.priceChange);
  valueChange = formatAmount(valueChange);

  return (
    <div className='price-change'>
      <span className='value-change'>{valueChange}</span>
      <span className='percentage-change'>{percentageChange + '%'}</span>
    </div>
  );
}

export function mergeTwoCells(params) {
  let firstCell = params.data[params.firstCell];
  let secondCell = params.data[params.secondCell];

  if (params.formatAmount) {
    firstCell = formatAmount(firstCell);
    secondCell = formatAmount(secondCell);
  } else if (params.formatDate) {
    firstCell = formatDate(firstCell);
    secondCell = formatDate(secondCell);
  }

  return (
    <div>
      <span>{firstCell}</span>
      <br />
      <span>{secondCell}</span>
    </div>
  );
}

function formatDate(value) {
  // Convert the timestamp to a Date object
  const date = new Date(value);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

function formatAmount(value) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
  }).format(value);
}
