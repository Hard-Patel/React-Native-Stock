/**
 * @format
 */

export interface IResponseMeta {
  error: boolean;
  message: string;
  status: number;
}

export const LegalType = {
  about: 1,
  terms: 2,
  policy: 3,
};

export interface HomeItemProp {
  label: string;
  last_price: number;
  company_name: string;
  currency: string;
}

export interface StockDetailsProp {
  address1: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  website: string;
  industry: string;
  industryKey: string;
  industryDisp: string;
  sector: string;
  sectorKey: string;
  sectorDisp: string;
  longBusinessSummary: string;
  fullTimeEmployees: number;
  companyOfficers: CompanyOfficer[];
  auditRisk: number;
  boardRisk: number;
  compensationRisk: number;
  shareHolderRightsRisk: number;
  overallRisk: number;
  governanceEpochDate: number;
  compensationAsOfEpochDate: number;
  maxAge: number;
  priceHint: number;
  previousClose: number;
  open: number;
  dayLow: number;
  dayHigh: number;
  regularMarketPreviousClose: number;
  regularMarketOpen: number;
  regularMarketDayLow: number;
  regularMarketDayHigh: number;
  dividendRate: number;
  dividendYield: number;
  exDividendDate: number;
  payoutRatio: number;
  fiveYearAvgDividendYield: number;
  beta: number;
  trailingPE: number;
  forwardPE: number;
  volume: number;
  regularMarketVolume: number;
  averageVolume: number;
  averageVolume10days: number;
  averageDailyVolume10Day: number;
  bidSize: number;
  askSize: number;
  marketCap: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  priceToSalesTrailing12Months: number;
  fiftyDayAverage: number;
  twoHundredDayAverage: number;
  trailingAnnualDividendRate: number;
  trailingAnnualDividendYield: number;
  currency: string;
  enterpriseValue: number;
  profitMargins: number;
  floatShares: number;
  sharesOutstanding: number;
  sharesShort: number;
  sharesShortPriorMonth: number;
  sharesShortPreviousMonthDate: number;
  dateShortInterest: number;
  sharesPercentSharesOut: number;
  heldPercentInsiders: number;
  heldPercentInstitutions: number;
  shortRatio: number;
  shortPercentOfFloat: number;
  impliedSharesOutstanding: number;
  bookValue: number;
  priceToBook: number;
  lastFiscalYearEnd: number;
  nextFiscalYearEnd: number;
  mostRecentQuarter: number;
  earningsQuarterlyGrowth: number;
  netIncomeToCommon: number;
  trailingEps: number;
  forwardEps: number;
  pegRatio: number;
  lastSplitFactor: string;
  lastSplitDate: number;
  enterpriseToRevenue: number;
  enterpriseToEbitda: number;
  '52WeekChange': number;
  SandP52WeekChange: number;
  lastDividendValue: number;
  lastDividendDate: number;
  exchange: string;
  quoteType: string;
  symbol: string;
  underlyingSymbol: string;
  shortName: string;
  longName: string;
  firstTradeDateEpochUtc: number;
  timeZoneFullName: string;
  timeZoneShortName: string;
  uuid: string;
  messageBoardId: string;
  gmtOffSetMilliseconds: number;
  currentPrice: number;
  targetHighPrice: number;
  targetLowPrice: number;
  targetMeanPrice: number;
  targetMedianPrice: number;
  recommendationMean: number;
  recommendationKey: string;
  numberOfAnalystOpinions: number;
  totalCash: number;
  totalCashPerShare: number;
  ebitda: number;
  totalDebt: number;
  quickRatio: number;
  currentRatio: number;
  totalRevenue: number;
  debtToEquity: number;
  revenuePerShare: number;
  returnOnAssets: number;
  returnOnEquity: number;
  freeCashflow: number;
  operatingCashflow: number;
  earningsGrowth: number;
  revenueGrowth: number;
  grossMargins: number;
  ebitdaMargins: number;
  operatingMargins: number;
  financialCurrency: string;
  trailingPegRatio: number;
}

interface CompanyOfficer {
  maxAge: number;
  name: string;
  age?: number;
  title: string;
  yearBorn?: number;
  fiscalYear: number;
  totalPay?: number;
  exercisedValue: number;
  unexercisedValue: number;
}