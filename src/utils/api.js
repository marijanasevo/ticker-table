import axios from "axios";
import {
  BINANCE_TICKER_API_URL,
  BINANCE_EXCHANGE_INFO_API_URL,
} from "./constants.js";

export async function fetchTickerData() {
  try {
    const { data } = await axios.get(BINANCE_TICKER_API_URL);
    return data;
  } catch (err) {
    console.log("Error while fetching binance ticker data", err);
    throw err;
  }
}

export async function fetchExchangeInfo() {
  try {
    const { data } = await axios.get(BINANCE_EXCHANGE_INFO_API_URL);
    return data;
  } catch (err) {
    console.log("Error while fetching exchange info", err);
    throw err;
  }
}
