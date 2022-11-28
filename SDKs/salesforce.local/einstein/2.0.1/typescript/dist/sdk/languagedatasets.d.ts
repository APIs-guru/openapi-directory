import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LanguageDatasets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDataset - Delete a Dataset
     *
     * Deletes the specified dataset and associated labels and examples.
    **/
    deleteDataset(req: operations.DeleteDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetResponse>;
    /**
     * get - Get Deletion Status
     *
     * Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.
    **/
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * getDataset - Get a Dataset
     *
     * Returns a single dataset.
    **/
    getDataset(req: operations.GetDatasetRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetResponse>;
    /**
     * listDatasets - Get All Datasets
     *
     * Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.
    **/
    listDatasets(req: operations.ListDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetsResponse>;
    /**
     * uploadDatasetAsync - Create a Dataset From a File Asynchronously
     *
     * Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns immediately and continues to upload data in the background.
    **/
    uploadDatasetAsync(req: operations.UploadDatasetAsyncRequest, config?: AxiosRequestConfig): Promise<operations.UploadDatasetAsyncResponse>;
    /**
     * uploadDatasetSync - Create a Dataset From a File Synchronously
     *
     * Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns after the dataset is created and all of the data is uploaded.
    **/
    uploadDatasetSync(req: operations.UploadDatasetSyncRequest, config?: AxiosRequestConfig): Promise<operations.UploadDatasetSyncResponse>;
}
