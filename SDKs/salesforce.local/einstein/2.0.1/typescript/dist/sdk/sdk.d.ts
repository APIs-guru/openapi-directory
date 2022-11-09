import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Adds an example with the specified label to a dataset.
    **/
    AddExample(req: operations.AddExampleRequest, config?: AxiosRequestConfig): Promise<operations.AddExampleResponse>;
    /**
     * Creates a dataset and labels, if they're specified.
    **/
    CreateDataset(req: operations.CreateDatasetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetResponse>;
    /**
     * Deletes the specified dataset and associated labels and examples.
    **/
    DeleteDataset(req: operations.DeleteDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetResponse>;
    /**
     * Deletes the specified dataset and associated labels and examples.
    **/
    DeleteDataset1(req: operations.DeleteDataset1Request, config?: AxiosRequestConfig): Promise<operations.DeleteDataset1Response>;
    /**
     * Deletes the specified model.
    **/
    DeleteModel(req: operations.DeleteModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelResponse>;
    /**
     * Deletes the specified model.
    **/
    DeleteModel1(req: operations.DeleteModel1Request, config?: AxiosRequestConfig): Promise<operations.DeleteModel1Response>;
    /**
     * Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.
    **/
    DetectMultipart(req: operations.DetectMultipartRequest, config?: AxiosRequestConfig): Promise<operations.DetectMultipartResponse>;
    /**
     * Returns an OAuth access token or a refresh token. You must pass a valid access token in the header of each API call.
     * https://metamind.readme.io/docs/generate-an-oauth-access-token - authentication guid
    **/
    GenerateTokenV2(req: operations.GenerateTokenV2Request, config?: AxiosRequestConfig): Promise<operations.GenerateTokenV2Response>;
    /**
     * Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.
    **/
    Get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * Returns prediction usage on a monthly basis for the current calendar month and future months. Each apiusage object in the response corresponds to a calendar month in your plan.
    **/
    GetApiUsagePlansV2(req: operations.GetApiUsagePlansV2Request, config?: AxiosRequestConfig): Promise<operations.GetApiUsagePlansV2Response>;
    /**
     * Returns a single dataset.
    **/
    GetDataset(req: operations.GetDatasetRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetResponse>;
    /**
     * Returns a single dataset.
    **/
    GetDataset1(req: operations.GetDataset1Request, config?: AxiosRequestConfig): Promise<operations.GetDataset1Response>;
    /**
     * Returns all the examples for the specified dataset,
    **/
    GetExamples(req: operations.GetExamplesRequest, config?: AxiosRequestConfig): Promise<operations.GetExamplesResponse>;
    /**
     * Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.
    **/
    GetExamplesByLabel(req: operations.GetExamplesByLabelRequest, config?: AxiosRequestConfig): Promise<operations.GetExamplesByLabelResponse>;
    /**
     * Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.
    **/
    GetExamplesByLabel1(req: operations.GetExamplesByLabel1Request, config?: AxiosRequestConfig): Promise<operations.GetExamplesByLabel1Response>;
    /**
     * Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.
    **/
    GetExamples1(req: operations.GetExamples1Request, config?: AxiosRequestConfig): Promise<operations.GetExamples1Response>;
    /**
     * Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.
    **/
    GetTrainStatusAndProgress(req: operations.GetTrainStatusAndProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetTrainStatusAndProgressResponse>;
    /**
     * Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.
    **/
    GetTrainStatusAndProgress1(req: operations.GetTrainStatusAndProgress1Request, config?: AxiosRequestConfig): Promise<operations.GetTrainStatusAndProgress1Response>;
    /**
     * Returns the metrics for each epoch in a model.
    **/
    GetTrainedModelLearningCurve(req: operations.GetTrainedModelLearningCurveRequest, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelLearningCurveResponse>;
    /**
     * Returns the metrics for each epoch in a model.
    **/
    GetTrainedModelLearningCurve1(req: operations.GetTrainedModelLearningCurve1Request, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelLearningCurve1Response>;
    /**
     * Returns the metrics for a model
    **/
    GetTrainedModelMetrics(req: operations.GetTrainedModelMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelMetricsResponse>;
    /**
     * Returns the metrics for a model
    **/
    GetTrainedModelMetrics1(req: operations.GetTrainedModelMetrics1Request, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelMetrics1Response>;
    /**
     * Returns all models for the specified dataset.
    **/
    GetTrainedModels(req: operations.GetTrainedModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelsResponse>;
    /**
     * Returns all models for the specified dataset.
    **/
    GetTrainedModels1(req: operations.GetTrainedModels1Request, config?: AxiosRequestConfig): Promise<operations.GetTrainedModels1Response>;
    /**
     * Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.
    **/
    Get1(req: operations.Get1Request, config?: AxiosRequestConfig): Promise<operations.Get1Response>;
    /**
     * Returns an intent prediction for the given string.
    **/
    IntentMultipart(req: operations.IntentMultipartRequest, config?: AxiosRequestConfig): Promise<operations.IntentMultipartResponse>;
    /**
     * Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.
    **/
    ListDatasets(req: operations.ListDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetsResponse>;
    /**
     * Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.
    **/
    ListDatasets1(req: operations.ListDatasets1Request, config?: AxiosRequestConfig): Promise<operations.ListDatasets1Response>;
    /**
     * Returns a prediction from an OCR model for the specified image URL or local image file.
    **/
    OcrMultipart(req: operations.OcrMultipartRequest, config?: AxiosRequestConfig): Promise<operations.OcrMultipartResponse>;
    /**
     * Returns a prediction from an image or multi-label model for the specified image.
    **/
    PredictMultipart(req: operations.PredictMultipartRequest, config?: AxiosRequestConfig): Promise<operations.PredictMultipartResponse>;
    /**
     * Adds a feedback example to the dataset associated with the specified model.
    **/
    ProvideFeedback(req: operations.ProvideFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.ProvideFeedbackResponse>;
    /**
     * Adds a feedback example to the dataset associated with the specified model.
    **/
    ProvideFeedback1(req: operations.ProvideFeedback1Request, config?: AxiosRequestConfig): Promise<operations.ProvideFeedback1Response>;
    /**
     * Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.
    **/
    Retrain(req: operations.RetrainRequest, config?: AxiosRequestConfig): Promise<operations.RetrainResponse>;
    /**
     * Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.
    **/
    Retrain1(req: operations.Retrain1Request, config?: AxiosRequestConfig): Promise<operations.Retrain1Response>;
    RevokeRefreshTokenV2(req: operations.RevokeRefreshTokenV2Request, config?: AxiosRequestConfig): Promise<operations.RevokeRefreshTokenV2Response>;
    /**
     * Returns a sentiment prediction for the given string.
    **/
    SentimentMultipart(req: operations.SentimentMultipartRequest, config?: AxiosRequestConfig): Promise<operations.SentimentMultipartResponse>;
    /**
     * Trains a dataset and creates a model.
    **/
    Train(req: operations.TrainRequest, config?: AxiosRequestConfig): Promise<operations.TrainResponse>;
    /**
     * Trains a dataset and creates a model.
    **/
    Train1(req: operations.Train1Request, config?: AxiosRequestConfig): Promise<operations.Train1Response>;
    /**
     * Adds examples from a .csv, .tsv, or .json file to a dataset.
    **/
    UpdateDatasetAsync(req: operations.UpdateDatasetAsyncRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetAsyncResponse>;
    /**
     * Adds feedback examples to the dataset associated with the specified object detection model.
    **/
    UpdateDatasetAsync1(req: operations.UpdateDatasetAsync1Request, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetAsync1Response>;
    /**
     * Adds examples from a .zip file to a dataset. You can use this call only with a dataset that was created from a .zip file.
    **/
    UpdateDatasetAsync2(req: operations.UpdateDatasetAsync2Request, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetAsync2Response>;
    /**
     * Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns immediately and continues to upload data in the background.
    **/
    UploadDatasetAsync(req: operations.UploadDatasetAsyncRequest, config?: AxiosRequestConfig): Promise<operations.UploadDatasetAsyncResponse>;
    /**
     * Creates a dataset, labels, and examples from the specified .zip file. The call returns immediately and continues to upload the images in the background.
    **/
    UploadDatasetAsync1(req: operations.UploadDatasetAsync1Request, config?: AxiosRequestConfig): Promise<operations.UploadDatasetAsync1Response>;
    /**
     * Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns after the dataset is created and all of the data is uploaded.
    **/
    UploadDatasetSync(req: operations.UploadDatasetSyncRequest, config?: AxiosRequestConfig): Promise<operations.UploadDatasetSyncResponse>;
    /**
     * Creates a dataset, labels, and examples from the specified .zip file. The call returns after the dataset is created and all of the images are uploaded.
    **/
    UploadDatasetSync1(req: operations.UploadDatasetSync1Request, config?: AxiosRequestConfig): Promise<operations.UploadDatasetSync1Response>;
}
export {};
