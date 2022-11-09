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
    CreateCredentialAws(req: operations.CreateCredentialAwsRequest, config?: AxiosRequestConfig): Promise<operations.CreateCredentialAwsResponse>;
    CreateCredentialPublicKey(req: operations.CreateCredentialPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateCredentialPublicKeyResponse>;
    CreateSecondaryAuthToken(req: operations.CreateSecondaryAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateSecondaryAuthTokenResponse>;
    DeleteCredentialAws(req: operations.DeleteCredentialAwsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialAwsResponse>;
    DeleteCredentialPublicKey(req: operations.DeleteCredentialPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialPublicKeyResponse>;
    DeleteSecondaryAuthToken(req: operations.DeleteSecondaryAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSecondaryAuthTokenResponse>;
    FetchCredentialAws(req: operations.FetchCredentialAwsRequest, config?: AxiosRequestConfig): Promise<operations.FetchCredentialAwsResponse>;
    FetchCredentialPublicKey(req: operations.FetchCredentialPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.FetchCredentialPublicKeyResponse>;
    ListCredentialAws(req: operations.ListCredentialAwsRequest, config?: AxiosRequestConfig): Promise<operations.ListCredentialAwsResponse>;
    ListCredentialPublicKey(req: operations.ListCredentialPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ListCredentialPublicKeyResponse>;
    UpdateAuthTokenPromotion(req: operations.UpdateAuthTokenPromotionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuthTokenPromotionResponse>;
    UpdateCredentialAws(req: operations.UpdateCredentialAwsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialAwsResponse>;
    UpdateCredentialPublicKey(req: operations.UpdateCredentialPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialPublicKeyResponse>;
}
export {};
