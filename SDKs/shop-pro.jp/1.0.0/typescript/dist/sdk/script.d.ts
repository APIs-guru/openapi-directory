import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Script {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createShopScriptTag - スクリプトタグの作成
    **/
    createShopScriptTag(req: operations.CreateShopScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateShopScriptTagResponse>;
    /**
     * deleteScriptTag - スクリプトタグの削除
    **/
    deleteScriptTag(req: operations.DeleteScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScriptTagResponse>;
    /**
     * getShopScriptTag - スクリプトタグの取得
    **/
    getShopScriptTag(req: operations.GetShopScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.GetShopScriptTagResponse>;
    /**
     * getShopScriptTags - スクリプトタグの取得
    **/
    getShopScriptTags(req: operations.GetShopScriptTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetShopScriptTagsResponse>;
    /**
     * updateShopScriptTag - スクリプトタグの更新
    **/
    updateShopScriptTag(req: operations.UpdateShopScriptTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateShopScriptTagResponse>;
}
