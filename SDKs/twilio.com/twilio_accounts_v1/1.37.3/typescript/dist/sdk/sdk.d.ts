import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://accounts.twilio.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createCredentialAws - Create a new AWS Credential
    **/
    createCredentialAws(req: operations.CreateCredentialAwsRequest, config?: AxiosRequestConfig): Promise<operations.CreateCredentialAwsResponse>;
    /**
     * createCredentialPublicKey - Create a new Public Key Credential
    **/
    createCredentialPublicKey(req: operations.CreateCredentialPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateCredentialPublicKeyResponse>;
    /**
     * createSecondaryAuthToken - Create a new secondary Auth Token
    **/
    createSecondaryAuthToken(req: operations.CreateSecondaryAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateSecondaryAuthTokenResponse>;
    /**
     * deleteCredentialAws - Delete a Credential from your account
    **/
    deleteCredentialAws(req: operations.DeleteCredentialAwsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialAwsResponse>;
    /**
     * deleteCredentialPublicKey - Delete a Credential from your account
    **/
    deleteCredentialPublicKey(req: operations.DeleteCredentialPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialPublicKeyResponse>;
    /**
     * deleteSecondaryAuthToken - Delete the secondary Auth Token from your account
    **/
    deleteSecondaryAuthToken(req: operations.DeleteSecondaryAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSecondaryAuthTokenResponse>;
    /**
     * fetchCredentialAws - Fetch the AWS credentials specified by the provided Credential Sid
    **/
    fetchCredentialAws(req: operations.FetchCredentialAwsRequest, config?: AxiosRequestConfig): Promise<operations.FetchCredentialAwsResponse>;
    /**
     * fetchCredentialPublicKey - Fetch the public key specified by the provided Credential Sid
    **/
    fetchCredentialPublicKey(req: operations.FetchCredentialPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.FetchCredentialPublicKeyResponse>;
    /**
     * listCredentialAws - Retrieves a collection of AWS Credentials belonging to the account used to make the request
    **/
    listCredentialAws(req: operations.ListCredentialAwsRequest, config?: AxiosRequestConfig): Promise<operations.ListCredentialAwsResponse>;
    /**
     * listCredentialPublicKey - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
    **/
    listCredentialPublicKey(req: operations.ListCredentialPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ListCredentialPublicKeyResponse>;
    /**
     * updateAuthTokenPromotion - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
    **/
    updateAuthTokenPromotion(req: operations.UpdateAuthTokenPromotionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuthTokenPromotionResponse>;
    /**
     * updateCredentialAws - Modify the properties of a given Account
    **/
    updateCredentialAws(req: operations.UpdateCredentialAwsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialAwsResponse>;
    /**
     * updateCredentialPublicKey - Modify the properties of a given Account
    **/
    updateCredentialPublicKey(req: operations.UpdateCredentialPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialPublicKeyResponse>;
}
export {};
