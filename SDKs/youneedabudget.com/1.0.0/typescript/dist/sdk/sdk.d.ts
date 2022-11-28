import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.youneedabudget.com/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * bulkCreateTransactions - Bulk create transactions
     *
     * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
    **/
    bulkCreateTransactions(req: operations.BulkCreateTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.BulkCreateTransactionsResponse>;
    /**
     * createAccount - Create a new account
     *
     * Creates a new account
    **/
    createAccount(req: operations.CreateAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountResponse>;
    /**
     * createTransaction - Create a single transaction or multiple transactions
     *
     * Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.
    **/
    createTransaction(req: operations.CreateTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CreateTransactionResponse>;
    /**
     * getAccountById - Single account
     *
     * Returns a single account
    **/
    getAccountById(req: operations.GetAccountByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountByIdResponse>;
    /**
     * getAccounts - Account list
     *
     * Returns all accounts
    **/
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * getBudgetById - Single budget
     *
     * Returns a single budget with all related entities.  This resource is effectively a full budget export.
    **/
    getBudgetById(req: operations.GetBudgetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetByIdResponse>;
    /**
     * getBudgetMonth - Single budget month
     *
     * Returns a single budget month
    **/
    getBudgetMonth(req: operations.GetBudgetMonthRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetMonthResponse>;
    /**
     * getBudgetMonths - List budget months
     *
     * Returns all budget months
    **/
    getBudgetMonths(req: operations.GetBudgetMonthsRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetMonthsResponse>;
    /**
     * getBudgetSettingsById - Budget Settings
     *
     * Returns settings for a budget
    **/
    getBudgetSettingsById(req: operations.GetBudgetSettingsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetSettingsByIdResponse>;
    /**
     * getBudgets - List budgets
     *
     * Returns budgets list with summary information
    **/
    getBudgets(req: operations.GetBudgetsRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetsResponse>;
    /**
     * getCategories - List categories
     *
     * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
    **/
    getCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * getCategoryById - Single category
     *
     * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
    **/
    getCategoryById(req: operations.GetCategoryByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryByIdResponse>;
    /**
     * getMonthCategoryById - Single category for a specific budget month
     *
     * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
    **/
    getMonthCategoryById(req: operations.GetMonthCategoryByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMonthCategoryByIdResponse>;
    /**
     * getPayeeById - Single payee
     *
     * Returns a single payee
    **/
    getPayeeById(req: operations.GetPayeeByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeByIdResponse>;
    /**
     * getPayeeLocationById - Single payee location
     *
     * Returns a single payee location
    **/
    getPayeeLocationById(req: operations.GetPayeeLocationByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeLocationByIdResponse>;
    /**
     * getPayeeLocations - List payee locations
     *
     * Returns all payee locations
    **/
    getPayeeLocations(req: operations.GetPayeeLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeLocationsResponse>;
    /**
     * getPayeeLocationsByPayee - List locations for a payee
     *
     * Returns all payee locations for a specified payee
    **/
    getPayeeLocationsByPayee(req: operations.GetPayeeLocationsByPayeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeLocationsByPayeeResponse>;
    /**
     * getPayees - List payees
     *
     * Returns all payees
    **/
    getPayees(req: operations.GetPayeesRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeesResponse>;
    /**
     * getScheduledTransactionById - Single scheduled transaction
     *
     * Returns a single scheduled transaction
    **/
    getScheduledTransactionById(req: operations.GetScheduledTransactionByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledTransactionByIdResponse>;
    /**
     * getScheduledTransactions - List scheduled transactions
     *
     * Returns all scheduled transactions
    **/
    getScheduledTransactions(req: operations.GetScheduledTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledTransactionsResponse>;
    /**
     * getTransactionById - Single transaction
     *
     * Returns a single transaction
    **/
    getTransactionById(req: operations.GetTransactionByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionByIdResponse>;
    /**
     * getTransactions - List transactions
     *
     * Returns budget transactions
    **/
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * getTransactionsByAccount - List account transactions
     *
     * Returns all transactions for a specified account
    **/
    getTransactionsByAccount(req: operations.GetTransactionsByAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByAccountResponse>;
    /**
     * getTransactionsByCategory - List category transactions
     *
     * Returns all transactions for a specified category
    **/
    getTransactionsByCategory(req: operations.GetTransactionsByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByCategoryResponse>;
    /**
     * getTransactionsByPayee - List payee transactions
     *
     * Returns all transactions for a specified payee
    **/
    getTransactionsByPayee(req: operations.GetTransactionsByPayeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByPayeeResponse>;
    /**
     * getUser - User info
     *
     * Returns authenticated user information
    **/
    getUser(config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * importTransactions - Import transactions
     *
     * Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.
    **/
    importTransactions(req: operations.ImportTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ImportTransactionsResponse>;
    /**
     * updateMonthCategory - Update a category for a specific month
     *
     * Update a category for a specific month.  Only `budgeted` amount can be updated.
    **/
    updateMonthCategory(req: operations.UpdateMonthCategoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMonthCategoryResponse>;
    /**
     * updateTransaction - Updates an existing transaction
     *
     * Updates a single transaction
    **/
    updateTransaction(req: operations.UpdateTransactionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTransactionResponse>;
    /**
     * updateTransactions - Update multiple transactions
     *
     * Updates multiple transactions, by `id` or `import_id`.
    **/
    updateTransactions(req: operations.UpdateTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTransactionsResponse>;
}
export {};
