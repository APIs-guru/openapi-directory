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
    CreateBinding(req: operations.CreateBindingRequest, config?: AxiosRequestConfig): Promise<operations.CreateBindingResponse>;
    CreateCredential(req: operations.CreateCredentialRequest, config?: AxiosRequestConfig): Promise<operations.CreateCredentialResponse>;
    CreateNotification(req: operations.CreateNotificationRequest, config?: AxiosRequestConfig): Promise<operations.CreateNotificationResponse>;
    CreateService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    DeleteBinding(req: operations.DeleteBindingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBindingResponse>;
    DeleteCredential(req: operations.DeleteCredentialRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialResponse>;
    DeleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    FetchBinding(req: operations.FetchBindingRequest, config?: AxiosRequestConfig): Promise<operations.FetchBindingResponse>;
    FetchCredential(req: operations.FetchCredentialRequest, config?: AxiosRequestConfig): Promise<operations.FetchCredentialResponse>;
    FetchService(req: operations.FetchServiceRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    ListBinding(req: operations.ListBindingRequest, config?: AxiosRequestConfig): Promise<operations.ListBindingResponse>;
    ListCredential(req: operations.ListCredentialRequest, config?: AxiosRequestConfig): Promise<operations.ListCredentialResponse>;
    ListService(req: operations.ListServiceRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    UpdateCredential(req: operations.UpdateCredentialRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialResponse>;
    UpdateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
}
export {};
