import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccounts - List accounts
     *
     * Retrieve a paginated list of all accounts for the currently
     * authenticated user. The returned list is paginated and can be scrolled
     * by following the `prev` and `next` links where present.
     *
    **/
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * getAccountsId - Retrieve account
     *
     * Retrieve a specific account by providing its unique identifier.
     *
    **/
    getAccountsId(req: operations.GetAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsIdResponse>;
}
