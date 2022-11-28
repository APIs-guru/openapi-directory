import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PatientManagementController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPatientManagement - getPatientManagement
     *
     * getPatientManagement
    **/
    getPatientManagement(req: operations.GetPatientManagementRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientManagementResponse>;
    /**
     * getPatientManagementDiagnoses - getPatientManagementDiagnoses
     *
     * getPatientManagementDiagnoses
    **/
    getPatientManagementDiagnoses(config?: AxiosRequestConfig): Promise<operations.GetPatientManagementDiagnosesResponse>;
    /**
     * getPatientManagementLookupTypes - getPatientManagementLookupTypes
     *
     * getPatientManagementLookupTypes
    **/
    getPatientManagementLookupTypes(config?: AxiosRequestConfig): Promise<operations.GetPatientManagementLookupTypesResponse>;
    /**
     * savePatientManagement - savePatientManagement
     *
     * savePatientManagement
    **/
    savePatientManagement(req: operations.SavePatientManagementRequest, config?: AxiosRequestConfig): Promise<operations.SavePatientManagementResponse>;
    /**
     * savePatientManagementSurgeries - savePatientManagementSurgeries
     *
     * savePatientManagementSurgeries
    **/
    savePatientManagementSurgeries(req: operations.SavePatientManagementSurgeriesRequest, config?: AxiosRequestConfig): Promise<operations.SavePatientManagementSurgeriesResponse>;
    /**
     * validatePatientManagement - validatePatientManagement
     *
     * validatePatientManagement
    **/
    validatePatientManagement(req: operations.ValidatePatientManagementRequest, config?: AxiosRequestConfig): Promise<operations.ValidatePatientManagementResponse>;
}
