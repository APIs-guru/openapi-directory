import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.pocketsmith.com/v2"];
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
     * deleteAccountsId - Delete account
     *
     * Deletes an account and all its data by ID, optionally merge scenarios into another account.
    **/
    deleteAccountsId(req: operations.DeleteAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountsIdResponse>;
    /**
     * deleteAttachmentsId - Delete attachment
     *
     * Deletes a particular attachment by its ID.
    **/
    deleteAttachmentsId(req: operations.DeleteAttachmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttachmentsIdResponse>;
    /**
     * deleteCategoriesId - Delete category
     *
     * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
    **/
    deleteCategoriesId(req: operations.DeleteCategoriesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCategoriesIdResponse>;
    /**
     * deleteInstitutionsId - Delete institution
     *
     * Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.
    **/
    deleteInstitutionsId(req: operations.DeleteInstitutionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstitutionsIdResponse>;
    /**
     * deleteTransactionsTransactionIdAttachmentsAttachmentId - Unassigns attachment in transaction
     *
     * Unassigns a particular attachment by its ID from the transaction ID. This does not delete the attachment, it only removes its association from the transaction.
    **/
    deleteTransactionsTransactionIdAttachmentsAttachmentId(req: operations.DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransactionsTransactionIdAttachmentsAttachmentIdResponse>;
    /**
     * getAccountsId - Get account
     *
     * Gets an account by its ID.
    **/
    getAccountsId(req: operations.GetAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsIdResponse>;
    /**
     * getAccountsIdTransactions - List transactions in account
     *
     * Lists transactions belonging to an account by its ID.
    **/
    getAccountsIdTransactions(req: operations.GetAccountsIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsIdTransactionsResponse>;
    /**
     * getAttachmentsId - Get attachment
     *
     * Gets a particular attachment by its ID.
    **/
    getAttachmentsId(req: operations.GetAttachmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentsIdResponse>;
    /**
     * getCategoriesId - Get category
     *
     * Gets a particular category by its ID.
    **/
    getCategoriesId(req: operations.GetCategoriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesIdResponse>;
    /**
     * getInstitutionsId - Get institution
     *
     * Gets an institution by its ID.
    **/
    getInstitutionsId(req: operations.GetInstitutionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInstitutionsIdResponse>;
    /**
     * getInstitutionsIdAccounts - List accounts in institution
     *
     * Lists accounts belonging to an institution by its ID.
    **/
    getInstitutionsIdAccounts(req: operations.GetInstitutionsIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstitutionsIdAccountsResponse>;
    /**
     * getMe - Get the authorised user
     *
     * Gets the user that corresponds to the access token used in the request.
    **/
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * getTransactionAccountsId - Get transaction account
     *
     * Gets a transaction account by its ID.
    **/
    getTransactionAccountsId(req: operations.GetTransactionAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionAccountsIdResponse>;
    /**
     * getTransactionAccountsIdTransactions - List transactions in transaction account
     *
     * Lists transactions belonging to a transaction account by its ID.
    **/
    getTransactionAccountsIdTransactions(req: operations.GetTransactionAccountsIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionAccountsIdTransactionsResponse>;
    /**
     * getTransactionsId - Get a transaction
     *
     * Gets a transaction by its ID.
    **/
    getTransactionsId(req: operations.GetTransactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsIdResponse>;
    /**
     * getTransactionsIdAttachments - List attachments in transaction
     *
     * Lists attachments belonging to a transaction by their ID.
    **/
    getTransactionsIdAttachments(req: operations.GetTransactionsIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsIdAttachmentsResponse>;
    /**
     * getUsersId - Get user
     *
     * Gets a user by ID. You must be authorised as the target user in order to make this request.
    **/
    getUsersId(req: operations.GetUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdResponse>;
    /**
     * getUsersIdAccounts - List accounts in user
     *
     * Lists all accounts belonging to the user by their ID.
    **/
    getUsersIdAccounts(req: operations.GetUsersIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdAccountsResponse>;
    /**
     * getUsersIdAttachments - Lists attachments in user
     *
     * Lists attachments belonging to a user by their ID.
    **/
    getUsersIdAttachments(req: operations.GetUsersIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdAttachmentsResponse>;
    /**
     * getUsersIdBudget - List budget for user
     *
     * Lists the user's budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.
    **/
    getUsersIdBudget(req: operations.GetUsersIdBudgetRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdBudgetResponse>;
    /**
     * getUsersIdBudgetSummary - Get budget summary for user
     *
     * Get the user's budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.
    **/
    getUsersIdBudgetSummary(req: operations.GetUsersIdBudgetSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdBudgetSummaryResponse>;
    /**
     * getUsersIdCategories - List categories in user
     *
     * Lists all categories belonging to a user by their ID.
    **/
    getUsersIdCategories(req: operations.GetUsersIdCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdCategoriesResponse>;
    /**
     * getUsersIdCategoryRules - List category rules in user
     *
     * Lists all category rules belonging to a user by their ID.
    **/
    getUsersIdCategoryRules(req: operations.GetUsersIdCategoryRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdCategoryRulesResponse>;
    /**
     * getUsersIdInstitutions - List institutions in user
     *
     * Lists all the institutions belonging to the user.
    **/
    getUsersIdInstitutions(req: operations.GetUsersIdInstitutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdInstitutionsResponse>;
    /**
     * getUsersIdTransactionAccounts - List transaction accounts in user
     *
     * List all transaction accounts belonging to a user.
    **/
    getUsersIdTransactionAccounts(req: operations.GetUsersIdTransactionAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdTransactionAccountsResponse>;
    /**
     * getUsersIdTransactions - List transactions in user
     *
     * Lists transactions belonging to a user by their ID.
    **/
    getUsersIdTransactions(req: operations.GetUsersIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdTransactionsResponse>;
    /**
     * getUsersIdTrendAnalysis - Get trend analysis for user
     *
     * Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.
    **/
    getUsersIdTrendAnalysis(req: operations.GetUsersIdTrendAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdTrendAnalysisResponse>;
    /**
     * postCategoriesIdCategoryRules - Create category rule in category
     *
     * Creates a rule to allocate a category to transactions.
    **/
    postCategoriesIdCategoryRules(req: operations.PostCategoriesIdCategoryRulesRequest, config?: AxiosRequestConfig): Promise<operations.PostCategoriesIdCategoryRulesResponse>;
    /**
     * postTransactionAccountsIdTransactions - Create a transaction in transaction account
     *
     * Creates a transaction in a transaction account by its ID.
    **/
    postTransactionAccountsIdTransactions(req: operations.PostTransactionAccountsIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.PostTransactionAccountsIdTransactionsResponse>;
    /**
     * postTransactionsIdAttachments - Assigns attachment to transaction
     *
     * Assigns an attachment to the transaction by their ID.
    **/
    postTransactionsIdAttachments(req: operations.PostTransactionsIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostTransactionsIdAttachmentsResponse>;
    /**
     * postUsersIdAccounts - Create an account in user
     *
     * Creates and returns an account belonging to the user by their ID.
    **/
    postUsersIdAccounts(req: operations.PostUsersIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdAccountsResponse>;
    /**
     * postUsersIdAttachments - Create attachment in user
     *
     * Creates an attachment belonging to the user by their ID.
    **/
    postUsersIdAttachments(req: operations.PostUsersIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdAttachmentsResponse>;
    /**
     * postUsersIdCategories - Create category in user
     *
     * Creates a category belonging to the user by their ID.
    **/
    postUsersIdCategories(req: operations.PostUsersIdCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdCategoriesResponse>;
    /**
     * postUsersIdInstitutions - Create institution in user
     *
     * Creates an institution belonging to a user.
    **/
    postUsersIdInstitutions(req: operations.PostUsersIdInstitutionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdInstitutionsResponse>;
    /**
     * putAccountsId - Update account
     *
     * Updates and returns an account by its ID.
    **/
    putAccountsId(req: operations.PutAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountsIdResponse>;
    /**
     * putAttachmentsId - Update attachment
     *
     * Updates the title of the attachment.
    **/
    putAttachmentsId(req: operations.PutAttachmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAttachmentsIdResponse>;
    /**
     * putCategoriesId - Update category
     *
     * Updates the title, colour or parent of the category.
    **/
    putCategoriesId(req: operations.PutCategoriesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCategoriesIdResponse>;
    /**
     * putInstitutionsId - Update institution
     *
     * Updates the title and currency code for an institution.
    **/
    putInstitutionsId(req: operations.PutInstitutionsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutInstitutionsIdResponse>;
    /**
     * putTransactionAccountsId - Update transaction account
     *
     * Change which institution the transaction account belongs to.
    **/
    putTransactionAccountsId(req: operations.PutTransactionAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTransactionAccountsIdResponse>;
    /**
     * putTransactionsId - Update a transaction
     *
     * Updates a transaction by its ID.
    **/
    putTransactionsId(req: operations.PutTransactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTransactionsIdResponse>;
    /**
     * putUsersId - Update user
     *
     * Updates the user by their ID. You must be authorised as the target user in order to make this request.
    **/
    putUsersId(req: operations.PutUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdResponse>;
    /**
     * putUsersIdAccounts - Update the display order of accounts in user
     *
     * Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.
    **/
    putUsersIdAccounts(req: operations.PutUsersIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdAccountsResponse>;
}
export {};
