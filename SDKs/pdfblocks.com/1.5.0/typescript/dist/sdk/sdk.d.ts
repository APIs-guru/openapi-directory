import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.pdfblocks.com", "https://eu.api.pdfblocks.com"];
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
     * addImageWatermarkV1 - Add an image watermark to a PDF
     *
     * Add an image watermark to each page of a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/add-watermark-image - Documentation and examples
    **/
    addImageWatermarkV1(req: operations.AddImageWatermarkV1Request, config?: AxiosRequestConfig): Promise<operations.AddImageWatermarkV1Response>;
    /**
     * addPasswordV1 - Add a password to a PDF
     *
     * Protect a PDF document with a password. Encrypt the PDF document to prevent unauthorized access.
     *
     * https://www.pdfblocks.com/docs/api/v1/add-password - Documentation and examples
    **/
    addPasswordV1(req: operations.AddPasswordV1Request, config?: AxiosRequestConfig): Promise<operations.AddPasswordV1Response>;
    /**
     * addRestrictionsV1 - Add restrictions to a PDF
     *
     * Add restrictions to prevent copying, printing, and modifying a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/add-restrictions - Documentation and examples
    **/
    addRestrictionsV1(req: operations.AddRestrictionsV1Request, config?: AxiosRequestConfig): Promise<operations.AddRestrictionsV1Response>;
    /**
     * addTextWatermarkV1 - Add a text watermark to a PDF
     *
     * Add a text watermark to each page of a PDF document. Choose from several watermark templates.
     *
     * https://www.pdfblocks.com/docs/api/v1/add-watermark-text - Documentation and examples
    **/
    addTextWatermarkV1(req: operations.AddTextWatermarkV1Request, config?: AxiosRequestConfig): Promise<operations.AddTextWatermarkV1Response>;
    /**
     * extractPagesV1 - Extract pages from a PDF
     *
     * Extract one or more pages from a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/extract-pages - Documentation and examples
    **/
    extractPagesV1(req: operations.ExtractPagesV1Request, config?: AxiosRequestConfig): Promise<operations.ExtractPagesV1Response>;
    /**
     * mergeDocumentsV1 - Merge PDF documents
     *
     * Combine multiple PDF documents into a single PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/merge-documents - Documentation and examples
    **/
    mergeDocumentsV1(req: operations.MergeDocumentsV1Request, config?: AxiosRequestConfig): Promise<operations.MergeDocumentsV1Response>;
    /**
     * removePagesV1 - Remove pages from a PDF
     *
     * Remove one or more pages from a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/remove-pages - Documentation and examples
    **/
    removePagesV1(req: operations.RemovePagesV1Request, config?: AxiosRequestConfig): Promise<operations.RemovePagesV1Response>;
    /**
     * removePasswordV1 - Remove the password from a PDF
     *
     * Remove the password from an encrypted PDF document. The PDF document will no longer require a password to open.
     *
     * https://www.pdfblocks.com/docs/api/v1/remove-password - Documentation and examples
    **/
    removePasswordV1(req: operations.RemovePasswordV1Request, config?: AxiosRequestConfig): Promise<operations.RemovePasswordV1Response>;
    /**
     * removeRestrictionsV1 - Remove the restrictions from a PDF
     *
     * Remove all the restrictions from a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/remove-restrictions - Documentation and examples
    **/
    removeRestrictionsV1(req: operations.RemoveRestrictionsV1Request, config?: AxiosRequestConfig): Promise<operations.RemoveRestrictionsV1Response>;
    /**
     * removeSignaturesV1 - Remove the signatures from a PDF
     *
     * Remove the cryptographic signatures and timestamps from a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/remove-signatures - Documentation and examples
    **/
    removeSignaturesV1(req: operations.RemoveSignaturesV1Request, config?: AxiosRequestConfig): Promise<operations.RemoveSignaturesV1Response>;
    /**
     * reversePagesV1 - Reverse the pages of a PDF
     *
     * Reverse the order of the pages of a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/reverse-pages - Documentation and examples
    **/
    reversePagesV1(req: operations.ReversePagesV1Request, config?: AxiosRequestConfig): Promise<operations.ReversePagesV1Response>;
    /**
     * rotatePagesV1 - Rotate pages in a PDF
     *
     * Rotate one or more pages in a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/rotate-pages - Documentation and examples
    **/
    rotatePagesV1(req: operations.RotatePagesV1Request, config?: AxiosRequestConfig): Promise<operations.RotatePagesV1Response>;
}
export {};
