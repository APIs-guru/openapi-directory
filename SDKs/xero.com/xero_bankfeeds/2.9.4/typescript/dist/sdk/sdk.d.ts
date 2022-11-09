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
     * By passing in the FeedConnections array object in the body, you can create one or more new feed connections
    **/
    CreateFeedConnections(req: operations.CreateFeedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.CreateFeedConnectionsResponse>;
    CreateStatements(req: operations.CreateStatementsRequest, config?: AxiosRequestConfig): Promise<operations.CreateStatementsResponse>;
    /**
     * By passing in FeedConnections array object in the body, you can delete a feed connection.
    **/
    DeleteFeedConnections(req: operations.DeleteFeedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFeedConnectionsResponse>;
    /**
     * By passing in a FeedConnection Id options, you can search for matching feed connections
    **/
    GetFeedConnection(req: operations.GetFeedConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GetFeedConnectionResponse>;
    /**
     * By passing in the appropriate options, you can search for available feed connections in the system.
    **/
    GetFeedConnections(req: operations.GetFeedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetFeedConnectionsResponse>;
    /**
     * By passing in a statement id, you can search for matching statements
    **/
    GetStatement(req: operations.GetStatementRequest, config?: AxiosRequestConfig): Promise<operations.GetStatementResponse>;
    /**
     * By passing in parameters, you can search for matching statements
    **/
    GetStatements(req: operations.GetStatementsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatementsResponse>;
}
export {};
