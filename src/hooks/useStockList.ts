import { useQuery } from "react-query";

const useStockList = () => {
  const cacheKey = "StockList";
  const stockList = useQuery(cacheKey, () => {});
  return stockList;
};

export { useStockList };
