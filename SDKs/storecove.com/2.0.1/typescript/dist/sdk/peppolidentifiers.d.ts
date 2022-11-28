import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PeppolIdentifiers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createPeppolIdentifier - Create a new PeppolIdentifier
     *
     * Create a new PeppolIdentifier.
    **/
    createPeppolIdentifier(req: operations.CreatePeppolIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.CreatePeppolIdentifierResponse>;
    /**
     * deletePeppolIdentifier - Delete PeppolIdentifier
     *
     * Delete a PeppolIdentifier.
    **/
    deletePeppolIdentifier(req: operations.DeletePeppolIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.DeletePeppolIdentifierResponse>;
}
