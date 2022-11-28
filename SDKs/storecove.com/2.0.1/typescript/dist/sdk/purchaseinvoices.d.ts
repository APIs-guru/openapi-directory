import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PurchaseInvoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getInvoiceJson - Get Purchase invoice data as JSON
     *
     * Get a specific PurchaseInvoice, in JSON format. Recommended way of getting a PurchaseInvoice, since it provides the data in a JSON object and the JSON format is the richest we have that supports all features a PurchaseInvoice can have.
    **/
    getInvoiceJson(req: operations.GetInvoiceJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceJsonResponse>;
    /**
     * getInvoiceUbl - Get Purchase invoice data as JSON with a Base64-encoded SI-1.2 UBL string
     *
     * Get a specific PurchaseInvoice. Using /json as {packaging} is recommended (in which case you can just omit it), however, this endpoint allows getting the invoice in a differently serialized format such as UBL.
    **/
    getInvoiceUbl(req: operations.GetInvoiceUblRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceUblResponse>;
    /**
     * getInvoiceUblVersioned - Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version
     *
     * Get a specific PurchaseInvoice in a non-JSON serialized format with version.
    **/
    getInvoiceUblVersioned(req: operations.GetInvoiceUblVersionedRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceUblVersionedResponse>;
}
