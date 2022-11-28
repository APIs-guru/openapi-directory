import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ScriptDeprecated {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteV1ScriptTagsScriptTagIdJson - スクリプトタグの削除
    **/
    deleteV1ScriptTagsScriptTagIdJson(req: operations.DeleteV1ScriptTagsScriptTagIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV1ScriptTagsScriptTagIdJsonResponse>;
    /**
     * createScriptTag - スクリプトタグの作成
    **/
    createScriptTag(req: operations.CreateScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateScriptTagResponse>;
    /**
     * getScriptTag - スクリプトタグの取得
    **/
    getScriptTag(req: operations.GetScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.GetScriptTagResponse>;
    /**
     * getScriptTags - スクリプトタグの取得
    **/
    getScriptTags(req: operations.GetScriptTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetScriptTagsResponse>;
    /**
     * updateScriptTag - スクリプトタグの更新
    **/
    updateScriptTag(req: operations.UpdateScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScriptTagResponse>;
}
