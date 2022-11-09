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
    CreateMediaProcessor(req: operations.CreateMediaProcessorRequest, config?: AxiosRequestConfig): Promise<operations.CreateMediaProcessorResponse>;
    CreatePlayerStreamer(req: operations.CreatePlayerStreamerRequest, config?: AxiosRequestConfig): Promise<operations.CreatePlayerStreamerResponse>;
    CreatePlayerStreamerPlaybackGrant(req: operations.CreatePlayerStreamerPlaybackGrantRequest, config?: AxiosRequestConfig): Promise<operations.CreatePlayerStreamerPlaybackGrantResponse>;
    DeleteMediaRecording(req: operations.DeleteMediaRecordingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMediaRecordingResponse>;
    FetchMediaProcessor(req: operations.FetchMediaProcessorRequest, config?: AxiosRequestConfig): Promise<operations.FetchMediaProcessorResponse>;
    FetchMediaRecording(req: operations.FetchMediaRecordingRequest, config?: AxiosRequestConfig): Promise<operations.FetchMediaRecordingResponse>;
    FetchPlayerStreamer(req: operations.FetchPlayerStreamerRequest, config?: AxiosRequestConfig): Promise<operations.FetchPlayerStreamerResponse>;
    FetchPlayerStreamerPlaybackGrant(req: operations.FetchPlayerStreamerPlaybackGrantRequest, config?: AxiosRequestConfig): Promise<operations.FetchPlayerStreamerPlaybackGrantResponse>;
    ListMediaProcessor(req: operations.ListMediaProcessorRequest, config?: AxiosRequestConfig): Promise<operations.ListMediaProcessorResponse>;
    ListMediaRecording(req: operations.ListMediaRecordingRequest, config?: AxiosRequestConfig): Promise<operations.ListMediaRecordingResponse>;
    ListPlayerStreamer(req: operations.ListPlayerStreamerRequest, config?: AxiosRequestConfig): Promise<operations.ListPlayerStreamerResponse>;
    UpdateMediaProcessor(req: operations.UpdateMediaProcessorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMediaProcessorResponse>;
    UpdatePlayerStreamer(req: operations.UpdatePlayerStreamerRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePlayerStreamerResponse>;
}
export {};
