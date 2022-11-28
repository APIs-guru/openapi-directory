import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.truora.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createPdf - Create PDF
     *
     * Creates a PDF containing the background check results.
    **/
    createPdf(req: operations.CreatePdfRequest, config?: AxiosRequestConfig): Promise<operations.CreatePdfResponse>;
    /**
     * deleteCustomType - Delete Custom Type
     *
     * Allows deleting a custom type. Person, vehicle, and company types cannot be deleted
    **/
    deleteCustomType(req: operations.DeleteCustomTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomTypeResponse>;
    /**
     * getV1ContinuousChecksContinuousCheckIdHistory - Lists background check logs. It can be paginated
     *
    **/
    getV1ContinuousChecksContinuousCheckIdHistory(req: operations.GetV1ContinuousChecksContinuousCheckIdHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetV1ContinuousChecksContinuousCheckIdHistoryResponse>;
    /**
     * getContinuousCheck - Lists history associated with a Check. It can be paginated
    **/
    getContinuousCheck(req: operations.GetContinuousCheckRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousCheckResponse>;
    /**
     * getHealthDashboard - Get Health Dashboard
     *
     * Get the status of a database
    **/
    getHealthDashboard(req: operations.GetHealthDashboardRequest, config?: AxiosRequestConfig): Promise<operations.GetHealthDashboardResponse>;
    /**
     * listContinuousChecks - Lists all continuous checks
    **/
    listContinuousChecks(config?: AxiosRequestConfig): Promise<operations.ListContinuousChecksResponse>;
    /**
     * updateContinuousCheck - Updates a continuous check
    **/
    updateContinuousCheck(req: operations.UpdateContinuousCheckRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContinuousCheckResponse>;
    /**
     * updateCustomType - Update Custom Type
     *
     * Allows updating a custom type. Person, vehicle, and company types are not modifiable
    **/
    updateCustomType(req: operations.UpdateCustomTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomTypeResponse>;
    /**
     * batchUpload - Batch Upload
     *
     * Upload multiple checks and associate them to the report. The inputs for these checks must be sent in an xlsx file, please use the following templates:
     *
     * **Person:** [Chile](https://app.truora.com/files/person/person-input-cl.xlsx), [Colombia](https://app.truora.com/files/person/person-input-co.xlsx), [Mexico](https://app.truora.com/files/person/person-input-mx.xlsx), [Peru](https://app.truora.com/files/person/person-input-pe.xlsx), [Costa Rica](https://app.truora.com/files/person/person-input-cr.xlsx), [Brazil](https://app.truora.com/files/person/person-input-br.xlsx)
     *
     * **Vehicle:** [Chile](https://app.truora.com/files/vehicle/vehicle-input-cl.xlsx), [Colombia](https://app.truora.com/files/vehicle/vehicle-input-co.xlsx), [Mexico](https://app.truora.com/files/vehicle/vehicle-input-mx.xlsx), [Peru](https://app.truora.com/files/vehicle/vehicle-input-pe.xlsx)
     *
     * **Company** [Colombia](https://app.truora.com/files/company/company-input-co.xlsx), [Mexico](https://app.truora.com/files/company/company-input-mx.xlsx), [Brazil](https://app.truora.com/files/company/company-input-br.xlsx)
     *
     * Keep in mind that we currently do not support batch uploads for custom check types. Background checks created by batch upload are processed with low priority.
    **/
    batchUpload(req: operations.BatchUploadRequest, config?: AxiosRequestConfig): Promise<operations.BatchUploadResponse>;
    /**
     * createCheck - Create a background check
     *
     * Creates a background check and queues it to start collecting information. The full details of background checks can be retrieved with their respective Check IDs using getCheck endpoint. Keep in mind that, depending on the check type, input document, and country of a search, certain inputs are required. You should always provide as many inputs as possible in order to get the highest accuracy.
     *
     * If your check type is not referenced in the following table, please reach out to find out the fields that apply for you.
     *
     * | Country | Person-National | PersonForeigner | Company | Vehicle-National | Vehicle-Foreigner |
     * |:-------:|:---------------:|:---------------:|:-------:|:----------------:|:-----------------:|
     * | Chile<br>CL | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>date_of_birth*<br>phone_number<br>first_name*<br>last_name*<br>native_country* | N/A | national_id*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) | foreign_id*<br>first_name*<br>last_name*<br>date_of_birth*<br>native_country*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) |
     * | Colombia<br>CO | national_id*<br>date_of_birth<br>issue_date<br>phone_number | foreign_id* or PEP*<br>date_of_birth<br>phone_number<br>issue_date* | tax_id*<br>national_id | national_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>owner_document_type<br>owner_document_id | foreign_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>issue_date* |
     * | Mexico<br>MX | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate*<br>national_id<br>vehicle_id<br>driver_license(Estado de Mexico only) | N/A |
     * | Brazil<br>BR | national_id*<br>date_of_birth*<br>region*<br>phone_number | N/A | tax_id* | license_plate* | N/A |
     * | Costa Rica<br>CR | national_id*<br>phone_number | foreign_id* | N/A | license_plate* | N/A |
     * | Ecuador<br>EC | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate* | N/A |
     * | Peru<br>PE | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>ptp<br>date_of_birth*<br>phone_number | N/A | national_id*<br>date_of_birth<br>license_plate* | foreign_id*<br>ptp<br>date_of_birth*<br>license_plate* |
     * | Argentina<br>AR | national_id* | N/A | N/A | national_id* | N/A |
     * | International<br>ALL | name* | name* | company_name* | N/A | N/A |
     *
     * (*) Required field
    **/
    createCheck(req: operations.CreateCheckRequest, config?: AxiosRequestConfig): Promise<operations.CreateCheckResponse>;
    /**
     * createContinuousCheck - Creates a continuous check that will run background checks recurrently according to the frequency provided.
    **/
    createContinuousCheck(req: operations.CreateContinuousCheckRequest, config?: AxiosRequestConfig): Promise<operations.CreateContinuousCheckResponse>;
    /**
     * createHook - Creates a hook subscription
     *
     * Creates a hook subscription to notify events in Truora plataform. Subscriptions broadcast data as events occur and additional subscription instances are not required in order to refresh the information. Events are received in an array as a JWT and are decoded using the signing key returned by this endpoint. Their structure is as follows:
     *
     * ```
     * {
     *     "events": [
     *         {
     *             "event_action": "created",
     *             "event_type": "check",
     *             "id": "HKEdd28c569cf5eb74e45f0f4c092096e62c1c95ba2",
     *             "object": {
     *                 "check_id": "CHK9c39003424c521aec8566ce59e1ddc86",
     *                 "country": "CO",
     *                 "creation_date": "2020-04-01T23:00:30.581232281Z",
     *                 "homonym_score": 0,
     *                 "id_score": 0,
     *                 "national_id": "1151959906",
     *                 "previous_check": "CHK4ec814fecd147eaae41027081d7d5caf",
     *                 "score": -1,
     *                 "status": "not_started",
     *                 "type": "person",
     *                 "update_date": "2020-04-01T23:00:30.680937413Z"
     *             },
     *             "timestamp": "2020-04-01T23:00:30Z",
     *             "version": "1.0"
     *         }
     *     ],
     *     "iat": 1585782031,
     *     "iss": "Truora"
     * }
     * ```
     *
     * Keep in mind that the object attribute varies depending on the event_type.
    **/
    createHook(req: operations.CreateHookRequest, config?: AxiosRequestConfig): Promise<operations.CreateHookResponse>;
    /**
     * createReport - Create Report
     *
     * Creates a Report to which it is possible to associate multiple Checks.
    **/
    createReport(req: operations.CreateReportRequest, config?: AxiosRequestConfig): Promise<operations.CreateReportResponse>;
    /**
     * createScoreConfig - Create Score Configurations
     *
     * Create a custom score configuration selecting the weight for each background check dataset and the country where it applies. Weights are numbers between 0 and 1 that represent how impactful the dataset is for the score. Keep in mind that the sum of all weights must equal 1.
    **/
    createScoreConfig(req: operations.CreateScoreConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateScoreConfigResponse>;
    /**
     * deletHook - Deletes hook
     *
     * Deletes hook configuration.
    **/
    deletHook(req: operations.DeletHookRequest, config?: AxiosRequestConfig): Promise<operations.DeletHookResponse>;
    /**
     * getCheck - Get Background Check
     *
     * Returns the results of the check that matches the ID provided, complete with a set of scores explained below.
     *
     * ### Scores:
     *
     *
     * - **Global Score**: Average risk associated with a person, company or vehicle, according to  the background check results. The global score considers results that are validated with the  ID number provided. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
     *
     *
     * - **ID Score**: Average risk associated with a person according to the background check  results. The ID score considers the results that are validated with a person identity  document. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
     *
     *
     * - **Homonym Score**: Average risk associated with a person according to the background check  results. The homonym score considers results that are validated against the name of a person and could not be validated with their ID number. These results might have homonyms associated with them. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
     *
     *
     * In order to calculate these scores, a weighted average is considered with different weights allocated to each dataset. Scores can be customized using the config endpoints by assigning a weight to each dataset according to its relevance.
     *
     * Keep in mind that results from the API vary depending on the country, check type and the inputs entered on check creation.
    **/
    getCheck(req: operations.GetCheckRequest, config?: AxiosRequestConfig): Promise<operations.GetCheckResponse>;
    /**
     * getPdf - Get PDF
     *
     * Downloads the PDF in the specified language, Spanish by default.
    **/
    getPdf(req: operations.GetPdfRequest, config?: AxiosRequestConfig): Promise<operations.GetPdfResponse>;
    /**
     * getReport - Get Report
     *
     * Returns a report with the given ID.
    **/
    getReport(req: operations.GetReportRequest, config?: AxiosRequestConfig): Promise<operations.GetReportResponse>;
    /**
     * listCheckDetails - List Check Details
     *
     * Lists all details associated with a Check. It can be paginated.
    **/
    listCheckDetails(req: operations.ListCheckDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ListCheckDetailsResponse>;
    /**
     * listChecks - List Checks
     *
     * Lists the existing checks in the account or in a specified report.
    **/
    listChecks(req: operations.ListChecksRequest, config?: AxiosRequestConfig): Promise<operations.ListChecksResponse>;
    /**
     * listHook - Lists all hooks
     *
     * Lists all the configured hooks in your account.
    **/
    listHook(req: operations.ListHookRequest, config?: AxiosRequestConfig): Promise<operations.ListHookResponse>;
    /**
     * listReports - List Reports
     *
     * Lists all reports asociated with the client or user requesting.
    **/
    listReports(req: operations.ListReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListReportsResponse>;
    /**
     * listScoreConfigs - List Score Configurations
     *
     * Lists the custom score configurations of the associated account.
    **/
    listScoreConfigs(req: operations.ListScoreConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListScoreConfigsResponse>;
    /**
     * reportBehavior - Report Behavior
     *
     * Creates a behavior item to report employee conducts that do not or might not be included in their background check. This report includes both possitive and negative behaviors and sorts them by severity.
     *
     * ### Reasons to report a person
     *
     * <table>
     *   <tr>
     *     <td style="width: 100px"><center><b>Very High</b><br>(Score: 1)</td>
     *     <td>Rape, Drug Dealing, Sexual Harassment</td>
     *   </tr>
     *   <tr>
     *     <td><center><b>High</b><br>(Score: 0.8)</td>
     *     <td>Theft, Fights, Aggressive Behaviour, Identity Fraud, Drunk, Drug Possession</td>
     *   </tr>
     *   <tr>
     *     <td><center><b>Medium</b><br>(Score: 0.6)</td>
     *     <td>Absences</td>
     *   </tr>
     *   <tr>
     *     <td><center><b>Low</b><br>(Score: 0.4)</td>
     *     <td>Tardiness, Confidentiality Breach</td>
     *   </tr>
     *   <tr>
     *     <td><center><b>None</b><br>(Score: 0)</td>
     *     <td>Good Reputation</td>
     *   </tr>
     *   <tr>
     *     <td><center><b>Unknown</b></td>
     *     <td>No information</td>
     *   </tr>
     * </table>
     *
     * **NOTE:** If the reason of your report is not here, please contact Truora support team.
     *
    **/
    reportBehavior(req: operations.ReportBehaviorRequest, config?: AxiosRequestConfig): Promise<operations.ReportBehaviorResponse>;
    /**
     * updateHook - Updates hook
     *
     * Updates a hook configuration.
    **/
    updateHook(req: operations.UpdateHookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateHookResponse>;
}
export {};
