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
    /**
     * contactsCreate - Create contact
    **/
    contactsCreate(req: operations.ContactsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContactsCreateResponse>;
    /**
     * contactsFetch - Fetch contact by ID
    **/
    contactsFetch(req: operations.ContactsFetchRequest, config?: AxiosRequestConfig): Promise<operations.ContactsFetchResponse>;
    /**
     * contactsFetchAll - Fetch contacts
    **/
    contactsFetchAll(req: operations.ContactsFetchAllRequest, config?: AxiosRequestConfig): Promise<operations.ContactsFetchAllResponse>;
    /**
     * contactsRemove - Deletes a contact
    **/
    contactsRemove(req: operations.ContactsRemoveRequest, config?: AxiosRequestConfig): Promise<operations.ContactsRemoveResponse>;
    /**
     * contactsUpdate - Updates a contact
    **/
    contactsUpdate(req: operations.ContactsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContactsUpdateResponse>;
}
