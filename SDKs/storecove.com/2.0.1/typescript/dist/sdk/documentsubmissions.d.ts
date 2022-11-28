import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DocumentSubmissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDocumentSubmission - *** NOTE: Experimental. Only to be used for sending Invoice Response documents. *** Submit a new document.
     *
     * Submit a document for delivery. This endpoint will replace the /invoice_submissions endpoint, but for now should only be used to send Invoice Response doucments.
    **/
    createDocumentSubmission(req: operations.CreateDocumentSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocumentSubmissionResponse>;
}
