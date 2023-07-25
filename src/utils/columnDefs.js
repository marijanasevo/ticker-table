import {
  formatAmountCell,
  formatPercentageCell,
  formatSymbolCell,
  mergeTwoCells,
} from './helpers.jsx';

export function getColumnDefs(symbols) {
  return [
    {
      field: 'symbol',
      headerName: 'Trading Pair',
      cellRenderer: formatSymbolCell,
      cellClass: 'symbol-column',
      pinned: 'left',
      maxWidth: 150,
      cellRendererParams: { symbols },
      comparator: (valA, valB) => (valA === valB ? 0 : valA > valB ? 1 : -1),
    },
    {
      headerName: 'Price Change',
      field: 'priceChangePercent',
      cellRenderer: formatPercentageCell,
    },
    {
      field: 'openPrice',
      cellRenderer: formatAmountCell,
      suppressSizeToFit: true,
      maxWidth: 100,
    },
    {
      field: 'weightedAvgPrice',
      cellRenderer: formatAmountCell,
      headerName: 'Weighted Average Price',
    },
    {
      field: 'prevClosePrice',
      cellRenderer: formatAmountCell,
      headerName: 'Previous Close Price',
      maxWidth: 170,
    },
    {
      field: 'lastPrice',
      cellRenderer: formatAmountCell,
      maxWidth: 100,
    },
    {
      field: 'lastQty',
      cellRenderer: formatAmountCell,
      headerName: 'Last Traded Qty',
      maxWidth: 130,
    },
    {
      field: 'bidPrice',
      headerName: 'Highest Bid Price & Bid Qty',
      cellRenderer: mergeTwoCells,
      cellRendererParams: {
        firstCell: 'bidPrice',
        secondCell: 'bidQty',
        formatAmount: true,
      },
    },
    {
      field: 'askPrice',
      headerName: 'Lowest Ask Price & Bid Qty',
      cellRenderer: mergeTwoCells,
      cellRendererParams: {
        firstCell: 'askPrice',
        secondCell: 'askQty',
        formatAmount: true,
      },
    },
    {
      field: 'highPrice',
      cellRenderer: mergeTwoCells,
      cellRendererParams: {
        firstCell: 'highPrice',
        secondCell: 'lowPrice',
        formatAmount: true,
      },
      headerName: 'Highest & Lowest Price',
    },
    {
      field: 'Trading Base & Quote Vol',
      cellRenderer: mergeTwoCells,
      cellRendererParams: {
        firstCell: 'volume',
        secondCell: 'quoteVolume',
        formatAmount: true,
      },
    },
    {
      field: 'Open & Close Time',
      cellRenderer: mergeTwoCells,
      cellRendererParams: {
        firstCell: 'openTime',
        secondCell: 'closeTime',
        formatDate: true,
      },
    },
    {
      field: 'First & Last ID',
      cellRenderer: mergeTwoCells,
      cellRendererParams: {
        firstCell: 'firstId',
        secondCell: 'lastId',
      },
      maxWidth: 150,
    },
    { field: 'count', maxWidth: 100 },
  ];
}

export function getDefaultColDefs() {
  return {
    sortable: true,
    comparator: (valueA, valueB) => valueA - valueB,
  };
}
