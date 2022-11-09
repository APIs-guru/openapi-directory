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
     * Returns a variety of information about the Tweet specified by the requested ID
    **/
    FindTweetById(req: operations.FindTweetByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindTweetByIdResponse>;
    /**
     * Returns a variety of information about the Tweet specified by the requested ID
    **/
    FindTweetsById(req: operations.FindTweetsByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindTweetsByIdResponse>;
    /**
     * This endpoint returns information about a user. Specify user by ID.
    **/
    FindUserById(req: operations.FindUserByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindUserByIdResponse>;
    /**
     * This endpoint returns information about a user. Specify user by username.
    **/
    FindUserByUsername(req: operations.FindUserByUsernameRequest, config?: AxiosRequestConfig): Promise<operations.FindUserByUsernameResponse>;
    /**
     * This endpoint returns information about users. Specify users by their ID.
    **/
    FindUsersById(req: operations.FindUsersByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindUsersByIdResponse>;
    /**
     * This endpoint returns information about users. Specify users by their username.
    **/
    FindUsersByUsername(req: operations.FindUsersByUsernameRequest, config?: AxiosRequestConfig): Promise<operations.FindUsersByUsernameResponse>;
    /**
     * Full open api spec in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
    **/
    GetOpenApiSpec(config?: AxiosRequestConfig): Promise<operations.GetOpenApiSpecResponse>;
}
export {};
