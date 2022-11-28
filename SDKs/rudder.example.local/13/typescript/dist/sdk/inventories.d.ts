import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Inventories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fileWatcherRestart - Restart inventory watcher
     *
     * Restart the inventory watcher if necessary
    **/
    fileWatcherRestart(config?: AxiosRequestConfig): Promise<operations.FileWatcherRestartResponse>;
    /**
     * fileWatcherStart - Start inventory watcher
     *
     * Start the inventory watcher if necessary
    **/
    fileWatcherStart(config?: AxiosRequestConfig): Promise<operations.FileWatcherStartResponse>;
    /**
     * fileWatcherStop - Stop inventory watcher
     *
     * Stop the inventory watcher if necessary
    **/
    fileWatcherStop(config?: AxiosRequestConfig): Promise<operations.FileWatcherStopResponse>;
    /**
     * queueInformation - Get information about inventory processing queue
     *
     * Provide information about the current state of the inventory processor
    **/
    queueInformation(config?: AxiosRequestConfig): Promise<operations.QueueInformationResponse>;
    /**
     * uploadInventory - Upload an inventory for processing
     *
     * Upload an inventory to the web application
    **/
    uploadInventory(req: operations.UploadInventoryRequest, config?: AxiosRequestConfig): Promise<operations.UploadInventoryResponse>;
}
