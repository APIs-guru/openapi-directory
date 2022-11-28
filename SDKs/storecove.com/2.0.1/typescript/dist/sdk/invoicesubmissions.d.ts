import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InvoiceSubmissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createInvoiceSubmission - Submit a new invoice
     *
     * Submit an invoice for delivery.
    **/
    createInvoiceSubmission(req: operations.CreateInvoiceSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.CreateInvoiceSubmissionResponse>;
    /**
     * preflightInvoiceRecipient - Preflight an invoice recipient
     *
     * Check whether Storecove can deliver an invoice for a list of ids.
    **/
    preflightInvoiceRecipient(req: operations.PreflightInvoiceRecipientRequest, config?: AxiosRequestConfig): Promise<operations.PreflightInvoiceRecipientResponse>;
    /**
     * showInvoiceSubmissionEvidence - Get InvoiceSubmission Evidence
     *
     * Get evidence for an InvoiceSubmission by GUID with corresponding status
    **/
    showInvoiceSubmissionEvidence(req: operations.ShowInvoiceSubmissionEvidenceRequest, config?: AxiosRequestConfig): Promise<operations.ShowInvoiceSubmissionEvidenceResponse>;
}
