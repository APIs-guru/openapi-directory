import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Recordings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAdminRecordingsStatus - Get recording status
    **/
    getAdminRecordingsStatus(config?: AxiosRequestConfig): Promise<operations.GetAdminRecordingsStatusResponse>;
    /**
     * postAdminRecordingsSnapshot - Take a snapshot recording
    **/
    postAdminRecordingsSnapshot(req: operations.PostAdminRecordingsSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminRecordingsSnapshotResponse>;
    /**
     * postAdminRecordingsStart - Start recording
     *
     * Begin recording stub mappings
    **/
    postAdminRecordingsStart(req: operations.PostAdminRecordingsStartRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminRecordingsStartResponse>;
    /**
     * postAdminRecordingsStop - Stop recording
     *
     * End recording of stub mappings
    **/
    postAdminRecordingsStop(config?: AxiosRequestConfig): Promise<operations.PostAdminRecordingsStopResponse>;
}
