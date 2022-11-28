import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Photos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePhoto - Delete a photo
    **/
    deletePhoto(req: operations.DeletePhotoRequest, config?: AxiosRequestConfig): Promise<operations.DeletePhotoResponse>;
    /**
     * getPhotosByIds - Retrieve multiple photos
    **/
    getPhotosByIds(req: operations.GetPhotosByIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhotosByIdsResponse>;
    /**
     * rotatePhoto - Rotate a photo
    **/
    rotatePhoto(req: operations.RotatePhotoRequest, config?: AxiosRequestConfig): Promise<operations.RotatePhotoResponse>;
    /**
     * uploadPhoto - Create a photo
    **/
    uploadPhoto(req: operations.UploadPhotoRequest, config?: AxiosRequestConfig): Promise<operations.UploadPhotoResponse>;
}
