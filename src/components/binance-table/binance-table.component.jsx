import { useState, useEffect, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import './binance-table.css';

import LoadingAnimation from '../loading-animation/loading-animation.component.jsx';
import { fetchTickerData, fetchExchangeInfo } from '../../utils/api.js';
import { getColumnDefs, getDefaultColDefs } from '../../utils/columnDefs.js';
import { getRowClass } from '../../utils/helpers';

function BinanceTable() {
  const [tickerData, setTickerData] = useState();
  const [symbols, setSymbols] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { symbols } = await fetchExchangeInfo();
        setSymbols(symbols);
      } catch (e) {
        console.log(
          'Encountered error while fetching symbols. Trading pairs will be joined.'
        );
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const tickerData = await fetchTickerData();
        setTickerData(tickerData);
      } catch (e) {
        setError(
          'Encountered error while fetching data. Please try again later.'
        );
        setTickerData([]);
      }
    })();
  }, [symbols]);

  const columnDefs = useMemo(() => getColumnDefs(symbols), [symbols]);
  const defaultColDef = useMemo(() => getDefaultColDefs(), []);

  const noRowsMessage = error ? error : 'No rows to show';

  return (
    <div className='ag-theme-alpine-dark'>
      <AgGridReact
        rowData={tickerData}
        rowHeight={90}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection='multiple'
        pagination={true}
        paginationAutoPageSize={true}
        getRowClass={getRowClass}
        loadingOverlayComponent={LoadingAnimation}
        overlayNoRowsTemplate={`<span class="ag-overlay-loading-center">${noRowsMessage}</span>`}
      />
    </div>
  );
}

export default BinanceTable;
