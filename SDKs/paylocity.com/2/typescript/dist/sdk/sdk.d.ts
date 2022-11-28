import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.paylocity.com/api"];
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
     * addClientSecret - Obtain new client secret.
     *
     * Obtain new client secret for Paylocity-issued client id. See Setup section for details.
    **/
    addClientSecret(req: operations.AddClientSecretRequest, config?: AxiosRequestConfig): Promise<operations.AddClientSecretResponse>;
    /**
     * addEmployee - Add new employee
     *
     * New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.
    **/
    addEmployee(req: operations.AddEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.AddEmployeeResponse>;
    /**
     * addLocalTax - Add new local tax
     *
     * Sends new employee local tax information directly to Web Pay.
    **/
    addLocalTax(req: operations.AddLocalTaxRequest, config?: AxiosRequestConfig): Promise<operations.AddLocalTaxResponse>;
    /**
     * addNewEmployeeToWebLink - Add new employee to Web Link
     *
     * Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.
    **/
    addNewEmployeeToWebLink(req: operations.AddNewEmployeeToWebLinkRequest, config?: AxiosRequestConfig): Promise<operations.AddNewEmployeeToWebLinkResponse>;
    /**
     * addOrUpdateAdditionalRates - Add/update additional rates
     *
     * Sends new or updated employee additional rates information directly to Web Pay.
    **/
    addOrUpdateAdditionalRates(req: operations.AddOrUpdateAdditionalRatesRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateAdditionalRatesResponse>;
    /**
     * addOrUpdateAnEmployeeEarning - Add/Update Earning
     *
     * Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.
    **/
    addOrUpdateAnEmployeeEarning(req: operations.AddOrUpdateAnEmployeeEarningRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateAnEmployeeEarningResponse>;
    /**
     * addOrUpdateEmergencyContacts - Add/update emergency contacts
     *
     * Sends new or updated employee emergency contacts directly to Web Pay.
    **/
    addOrUpdateEmergencyContacts(req: operations.AddOrUpdateEmergencyContactsRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateEmergencyContactsResponse>;
    /**
     * addOrUpdateNonPrimaryStateTax - Add/update non-primary state tax
     *
     * Sends new or updated employee non-primary state tax information directly to Web Pay.
    **/
    addOrUpdateNonPrimaryStateTax(req: operations.AddOrUpdateNonPrimaryStateTaxRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateNonPrimaryStateTaxResponse>;
    /**
     * addOrUpdatePrimaryStateTax - Add/update primary state tax
     *
     * Sends new or updated employee primary state tax information directly to Web Pay.
    **/
    addOrUpdatePrimaryStateTax(req: operations.AddOrUpdatePrimaryStateTaxRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdatePrimaryStateTaxResponse>;
    /**
     * deleteEarningByEarningCodeAndStartDate - Delete Earning by Earning Code and Start Date
     *
     * Delete Earning by Earning Code and Start Date
    **/
    deleteEarningByEarningCodeAndStartDate(req: operations.DeleteEarningByEarningCodeAndStartDateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEarningByEarningCodeAndStartDateResponse>;
    /**
     * deleteLocalTaxByTaxCode - Delete local tax by tax code
     *
     * Delete local tax by tax code
    **/
    deleteLocalTaxByTaxCode(req: operations.DeleteLocalTaxByTaxCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocalTaxByTaxCodeResponse>;
    /**
     * getAllCompanyCodesAndDescriptionsByResource - Get All Company Codes
     *
     * Get All Company Codes for the selected company and resource
    **/
    getAllCompanyCodesAndDescriptionsByResource(req: operations.GetAllCompanyCodesAndDescriptionsByResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCompanyCodesAndDescriptionsByResourceResponse>;
    /**
     * getAllCustomFieldsByCategory - Get All Custom Fields
     *
     * Get All Custom Fields for the selected company
    **/
    getAllCustomFieldsByCategory(req: operations.GetAllCustomFieldsByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCustomFieldsByCategoryResponse>;
    /**
     * getAllDirectDeposit - Get All Direct Deposit
     *
     * Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.
    **/
    getAllDirectDeposit(req: operations.GetAllDirectDepositRequest, config?: AxiosRequestConfig): Promise<operations.GetAllDirectDepositResponse>;
    /**
     * getAllEarnings - Get All Earnings
     *
     * Get All Earnings returns all earnings for the selected employee.
    **/
    getAllEarnings(req: operations.GetAllEarningsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEarningsResponse>;
    /**
     * getEarningByEarningCodeAndStartDate - Get Earning by Earning Code and Start Date
     *
     * Get Earnings returns the single earning with the provided earning code and start date for the selected employee.
    **/
    getEarningByEarningCodeAndStartDate(req: operations.GetEarningByEarningCodeAndStartDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEarningByEarningCodeAndStartDateResponse>;
    /**
     * getEarningsByEarningCode - Get Earnings by Earning Code
     *
     * Get Earnings returns all earnings with the provided earning code for the selected employee.
    **/
    getEarningsByEarningCode(req: operations.GetEarningsByEarningCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetEarningsByEarningCodeResponse>;
    /**
     * getAllEmployees - Get all employees
     *
     * Get All Employees API will return employee data currently available in Web Pay.
    **/
    getAllEmployees(req: operations.GetAllEmployeesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployeesResponse>;
    /**
     * getAllLocalTaxes - Get all local taxes
     *
     * Returns all local taxes for the selected employee.
    **/
    getAllLocalTaxes(req: operations.GetAllLocalTaxesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllLocalTaxesResponse>;
    /**
     * getCompanySpecificOpenApiDocumentation - Get Company-Specific Open API Documentation
     *
     * The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)
    **/
    getCompanySpecificOpenApiDocumentation(req: operations.GetCompanySpecificOpenApiDocumentationRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanySpecificOpenApiDocumentationResponse>;
    /**
     * getEmployee - Get employee
     *
     * Get Employee API will return employee data currently available in Web Pay.
    **/
    getEmployee(req: operations.GetEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeResponse>;
    /**
     * getLocalTaxByTaxCode - Get local taxes by tax code
     *
     * Returns all local taxes with the provided tax code for the selected employee.
    **/
    getLocalTaxByTaxCode(req: operations.GetLocalTaxByTaxCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetLocalTaxByTaxCodeResponse>;
    /**
     * getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear - Get employee pay statement details data for the specified year.
     *
     * Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.
    **/
    getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear(req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse>;
    /**
     * getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate - Get employee pay statement details data for the specified year and check date.
     *
     * Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.
    **/
    getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate(req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse>;
    /**
     * getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear - Get employee pay statement summary data for the specified year.
     *
     * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.
    **/
    getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear(req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse>;
    /**
     * getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate - Get employee pay statement summary data for the specified year and check date.
     *
     * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.
    **/
    getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate(req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse>;
    /**
     * updateEmployee - Update employee
     *
     * Update Employee API will update existing employee data in WebPay.
    **/
    updateEmployee(req: operations.UpdateEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmployeeResponse>;
    /**
     * updateOrAddEmployeeBenefitSetup - Add/update employee's benefit setup
     *
     * Sends new or updated employee benefit setup information directly to Web Pay.
    **/
    updateOrAddEmployeeBenefitSetup(req: operations.UpdateOrAddEmployeeBenefitSetupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrAddEmployeeBenefitSetupResponse>;
}
export {};
