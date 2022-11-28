import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VisionPrediction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * detectMultipart - Detection with Image File
     *
     * Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.
    **/
    detectMultipart(req: operations.DetectMultipartRequest, config?: AxiosRequestConfig): Promise<operations.DetectMultipartResponse>;
    /**
     * ocrMultipart - Detect Text
     *
     * Returns a prediction from an OCR model for the specified image URL or local image file.
    **/
    ocrMultipart(req: operations.OcrMultipartRequest, config?: AxiosRequestConfig): Promise<operations.OcrMultipartResponse>;
    /**
     * predictMultipart - Make Prediction
     *
     * Returns a prediction from an image or multi-label model for the specified image.
    **/
    predictMultipart(req: operations.PredictMultipartRequest, config?: AxiosRequestConfig): Promise<operations.PredictMultipartResponse>;
}
