import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InlineScript {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createInlineScriptTag - インラインスクリプトタグの登録
    **/
    createInlineScriptTag(req: operations.CreateInlineScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateInlineScriptTagResponse>;
    /**
     * deleteInlineScriptTag - インラインスクリプトタグの削除
    **/
    deleteInlineScriptTag(req: operations.DeleteInlineScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInlineScriptTagResponse>;
    /**
     * getInlineScriptTag - インラインスクリプトタグの取得
    **/
    getInlineScriptTag(req: operations.GetInlineScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.GetInlineScriptTagResponse>;
    /**
     * getInlineScriptTags - インラインスクリプトタグの取得
    **/
    getInlineScriptTags(req: operations.GetInlineScriptTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetInlineScriptTagsResponse>;
    /**
     * updateInlineScriptTag - インラインスクリプトタグの更新
    **/
    updateInlineScriptTag(req: operations.UpdateInlineScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInlineScriptTagResponse>;
}
