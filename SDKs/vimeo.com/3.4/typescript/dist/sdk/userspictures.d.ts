import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UsersPictures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createPicture - Add a user picture
    **/
    createPicture(req: operations.CreatePictureRequest, config?: AxiosRequestConfig): Promise<operations.CreatePictureResponse>;
    /**
     * createPictureAlt1 - Add a user picture
    **/
    createPictureAlt1(req: operations.CreatePictureAlt1Request, config?: AxiosRequestConfig): Promise<operations.CreatePictureAlt1Response>;
    /**
     * deletePicture - Delete a user picture
    **/
    deletePicture(req: operations.DeletePictureRequest, config?: AxiosRequestConfig): Promise<operations.DeletePictureResponse>;
    /**
     * deletePictureAlt1 - Delete a user picture
    **/
    deletePictureAlt1(req: operations.DeletePictureAlt1Request, config?: AxiosRequestConfig): Promise<operations.DeletePictureAlt1Response>;
    /**
     * editPicture - Edit a user picture
    **/
    editPicture(req: operations.EditPictureRequest, config?: AxiosRequestConfig): Promise<operations.EditPictureResponse>;
    /**
     * editPictureAlt1 - Edit a user picture
    **/
    editPictureAlt1(req: operations.EditPictureAlt1Request, config?: AxiosRequestConfig): Promise<operations.EditPictureAlt1Response>;
    /**
     * getPicture - Get a specific user picture
    **/
    getPicture(req: operations.GetPictureRequest, config?: AxiosRequestConfig): Promise<operations.GetPictureResponse>;
    /**
     * getPictureAlt1 - Get a specific user picture
    **/
    getPictureAlt1(req: operations.GetPictureAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetPictureAlt1Response>;
    /**
     * getPictures - Get all the pictures that belong to a user
    **/
    getPictures(req: operations.GetPicturesRequest, config?: AxiosRequestConfig): Promise<operations.GetPicturesResponse>;
    /**
     * getPicturesAlt1 - Get all the pictures that belong to a user
    **/
    getPicturesAlt1(req: operations.GetPicturesAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetPicturesAlt1Response>;
}
