import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.xero.com/bankfeeds.xro/1.0"];
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
     * createFeedConnections - Create one or more new feed connection
     *
     * By passing in the FeedConnections array object in the body, you can create one or more new feed connections
    **/
    createFeedConnections(req: operations.CreateFeedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.CreateFeedConnectionsResponse>;
    /**
     * createStatements - Creates one or more new statements
    **/
    createStatements(req: operations.CreateStatementsRequest, config?: AxiosRequestConfig): Promise<operations.CreateStatementsResponse>;
    /**
     * deleteFeedConnections - Delete an existing feed connection
     *
     * By passing in FeedConnections array object in the body, you can delete a feed connection.
    **/
    deleteFeedConnections(req: operations.DeleteFeedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFeedConnectionsResponse>;
    /**
     * getFeedConnection - Retrieve single feed connection based on a unique id provided
     *
     * By passing in a FeedConnection Id options, you can search for matching feed connections
    **/
    getFeedConnection(req: operations.GetFeedConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GetFeedConnectionResponse>;
    /**
     * getFeedConnections - Searches for feed connections
     *
     * By passing in the appropriate options, you can search for available feed connections in the system.
    **/
    getFeedConnections(req: operations.GetFeedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetFeedConnectionsResponse>;
    /**
     * getStatement - Retrieve single statement based on unique id provided
     *
     * By passing in a statement id, you can search for matching statements
    **/
    getStatement(req: operations.GetStatementRequest, config?: AxiosRequestConfig): Promise<operations.GetStatementResponse>;
    /**
     * getStatements - Retrieve all statements
     *
     * By passing in parameters, you can search for matching statements
    **/
    getStatements(req: operations.GetStatementsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatementsResponse>;
}
export {};
