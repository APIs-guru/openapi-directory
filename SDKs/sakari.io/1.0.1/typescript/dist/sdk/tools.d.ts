import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * toolsShareFile - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS
    **/
    toolsShareFile(req: operations.ToolsShareFileRequest, config?: AxiosRequestConfig): Promise<operations.ToolsShareFileResponse>;
}
