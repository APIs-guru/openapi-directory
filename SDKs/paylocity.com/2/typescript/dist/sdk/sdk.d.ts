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
     * Obtain new client secret for Paylocity-issued client id. See Setup section for details.
    **/
    AddClientSecret(req: operations.AddClientSecretRequest, config?: AxiosRequestConfig): Promise<operations.AddClientSecretResponse>;
    /**
     * New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.
    **/
    AddEmployee(req: operations.AddEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.AddEmployeeResponse>;
    /**
     * Sends new employee local tax information directly to Web Pay.
    **/
    AddLocalTax(req: operations.AddLocalTaxRequest, config?: AxiosRequestConfig): Promise<operations.AddLocalTaxResponse>;
    /**
     * Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.
    **/
    AddNewEmployeeToWebLink(req: operations.AddNewEmployeeToWebLinkRequest, config?: AxiosRequestConfig): Promise<operations.AddNewEmployeeToWebLinkResponse>;
    /**
     * Sends new or updated employee additional rates information directly to Web Pay.
    **/
    AddOrUpdateAdditionalRates(req: operations.AddOrUpdateAdditionalRatesRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateAdditionalRatesResponse>;
    /**
     * Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.
    **/
    AddOrUpdateAnEmployeeEarning(req: operations.AddOrUpdateAnEmployeeEarningRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateAnEmployeeEarningResponse>;
    /**
     * Sends new or updated employee emergency contacts directly to Web Pay.
    **/
    AddOrUpdateEmergencyContacts(req: operations.AddOrUpdateEmergencyContactsRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateEmergencyContactsResponse>;
    /**
     * Sends new or updated employee non-primary state tax information directly to Web Pay.
    **/
    AddOrUpdateNonPrimaryStateTax(req: operations.AddOrUpdateNonPrimaryStateTaxRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateNonPrimaryStateTaxResponse>;
    /**
     * Sends new or updated employee primary state tax information directly to Web Pay.
    **/
    AddOrUpdatePrimaryStateTax(req: operations.AddOrUpdatePrimaryStateTaxRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdatePrimaryStateTaxResponse>;
    /**
     * Delete Earning by Earning Code and Start Date
    **/
    DeleteEarningByEarningCodeAndStartDate(req: operations.DeleteEarningByEarningCodeAndStartDateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEarningByEarningCodeAndStartDateResponse>;
    /**
     * Delete local tax by tax code
    **/
    DeleteLocalTaxByTaxCode(req: operations.DeleteLocalTaxByTaxCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocalTaxByTaxCodeResponse>;
    /**
     * Get All Company Codes for the selected company and resource
    **/
    GetAllCompanyCodesAndDescriptionsByResource(req: operations.GetAllCompanyCodesAndDescriptionsByResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCompanyCodesAndDescriptionsByResourceResponse>;
    /**
     * Get All Custom Fields for the selected company
    **/
    GetAllCustomFieldsByCategory(req: operations.GetAllCustomFieldsByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCustomFieldsByCategoryResponse>;
    /**
     * Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.
    **/
    GetAllDirectDeposit(req: operations.GetAllDirectDepositRequest, config?: AxiosRequestConfig): Promise<operations.GetAllDirectDepositResponse>;
    /**
     * Get All Earnings returns all earnings for the selected employee.
    **/
    GetAllEarnings(req: operations.GetAllEarningsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEarningsResponse>;
    /**
     * Get Earnings returns the single earning with the provided earning code and start date for the selected employee.
    **/
    GetEarningByEarningCodeAndStartDate(req: operations.GetEarningByEarningCodeAndStartDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEarningByEarningCodeAndStartDateResponse>;
    /**
     * Get Earnings returns all earnings with the provided earning code for the selected employee.
    **/
    GetEarningsByEarningCode(req: operations.GetEarningsByEarningCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetEarningsByEarningCodeResponse>;
    /**
     * Get All Employees API will return employee data currently available in Web Pay.
    **/
    GetAllEmployees(req: operations.GetAllEmployeesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployeesResponse>;
    /**
     * Returns all local taxes for the selected employee.
    **/
    GetAllLocalTaxes(req: operations.GetAllLocalTaxesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllLocalTaxesResponse>;
    /**
     * The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)
    **/
    GetCompanySpecificOpenApiDocumentation(req: operations.GetCompanySpecificOpenApiDocumentationRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanySpecificOpenApiDocumentationResponse>;
    /**
     * Get Employee API will return employee data currently available in Web Pay.
    **/
    GetEmployee(req: operations.GetEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeResponse>;
    /**
     * Returns all local taxes with the provided tax code for the selected employee.
    **/
    GetLocalTaxByTaxCode(req: operations.GetLocalTaxByTaxCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetLocalTaxByTaxCodeResponse>;
    /**
     * Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.
    **/
    GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear(req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse>;
    /**
     * Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.
    **/
    GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate(req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse>;
    /**
     * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.
    **/
    GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear(req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse>;
    /**
     * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.
    **/
    GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate(req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse>;
    /**
     * Update Employee API will update existing employee data in WebPay.
    **/
    UpdateEmployee(req: operations.UpdateEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmployeeResponse>;
    /**
     * Sends new or updated employee benefit setup information directly to Web Pay.
    **/
    UpdateOrAddEmployeeBenefitSetup(req: operations.UpdateOrAddEmployeeBenefitSetupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrAddEmployeeBenefitSetupResponse>;
}
export {};
