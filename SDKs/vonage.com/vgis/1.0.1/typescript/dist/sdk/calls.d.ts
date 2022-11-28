import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Calls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * callAnswer - Answer call (On supported devices)
    **/
    callAnswer(req: operations.CallAnswerRequest, config?: AxiosRequestConfig): Promise<operations.CallAnswerResponse>;
    /**
     * callHold - Put call on hold
    **/
    callHold(req: operations.CallHoldRequest, config?: AxiosRequestConfig): Promise<operations.CallHoldResponse>;
    /**
     * callTransfer - Transfer call
    **/
    callTransfer(req: operations.CallTransferRequest, config?: AxiosRequestConfig): Promise<operations.CallTransferResponse>;
    /**
     * callUnold - Unhold
    **/
    callUnold(req: operations.CallUnoldRequest, config?: AxiosRequestConfig): Promise<operations.CallUnoldResponse>;
    /**
     * callVmTransfer - Send call to voicemail
    **/
    callVmTransfer(req: operations.CallVmTransferRequest, config?: AxiosRequestConfig): Promise<operations.CallVmTransferResponse>;
    /**
     * createCall - Place a call
    **/
    createCall(req: operations.CreateCallRequest, config?: AxiosRequestConfig): Promise<operations.CreateCallResponse>;
    /**
     * destroyCall - End a call
    **/
    destroyCall(req: operations.DestroyCallRequest, config?: AxiosRequestConfig): Promise<operations.DestroyCallResponse>;
    /**
     * getCallsCount - Get calls count
    **/
    getCallsCount(req: operations.GetCallsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetCallsCountResponse>;
    /**
     * getRoles - Get a call
    **/
    getRoles(req: operations.GetRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetRolesResponse>;
    /**
     * listCalls - List active calls
     *
     * Lists currently active calls
    **/
    listCalls(req: operations.ListCallsRequest, config?: AxiosRequestConfig): Promise<operations.ListCallsResponse>;
}
