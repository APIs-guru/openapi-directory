import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LanguageModels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteModel - Delete a Model
     *
     * Deletes the specified model.
    **/
    deleteModel(req: operations.DeleteModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelResponse>;
    /**
     * getTrainedModelLearningCurve - Get Model Learning Curve
     *
     * Returns the metrics for each epoch in a model.
    **/
    getTrainedModelLearningCurve(req: operations.GetTrainedModelLearningCurveRequest, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelLearningCurveResponse>;
    /**
     * getTrainedModelMetrics - Get Model Metrics
     *
     * Returns the metrics for a model
    **/
    getTrainedModelMetrics(req: operations.GetTrainedModelMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelMetricsResponse>;
    /**
     * getTrainedModels - Get All Models
     *
     * Returns all models for the specified dataset.
    **/
    getTrainedModels(req: operations.GetTrainedModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelsResponse>;
}
