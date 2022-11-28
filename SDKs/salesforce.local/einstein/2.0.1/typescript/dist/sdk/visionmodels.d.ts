import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VisionModels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteModel1 - Delete a Model
     *
     * Deletes the specified model.
    **/
    deleteModel1(req: operations.DeleteModel1Request, config?: AxiosRequestConfig): Promise<operations.DeleteModel1Response>;
    /**
     * getTrainedModelLearningCurve1 - Get Model Learning Curve
     *
     * Returns the metrics for each epoch in a model.
    **/
    getTrainedModelLearningCurve1(req: operations.GetTrainedModelLearningCurve1Request, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelLearningCurve1Response>;
    /**
     * getTrainedModelMetrics1 - Get Model Metrics
     *
     * Returns the metrics for a model
    **/
    getTrainedModelMetrics1(req: operations.GetTrainedModelMetrics1Request, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelMetrics1Response>;
    /**
     * getTrainedModels1 - Get All Models
     *
     * Returns all models for the specified dataset.
    **/
    getTrainedModels1(req: operations.GetTrainedModels1Request, config?: AxiosRequestConfig): Promise<operations.GetTrainedModels1Response>;
}
