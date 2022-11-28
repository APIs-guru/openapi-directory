import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Commands {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCommandsId - Delete a Saved Command
    **/
    deleteCommandsId(req: operations.DeleteCommandsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCommandsIdResponse>;
    /**
     * getCommands - Fetch a list of Saved Commands
     *
     * Without params, it returns a list of Saved Commands the user has access to
    **/
    getCommands(req: operations.GetCommandsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommandsResponse>;
    /**
     * getCommandsSend - Fetch a list of Saved Commands supported by Device at the moment
     *
     * Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support
    **/
    getCommandsSend(req: operations.GetCommandsSendRequest, config?: AxiosRequestConfig): Promise<operations.GetCommandsSendResponse>;
    /**
     * getCommandsTypes - Fetch a list of available Commands for the Device or all possible Commands if Device ommited
    **/
    getCommandsTypes(req: operations.GetCommandsTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetCommandsTypesResponse>;
    /**
     * postCommands - Create a Saved Command
    **/
    postCommands(req: operations.PostCommandsRequest, config?: AxiosRequestConfig): Promise<operations.PostCommandsResponse>;
    /**
     * postCommandsSend - Dispatch commands to device
     *
     * Dispatch a new command or Saved Command if _body.id_ set
    **/
    postCommandsSend(req: operations.PostCommandsSendRequest, config?: AxiosRequestConfig): Promise<operations.PostCommandsSendResponse>;
    /**
     * putCommandsId - Update a Saved Command
    **/
    putCommandsId(req: operations.PutCommandsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCommandsIdResponse>;
}
