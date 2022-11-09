import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Adds an asset to the system
    **/
    CreateAsset(req: operations.CreateAssetRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssetResponse>;
    /**
     * Adds an fixed asset type to the system
    **/
    CreateAssetType(req: operations.CreateAssetTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssetTypeResponse>;
    /**
     * By passing in the appropriate asset id, you can search for
     * a specific fixed asset in the system
     *
    **/
    GetAssetById(req: operations.GetAssetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetByIdResponse>;
    /**
     * By passing in the appropriate options, you can search for available fixed asset types in the system
    **/
    GetAssetSettings(req: operations.GetAssetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetSettingsResponse>;
    /**
     * By passing in the appropriate options, you can search for available fixed asset types in the system
    **/
    GetAssetTypes(req: operations.GetAssetTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetTypesResponse>;
    /**
     * By passing in the appropriate options, you can search for available fixed asset in the system
    **/
    GetAssets(req: operations.GetAssetsRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetsResponse>;
}
export {};
