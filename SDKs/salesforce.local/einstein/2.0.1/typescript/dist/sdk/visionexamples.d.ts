import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VisionExamples {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addExample - Create an Example
     *
     * Adds an example with the specified label to a dataset.
    **/
    addExample(req: operations.AddExampleRequest, config?: AxiosRequestConfig): Promise<operations.AddExampleResponse>;
    /**
     * getExamplesByLabel1 - Get All Examples for Label
     *
     * Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.
    **/
    getExamplesByLabel1(req: operations.GetExamplesByLabel1Request, config?: AxiosRequestConfig): Promise<operations.GetExamplesByLabel1Response>;
    /**
     * getExamples1 - Get All Examples
     *
     * Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.
    **/
    getExamples1(req: operations.GetExamples1Request, config?: AxiosRequestConfig): Promise<operations.GetExamples1Response>;
    /**
     * provideFeedback1 - Create a Feedback Example
     *
     * Adds a feedback example to the dataset associated with the specified model.
    **/
    provideFeedback1(req: operations.ProvideFeedback1Request, config?: AxiosRequestConfig): Promise<operations.ProvideFeedback1Response>;
    /**
     * updateDatasetAsync1 - Create Feedback Examples From a Zip File
     *
     * Adds feedback examples to the dataset associated with the specified object detection model.
    **/
    updateDatasetAsync1(req: operations.UpdateDatasetAsync1Request, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetAsync1Response>;
    /**
     * updateDatasetAsync2 - Create Examples From a Zip File
     *
     * Adds examples from a .zip file to a dataset. You can use this call only with a dataset that was created from a .zip file.
    **/
    updateDatasetAsync2(req: operations.UpdateDatasetAsync2Request, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetAsync2Response>;
}
