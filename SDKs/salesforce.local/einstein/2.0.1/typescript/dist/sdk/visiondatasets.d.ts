import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VisionDatasets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDataset - Create a Dataset
     *
     * Creates a dataset and labels, if they're specified.
    **/
    createDataset(req: operations.CreateDatasetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetResponse>;
    /**
     * deleteDataset1 - Delete a Dataset
     *
     * Deletes the specified dataset and associated labels and examples.
    **/
    deleteDataset1(req: operations.DeleteDataset1Request, config?: AxiosRequestConfig): Promise<operations.DeleteDataset1Response>;
    /**
     * getDataset1 - Get a Dataset
     *
     * Returns a single dataset.
    **/
    getDataset1(req: operations.GetDataset1Request, config?: AxiosRequestConfig): Promise<operations.GetDataset1Response>;
    /**
     * get1 - Get Deletion Status
     *
     * Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.
    **/
    get1(req: operations.Get1Request, config?: AxiosRequestConfig): Promise<operations.Get1Response>;
    /**
     * listDatasets1 - Get All Datasets
     *
     * Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.
    **/
    listDatasets1(req: operations.ListDatasets1Request, config?: AxiosRequestConfig): Promise<operations.ListDatasets1Response>;
    /**
     * uploadDatasetAsync1 - Create a Dataset From a Zip File Asynchronously
     *
     * Creates a dataset, labels, and examples from the specified .zip file. The call returns immediately and continues to upload the images in the background.
    **/
    uploadDatasetAsync1(req: operations.UploadDatasetAsync1Request, config?: AxiosRequestConfig): Promise<operations.UploadDatasetAsync1Response>;
    /**
     * uploadDatasetSync1 - Create a Dataset From a Zip File Synchronously
     *
     * Creates a dataset, labels, and examples from the specified .zip file. The call returns after the dataset is created and all of the images are uploaded.
    **/
    uploadDatasetSync1(req: operations.UploadDatasetSync1Request, config?: AxiosRequestConfig): Promise<operations.UploadDatasetSync1Response>;
}
