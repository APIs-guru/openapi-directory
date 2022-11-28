import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LanguageExamples {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getExamples - Get All Examples
     *
     * Returns all the examples for the specified dataset,
    **/
    getExamples(req: operations.GetExamplesRequest, config?: AxiosRequestConfig): Promise<operations.GetExamplesResponse>;
    /**
     * getExamplesByLabel - Get All Examples for Label
     *
     * Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.
    **/
    getExamplesByLabel(req: operations.GetExamplesByLabelRequest, config?: AxiosRequestConfig): Promise<operations.GetExamplesByLabelResponse>;
    /**
     * provideFeedback - Create a Feedback Example
     *
     * Adds a feedback example to the dataset associated with the specified model.
    **/
    provideFeedback(req: operations.ProvideFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.ProvideFeedbackResponse>;
    /**
     * updateDatasetAsync - Create Examples From a File
     *
     * Adds examples from a .csv, .tsv, or .json file to a dataset.
    **/
    updateDatasetAsync(req: operations.UpdateDatasetAsyncRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetAsyncResponse>;
}
