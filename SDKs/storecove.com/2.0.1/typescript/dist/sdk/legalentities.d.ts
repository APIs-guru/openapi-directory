import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LegalEntities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createLegalEntity - Create a new LegalEntity
     *
     * Create a new LegalEntity.
    **/
    createLegalEntity(req: operations.CreateLegalEntityRequest, config?: AxiosRequestConfig): Promise<operations.CreateLegalEntityResponse>;
    /**
     * deleteLegalEntity - Delete LegalEntity
     *
     * Delete a specific LegalEntity.
    **/
    deleteLegalEntity(req: operations.DeleteLegalEntityRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLegalEntityResponse>;
    /**
     * getLegalEntity - Get LegalEntity
     *
     * Get a specific LegalEntity.
    **/
    getLegalEntity(req: operations.GetLegalEntityRequest, config?: AxiosRequestConfig): Promise<operations.GetLegalEntityResponse>;
    /**
     * updateLegalEntity - Update LegalEntity
     *
     * Update a specific LegalEntity.
    **/
    updateLegalEntity(req: operations.UpdateLegalEntityRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLegalEntityResponse>;
}
