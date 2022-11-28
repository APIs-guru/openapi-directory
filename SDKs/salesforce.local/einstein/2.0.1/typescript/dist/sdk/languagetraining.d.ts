import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LanguageTraining {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTrainStatusAndProgress - Get Training Status
     *
     * Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.
    **/
    getTrainStatusAndProgress(req: operations.GetTrainStatusAndProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetTrainStatusAndProgressResponse>;
    /**
     * retrain - Retrain a Dataset
     *
     * Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.
    **/
    retrain(req: operations.RetrainRequest, config?: AxiosRequestConfig): Promise<operations.RetrainResponse>;
    /**
     * train - Train a Dataset
     *
     * Trains a dataset and creates a model.
    **/
    train(req: operations.TrainRequest, config?: AxiosRequestConfig): Promise<operations.TrainResponse>;
}
