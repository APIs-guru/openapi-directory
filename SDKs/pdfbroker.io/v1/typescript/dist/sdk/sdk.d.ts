import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://pdfbroker.io"];
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
     * getApiPdf - Basic method to verify api is up and running
    **/
    getApiPdf(config?: AxiosRequestConfig): Promise<operations.GetApiPdfResponse>;
    /**
     * postApiPdfWkhtmltopdf - Generate pdf file from url using the excellent tool wkhtmltopdf.
    **/
    postApiPdfWkhtmltopdf(req: operations.PostApiPdfWkhtmltopdfRequest, config?: AxiosRequestConfig): Promise<operations.PostApiPdfWkhtmltopdfResponse>;
}
export {};
