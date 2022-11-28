import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.personio.de/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteCompanyAttendancesId - This endpoint is responsible for deleting attendance data for the company employees.
    **/
    deleteCompanyAttendancesId(req: operations.DeleteCompanyAttendancesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCompanyAttendancesIdResponse>;
    /**
     * deleteCompanyTimeOffsId - This endpoint is responsible for deleting absence period data for the company employees.
    **/
    deleteCompanyTimeOffsId(req: operations.DeleteCompanyTimeOffsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCompanyTimeOffsIdResponse>;
    /**
     * getCompanyAttendances - This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.
    **/
    getCompanyAttendances(req: operations.GetCompanyAttendancesRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyAttendancesResponse>;
    /**
     * getCompanyEmployees - List Employees
    **/
    getCompanyEmployees(config?: AxiosRequestConfig): Promise<operations.GetCompanyEmployeesResponse>;
    /**
     * getCompanyEmployeesEmployeeId - Show employee by ID
    **/
    getCompanyEmployeesEmployeeId(req: operations.GetCompanyEmployeesEmployeeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyEmployeesEmployeeIdResponse>;
    /**
     * getCompanyEmployeesEmployeeIdProfilePictureWidth - Show employee profile picture
    **/
    getCompanyEmployeesEmployeeIdProfilePictureWidth(req: operations.GetCompanyEmployeesEmployeeIdProfilePictureWidthRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyEmployeesEmployeeIdProfilePictureWidthResponse>;
    /**
     * getCompanyTimeOffTypes - Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'
    **/
    getCompanyTimeOffTypes(req: operations.GetCompanyTimeOffTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyTimeOffTypesResponse>;
    /**
     * getCompanyTimeOffs - This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.
    **/
    getCompanyTimeOffs(req: operations.GetCompanyTimeOffsRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyTimeOffsResponse>;
    /**
     * getCompanyTimeOffsId - Absence Period
    **/
    getCompanyTimeOffsId(req: operations.GetCompanyTimeOffsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyTimeOffsIdResponse>;
    /**
     * patchCompanyAttendancesId - This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.
    **/
    patchCompanyAttendancesId(req: operations.PatchCompanyAttendancesIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchCompanyAttendancesIdResponse>;
    /**
     * postCompanyAttendances - This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.
    **/
    postCompanyAttendances(req: operations.PostCompanyAttendancesRequest, config?: AxiosRequestConfig): Promise<operations.PostCompanyAttendancesResponse>;
    /**
     * postCompanyEmployees - Create an employee
     *
     * Creates new employee. Status of the employee will be set to `active` if `hire_date` provided is in past. Otherwise status will be set to `onboarding`. This endpoint will respond with `id` of created employee in case of success.
     *
    **/
    postCompanyEmployees(req: operations.PostCompanyEmployeesRequest, config?: AxiosRequestConfig): Promise<operations.PostCompanyEmployeesResponse>;
    /**
     * postCompanyTimeOffs - This endpoint is responsible for adding absence data for the company employees.
    **/
    postCompanyTimeOffs(req: operations.PostCompanyTimeOffsRequest, config?: AxiosRequestConfig): Promise<operations.PostCompanyTimeOffsResponse>;
}
export {};
