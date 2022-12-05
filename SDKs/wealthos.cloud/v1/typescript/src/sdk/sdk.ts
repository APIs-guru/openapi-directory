import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { BankAccounts } from "./bankaccounts";
import { Fees } from "./fees";
import { FinancialProducts } from "./financialproducts";
import { InvestmentProductTransactions } from "./investmentproducttransactions";
import { InvestmentProducts } from "./investmentproducts";
import { InvestorAccounts } from "./investoraccounts";
import { Investors } from "./investors";
import { Payments } from "./payments";
import { PortfolioTemplates } from "./portfoliotemplates";
import { PotsHoldingsAndTransactions } from "./potsholdingsandtransactions";
import { Rates } from "./rates";
import { Rebalance } from "./rebalance";
import { SwitchInstruction } from "./switchinstruction";
import { TestMethods } from "./testmethods";
import { Utility } from "./utility";
import { Withdrawal } from "./withdrawal";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://wos-gb.demo.wealthos.cloud",
] as const;

export function withServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.replaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function withClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {
  public bankAccounts: BankAccounts;
  public fees: Fees;
  public financialProducts: FinancialProducts;
  public investmentProductTransactions: InvestmentProductTransactions;
  public investmentProducts: InvestmentProducts;
  public investorAccounts: InvestorAccounts;
  public investors: Investors;
  public payments: Payments;
  public portfolioTemplates: PortfolioTemplates;
  public potsHoldingsAndTransactions: PotsHoldingsAndTransactions;
  public rates: Rates;
  public rebalance: Rebalance;
  public switchInstruction: SwitchInstruction;
  public testMethods: TestMethods;
  public utility: Utility;
  public withdrawal: Withdrawal;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (!this._serverURL) {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
    this.bankAccounts = new BankAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fees = new Fees(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.financialProducts = new FinancialProducts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.investmentProductTransactions = new InvestmentProductTransactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.investmentProducts = new InvestmentProducts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.investorAccounts = new InvestorAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.investors = new Investors(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.payments = new Payments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.portfolioTemplates = new PortfolioTemplates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.potsHoldingsAndTransactions = new PotsHoldingsAndTransactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rates = new Rates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rebalance = new Rebalance(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.switchInstruction = new SwitchInstruction(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.testMethods = new TestMethods(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.utility = new Utility(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.withdrawal = new Withdrawal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
