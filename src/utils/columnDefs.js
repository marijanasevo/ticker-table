import {
  formatAmountCell,
  formatDateCell,
  formatPercentageCell,
  formatSymbolCell,
} from "./helpers.jsx";

export function getColumnDefs(symbols) {
  return [
    {
      field: "symbol",
      headerName: "Trading Pair",
      cellRenderer: formatSymbolCell,
      cellClass: "symbol-column",
      pinned: "left",
      maxWidth: 150,
      cellRendererParams: { symbols },
      comparator: (valA, valB) => (valA === valB ? 0 : valA > valB ? 1 : -1),
    },
    {
      field: "priceChange",
      cellRenderer: formatAmountCell,
    },
    {
      headerName: "Price Change %",
      field: "priceChangePercent",
      cellRenderer: formatPercentageCell,
      cellClass: (params) => {
        const value = params.value;
        if (value > 0) return "positive-price-change";
        else if (value < 0) return "negative-price-change";
      },
    },
    {
      field: "weightedAvgPrice",
      cellRenderer: formatAmountCell,
      headerName: "Weighted Average Price",
    },
    {
      field: "prevClosePrice",
      cellRenderer: formatAmountCell,
      headerName: "Previous Close Price",
    },
    { field: "lastPrice", cellRenderer: formatAmountCell },
    {
      field: "lastQty",
      cellRenderer: formatAmountCell,
      headerName: "Last Traded Quantity",
    },
    {
      field: "bidPrice",
      cellRenderer: formatAmountCell,
      headerName: "Highest Bid Price",
    },
    {
      field: "bidQty",
      cellRenderer: formatAmountCell,
      headerName: "Highest Bid Quantity",
    },
    {
      field: "askPrice",
      cellRenderer: formatAmountCell,
      headerName: "Lowest Ask Price",
    },
    {
      field: "askQty",
      cellRenderer: formatAmountCell,
      headerName: "Lowest Bid Quantity",
    },
    { field: "openPrice", cellRenderer: formatAmountCell },
    {
      field: "highPrice",
      cellRenderer: formatAmountCell,
      headerName: "Highest Price Reached",
    },
    {
      field: "lowPrice",
      cellRenderer: formatAmountCell,
      headerName: "Lowest Price Reached",
    },
    {
      field: "volume",
      cellRenderer: formatAmountCell,
      headerName: "Total Trading Base Volume",
    },
    {
      field: "quoteVolume",
      cellRenderer: formatAmountCell,
      headerName: "Total Trading Quote Volume",
    },
    { field: "openTime", cellRenderer: formatDateCell },
    { field: "closeTime", cellRenderer: formatDateCell },
    { field: "firstId" },
    { field: "lastId" },
    { field: "count" },
  ];
}

export function getDefaultColDefs() {
  return {
    sortable: true,
    comparator: (valueA, valueB) => valueA - valueB,
  };
}
