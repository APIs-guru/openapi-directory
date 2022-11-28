import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Contacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    contactsGet(req: operations.ContactsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContactsGetResponse>;
    contactsPost(req: operations.ContactsPostRequest, config?: AxiosRequestConfig): Promise<operations.ContactsPostResponse>;
}
