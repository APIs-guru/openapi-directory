import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://media.twilio.com"];
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
    createMediaProcessor(req: operations.CreateMediaProcessorRequest, config?: AxiosRequestConfig): Promise<operations.CreateMediaProcessorResponse>;
    createPlayerStreamer(req: operations.CreatePlayerStreamerRequest, config?: AxiosRequestConfig): Promise<operations.CreatePlayerStreamerResponse>;
    createPlayerStreamerPlaybackGrant(req: operations.CreatePlayerStreamerPlaybackGrantRequest, config?: AxiosRequestConfig): Promise<operations.CreatePlayerStreamerPlaybackGrantResponse>;
    /**
     * deleteMediaRecording - Deletes a MediaRecording resource identified by a SID.
    **/
    deleteMediaRecording(req: operations.DeleteMediaRecordingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMediaRecordingResponse>;
    /**
     * fetchMediaProcessor - Returns a single MediaProcessor resource identified by a SID.
    **/
    fetchMediaProcessor(req: operations.FetchMediaProcessorRequest, config?: AxiosRequestConfig): Promise<operations.FetchMediaProcessorResponse>;
    /**
     * fetchMediaRecording - Returns a single MediaRecording resource identified by a SID.
    **/
    fetchMediaRecording(req: operations.FetchMediaRecordingRequest, config?: AxiosRequestConfig): Promise<operations.FetchMediaRecordingResponse>;
    /**
     * fetchPlayerStreamer - Returns a single PlayerStreamer resource identified by a SID.
    **/
    fetchPlayerStreamer(req: operations.FetchPlayerStreamerRequest, config?: AxiosRequestConfig): Promise<operations.FetchPlayerStreamerResponse>;
    /**
     * fetchPlayerStreamerPlaybackGrant - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
    **/
    fetchPlayerStreamerPlaybackGrant(req: operations.FetchPlayerStreamerPlaybackGrantRequest, config?: AxiosRequestConfig): Promise<operations.FetchPlayerStreamerPlaybackGrantResponse>;
    /**
     * listMediaProcessor - Returns a list of MediaProcessors.
    **/
    listMediaProcessor(req: operations.ListMediaProcessorRequest, config?: AxiosRequestConfig): Promise<operations.ListMediaProcessorResponse>;
    /**
     * listMediaRecording - Returns a list of MediaRecordings.
    **/
    listMediaRecording(req: operations.ListMediaRecordingRequest, config?: AxiosRequestConfig): Promise<operations.ListMediaRecordingResponse>;
    /**
     * listPlayerStreamer - Returns a list of PlayerStreamers.
    **/
    listPlayerStreamer(req: operations.ListPlayerStreamerRequest, config?: AxiosRequestConfig): Promise<operations.ListPlayerStreamerResponse>;
    /**
     * updateMediaProcessor - Updates a MediaProcessor resource identified by a SID.
    **/
    updateMediaProcessor(req: operations.UpdateMediaProcessorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMediaProcessorResponse>;
    /**
     * updatePlayerStreamer - Updates a PlayerStreamer resource identified by a SID.
    **/
    updatePlayerStreamer(req: operations.UpdatePlayerStreamerRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePlayerStreamerResponse>;
}
export {};
