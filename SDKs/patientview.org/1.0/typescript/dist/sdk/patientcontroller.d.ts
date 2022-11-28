import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PatientController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBasicPatientDetails - Get Basic Patient Information
     *
     * Given a User ID, get basic patient information for a user from clinical data stored in FHIR
    **/
    getBasicPatientDetails(req: operations.GetBasicPatientDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetBasicPatientDetailsResponse>;
}
