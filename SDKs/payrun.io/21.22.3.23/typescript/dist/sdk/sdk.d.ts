import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.test.payrun.io"];
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
     * deleteAeAssessment - Delete auto enrolment assessment
     *
     * Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments
    **/
    deleteAeAssessment(req: operations.DeleteAeAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAeAssessmentResponse>;
    /**
     * deleteBatchJob - Delete the Batch job
     *
     * Deletes the the Batch job
    **/
    deleteBatchJob(req: operations.DeleteBatchJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBatchJobResponse>;
    /**
     * deleteCisInstruction - Delete a CIS instruction
     *
     * Delete the specified CIS instruction
    **/
    deleteCisInstruction(req: operations.DeleteCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisInstructionResponse>;
    /**
     * deleteCisInstructionTag - Delete CIS instruction tag
     *
     * Deletes a tag from the CIS instruction
    **/
    deleteCisInstructionTag(req: operations.DeleteCisInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisInstructionTagResponse>;
    /**
     * deleteCisJob - Delete the CIS job
     *
     * Deletes the the CIS job
    **/
    deleteCisJob(req: operations.DeleteCisJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisJobResponse>;
    /**
     * deleteCisLine - Delete a CIS line
     *
     * Delete the specified CIS line
    **/
    deleteCisLine(req: operations.DeleteCisLineRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineResponse>;
    /**
     * deleteCisLineTag - Delete CIS line tag
     *
     * Deletes a tag from the CIS line
    **/
    deleteCisLineTag(req: operations.DeleteCisLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTagResponse>;
    /**
     * deleteCisLineType - Delete an CIS line type
     *
     * Delete the specified CIS line type
    **/
    deleteCisLineType(req: operations.DeleteCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTypeResponse>;
    /**
     * deleteCisLineTypeTag - Delete CIS line type tag
     *
     * Deletes a tag from the CIS line type
    **/
    deleteCisLineTypeTag(req: operations.DeleteCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTypeTagResponse>;
    /**
     * deleteCisTransaction - Delete the CIS transaction
     *
     * Deletes the specified CIS transaction
    **/
    deleteCisTransaction(req: operations.DeleteCisTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisTransactionResponse>;
    /**
     * deleteDpsJob - Delete the DPS job
     *
     * Deletes the the DPS job
    **/
    deleteDpsJob(req: operations.DeleteDpsJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDpsJobResponse>;
    /**
     * deleteDpsMessage - Deletes the DPS message
     *
     * Deletes the DPS message
    **/
    deleteDpsMessage(req: operations.DeleteDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDpsMessageResponse>;
    /**
     * deleteEmployee - Delete an Employee
     *
     * Delete the specified employee
    **/
    deleteEmployee(req: operations.DeleteEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeResponse>;
    /**
     * deleteEmployeeRevision - Delete an Employee revision matching the specified revision date.
     *
     * Deletes the specified employee revision for the matching revision date
    **/
    deleteEmployeeRevision(req: operations.DeleteEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeRevisionResponse>;
    /**
     * deleteEmployeeRevisionByNumber - Delete an Employee revision matching the specified revision number.
     *
     * Deletes the specified employee revision for the matching revision number
    **/
    deleteEmployeeRevisionByNumber(req: operations.DeleteEmployeeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeRevisionByNumberResponse>;
    /**
     * deleteEmployeeSecret - Deletes employee secret
     *
     * Deletes an employee secret from the given resource location
    **/
    deleteEmployeeSecret(req: operations.DeleteEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeSecretResponse>;
    /**
     * deleteEmployeeTag - Delete employee tag
     *
     * Deletes a tag from the employee
    **/
    deleteEmployeeTag(req: operations.DeleteEmployeeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeTagResponse>;
    /**
     * deleteEmployer - Delete an Employer
     *
     * Delete the specified employer
    **/
    deleteEmployer(req: operations.DeleteEmployerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerResponse>;
    /**
     * deleteEmployerRevision - Delete an Employer revision matching the specified revision date.
     *
     * Deletes the specified employer revision for the matching revision date
    **/
    deleteEmployerRevision(req: operations.DeleteEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerRevisionResponse>;
    /**
     * deleteEmployerRevisionByNumber - Delete an Employer revision matching the specified revision number.
     *
     * Deletes the specified employer revision for the matching revision number
    **/
    deleteEmployerRevisionByNumber(req: operations.DeleteEmployerRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerRevisionByNumberResponse>;
    /**
     * deleteEmployerSecret - Deletes employer secret
     *
     * Deletes an employer secret from the given resource location
    **/
    deleteEmployerSecret(req: operations.DeleteEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerSecretResponse>;
    /**
     * deleteEmployerTag - Delete employer tag
     *
     * Deletes a tag from the employer
    **/
    deleteEmployerTag(req: operations.DeleteEmployerTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerTagResponse>;
    /**
     * deleteHolidayScheme - Delete an holiday scheme
     *
     * Delete the specified holiday scheme
    **/
    deleteHolidayScheme(req: operations.DeleteHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeResponse>;
    /**
     * deleteHolidaySchemeRevision - Delete an holiday scheme revision matching the specified revision date.
     *
     * Deletes the specified holiday scheme revision for the matching revision date
    **/
    deleteHolidaySchemeRevision(req: operations.DeleteHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeRevisionResponse>;
    /**
     * deleteHolidaySchemeRevisionByNumber - Delete an HolidayScheme revision matching the specified revision number.
     *
     * Deletes the specified holiday scheme revision for the matching revision number
    **/
    deleteHolidaySchemeRevisionByNumber(req: operations.DeleteHolidaySchemeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeRevisionByNumberResponse>;
    /**
     * deleteHolidaySchemeTag - Delete holiday scheme tag
     *
     * Deletes a tag from the holiday scheme
    **/
    deleteHolidaySchemeTag(req: operations.DeleteHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeTagResponse>;
    /**
     * deleteJournalInstruction - Deletes a Journal instruction
     *
     * Delete the specified Journal instruction
    **/
    deleteJournalInstruction(req: operations.DeleteJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalInstructionResponse>;
    /**
     * deleteJournalInstructionTemplate - Deletes a Journal instruction template
     *
     * Delete the specified Journal instruction template object
    **/
    deleteJournalInstructionTemplate(req: operations.DeleteJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalInstructionTemplateResponse>;
    /**
     * deleteJournalLineTag - Delete journal line tag
     *
     * Deletes a tag from the journal line
    **/
    deleteJournalLineTag(req: operations.DeleteJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalLineTagResponse>;
    /**
     * deleteNominalCode - Deletes the nominal codes
     *
     * Deletes the nominal code
    **/
    deleteNominalCode(req: operations.DeleteNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNominalCodeResponse>;
    /**
     * deletePayCode - Deletes a pay code
     *
     * Delete the specified pay code
    **/
    deletePayCode(req: operations.DeletePayCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeResponse>;
    /**
     * deletePayCodeRevision - Deletes a pay code revision
     *
     * Delete the pay code revision for the specified date
    **/
    deletePayCodeRevision(req: operations.DeletePayCodeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeRevisionResponse>;
    /**
     * deletePayCodeRevisionByNumber - Delete an PayCode revision matching the specified revision number.
     *
     * Deletes the specified pay code revision for the matching revision number
    **/
    deletePayCodeRevisionByNumber(req: operations.DeletePayCodeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeRevisionByNumberResponse>;
    /**
     * deletePayCodeTag - Delete pay code tag
     *
     * Deletes a tag from the pay code
    **/
    deletePayCodeTag(req: operations.DeletePayCodeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeTagResponse>;
    /**
     * deletePayInstruction - Deletes a pay instruction
     *
     * Delete the specified pay instruction
    **/
    deletePayInstruction(req: operations.DeletePayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayInstructionResponse>;
    /**
     * deletePayInstructionTag - Delete pay instruction tag
     *
     * Deletes a tag from the pay instruction
    **/
    deletePayInstructionTag(req: operations.DeletePayInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayInstructionTagResponse>;
    /**
     * deletePayLineTag - Delete pay line tag
     *
     * Deletes a tag from the pay line
    **/
    deletePayLineTag(req: operations.DeletePayLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayLineTagResponse>;
    /**
     * deletePayRun - Deletes a pay run
     *
     * Delete the specified pay run
    **/
    deletePayRun(req: operations.DeletePayRunRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunResponse>;
    /**
     * deletePayRunEmployee - Deletes a pay run employee
     *
     * Delete pay run results for a single employee
    **/
    deletePayRunEmployee(req: operations.DeletePayRunEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunEmployeeResponse>;
    /**
     * deletePayRunJob - Delete the pay run job
     *
     * Deletes the the payrun job
    **/
    deletePayRunJob(req: operations.DeletePayRunJobRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunJobResponse>;
    /**
     * deletePayRunTag - Delete pay run tag
     *
     * Deletes a tag from the pay run
    **/
    deletePayRunTag(req: operations.DeletePayRunTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunTagResponse>;
    /**
     * deletePaySchedule - Deletes a pay schedule
     *
     * Delete the specified pay schedule
    **/
    deletePaySchedule(req: operations.DeletePayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayScheduleResponse>;
    /**
     * deletePayScheduleTag - Delete pay schedule tag
     *
     * Deletes a tag from the pay schedule
    **/
    deletePayScheduleTag(req: operations.DeletePayScheduleTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayScheduleTagResponse>;
    /**
     * deletePension - Delete a Pension
     *
     * Delete the specified ppension
    **/
    deletePension(req: operations.DeletePensionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionResponse>;
    /**
     * deletePensionRevision - Delete an Pension revision matching the specified revision date.
     *
     * Deletes the specified pension revision for the matching revision date
    **/
    deletePensionRevision(req: operations.DeletePensionRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionRevisionResponse>;
    /**
     * deletePensionRevisionByNumber - Delete an Pension revision matching the specified revision number.
     *
     * Deletes the specified pension revision for the matching revision number
    **/
    deletePensionRevisionByNumber(req: operations.DeletePensionRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionRevisionByNumberResponse>;
    /**
     * deletePermission - Deletes the permission object
     *
     * Deletes the permission object from the application
    **/
    deletePermission(req: operations.DeletePermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionResponse>;
    /**
     * deleteReportDefinition - Deletes a report definition
     *
     * Delete the specified report definition
    **/
    deleteReportDefinition(req: operations.DeleteReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportDefinitionResponse>;
    /**
     * deleteReportingInstruction - Deletes a reporting instruction
     *
     * Delete the specified reporting instruction
    **/
    deleteReportingInstruction(req: operations.DeleteReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportingInstructionResponse>;
    /**
     * deleteRtiJob - Delete the RTI job
     *
     * Deletes the the RTI job
    **/
    deleteRtiJob(req: operations.DeleteRtiJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiJobResponse>;
    /**
     * deleteRtiTransaction - Delete the RTI transaction
     *
     * Deletes the specified RTI transaction
    **/
    deleteRtiTransaction(req: operations.DeleteRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiTransactionResponse>;
    /**
     * deleteRtiTransactionTag - Delete RTI transaction tag
     *
     * Deletes a tag from the RTI transaction
    **/
    deleteRtiTransactionTag(req: operations.DeleteRtiTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiTransactionTagResponse>;
    /**
     * deleteSubContractor - Delete an sub contractor
     *
     * Delete the specified sub contractor
    **/
    deleteSubContractor(req: operations.DeleteSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorResponse>;
    /**
     * deleteSubContractorRevision - Delete an sub contractor revision matching the specified revision date.
     *
     * Deletes the specified sub contractor revision for the matching revision date
    **/
    deleteSubContractorRevision(req: operations.DeleteSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorRevisionResponse>;
    /**
     * deleteSubContractorRevisionByNumber - Delete an SubContractor revision matching the specified revision number.
     *
     * Deletes the specified sub contractor revision for the matching revision number
    **/
    deleteSubContractorRevisionByNumber(req: operations.DeleteSubContractorRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorRevisionByNumberResponse>;
    /**
     * deleteSubContractorTag - Delete sub contractor tag
     *
     * Deletes a tag from the sub contractor
    **/
    deleteSubContractorTag(req: operations.DeleteSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorTagResponse>;
    /**
     * deleteThirdPartyJob - Delete the Third Party job
     *
     * Deletes the the Third Party job
    **/
    deleteThirdPartyJob(req: operations.DeleteThirdPartyJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyJobResponse>;
    /**
     * deleteThirdPartyTransaction - Delete third party transaction
     *
     * Deletes a third party transaction record from the given resource location
    **/
    deleteThirdPartyTransaction(req: operations.DeleteThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyTransactionResponse>;
    /**
     * deleteThirdPartyTransactionTag - Delete third party transaction tag
     *
     * Deletes a tag from the third party transaction
    **/
    deleteThirdPartyTransactionTag(req: operations.DeleteThirdPartyTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyTransactionTagResponse>;
    /**
     * deleteTransformDefinition - Deletes a transform definition
     *
     * Delete the specified transform definition
    **/
    deleteTransformDefinition(req: operations.DeleteTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransformDefinitionResponse>;
    /**
     * deleteUser - Deletes the user object
     *
     * Deletes the user object from the application
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * deleteUserTag - Delete user tag
     *
     * Deletes a tag from the user
    **/
    deleteUserTag(req: operations.DeleteUserTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagResponse>;
    /**
     * getAeAssessmentFromEmployee - Get the auto enrolment assessment
     *
     * Gets the auto enrolment assessment from the specified employee
    **/
    getAeAssessmentFromEmployee(req: operations.GetAeAssessmentFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetAeAssessmentFromEmployeeResponse>;
    /**
     * getAeAssessmentsFromEmployee - Get the auto enrolment assessments
     *
     * Gets all auto enrolment assessments from the specified employee
    **/
    getAeAssessmentsFromEmployee(req: operations.GetAeAssessmentsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetAeAssessmentsFromEmployeeResponse>;
    /**
     * getAeAssessmentsFromPayRun - Get the auto enrolment assessments
     *
     * Gets all auto enrolment assessments from the specified pay run
    **/
    getAeAssessmentsFromPayRun(req: operations.GetAeAssessmentsFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetAeAssessmentsFromPayRunResponse>;
    /**
     * getActivePayInstructionsReportOutput - Runs the active pay instructions report
     *
     * Returns the result of the executed active pay instructions report for the given query parameters
    **/
    getActivePayInstructionsReportOutput(req: operations.GetActivePayInstructionsReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetActivePayInstructionsReportOutputResponse>;
    /**
     * getAllCisInstructionTags - Get all CIS instruction tags
     *
     * Gets all the CIS instruction tags
    **/
    getAllCisInstructionTags(req: operations.GetAllCisInstructionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisInstructionTagsResponse>;
    /**
     * getAllCisLineTags - Get all CIS line tags
     *
     * Gets all the CIS line tags
    **/
    getAllCisLineTags(req: operations.GetAllCisLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisLineTagsResponse>;
    /**
     * getAllCisLineTypeTags - Get all CIS line type tags
     *
     * Gets all the CIS line type tags
    **/
    getAllCisLineTypeTags(req: operations.GetAllCisLineTypeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisLineTypeTagsResponse>;
    /**
     * getAllEmployeeTags - Get all employee tags
     *
     * Gets all the employee tags
    **/
    getAllEmployeeTags(req: operations.GetAllEmployeeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployeeTagsResponse>;
    /**
     * getAllEmployerTags - Get all employer tags
     *
     * Gets all the employer tags
    **/
    getAllEmployerTags(req: operations.GetAllEmployerTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployerTagsResponse>;
    /**
     * getAllHolidaySchemeTags - Get all holiday scheme tags
     *
     * Gets all the holiday scheme tags
    **/
    getAllHolidaySchemeTags(req: operations.GetAllHolidaySchemeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllHolidaySchemeTagsResponse>;
    /**
     * getAllJournalLineTags - Get all journal line tags
     *
     * Gets all the journal line tags
    **/
    getAllJournalLineTags(req: operations.GetAllJournalLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLineTagsResponse>;
    /**
     * getAllJournalLinesWithTag - Get links to tagged journal lines
     *
     * Gets the journal lines with the specified tag
    **/
    getAllJournalLinesWithTag(req: operations.GetAllJournalLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLinesWithTagResponse>;
    /**
     * getAllPayCodeTags - Get all pay code tags
     *
     * Gets all the pay code tags
    **/
    getAllPayCodeTags(req: operations.GetAllPayCodeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayCodeTagsResponse>;
    /**
     * getAllPayInstructionTags - Get all pay instruction tags
     *
     * Gets all the pay instruction tags
    **/
    getAllPayInstructionTags(req: operations.GetAllPayInstructionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayInstructionTagsResponse>;
    /**
     * getAllPayLineTags - Get all pay line tags
     *
     * Gets all the pay line tags
    **/
    getAllPayLineTags(req: operations.GetAllPayLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayLineTagsResponse>;
    /**
     * getAllPayRunTags - Get all pay run tags
     *
     * Gets all the pay run tags
    **/
    getAllPayRunTags(req: operations.GetAllPayRunTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayRunTagsResponse>;
    /**
     * getAllPayScheduleTags - Get all pay schedule tags
     *
     * Gets all the pay schedule tags
    **/
    getAllPayScheduleTags(req: operations.GetAllPayScheduleTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayScheduleTagsResponse>;
    /**
     * getAllRtiTransactionTags - Get all RTI transaction tags
     *
     * Gets all the RTI transaction tags
    **/
    getAllRtiTransactionTags(req: operations.GetAllRtiTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllRtiTransactionTagsResponse>;
    /**
     * getAllSubContractorTags - Get all sub contractor tags
     *
     * Gets all the sub contractor tags
    **/
    getAllSubContractorTags(req: operations.GetAllSubContractorTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllSubContractorTagsResponse>;
    /**
     * getAllThirdPartyTransactionTags - Get all third party transaction tags
     *
     * Gets all the third party transaction tags
    **/
    getAllThirdPartyTransactionTags(req: operations.GetAllThirdPartyTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllThirdPartyTransactionTagsResponse>;
    /**
     * getAllThirdPartyTransactionsWithTag - Get links to tagged third party transactions
     *
     * Gets the third party transactions with the specified tag
    **/
    getAllThirdPartyTransactionsWithTag(req: operations.GetAllThirdPartyTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllThirdPartyTransactionsWithTagResponse>;
    /**
     * getAllUserTags - Get all user tags
     *
     * Get all tags from all users
    **/
    getAllUserTags(req: operations.GetAllUserTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUserTagsResponse>;
    /**
     * getAllUsersWithTag - Get links to tagged users
     *
     * Gets the users with the specified tag
    **/
    getAllUsersWithTag(req: operations.GetAllUsersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUsersWithTagResponse>;
    /**
     * getAoeLiabilityReportOuput - Runs the AOE liability report
     *
     * Returns the result of the executed AOE liability report for the given query parameters
    **/
    getAoeLiabilityReportOuput(req: operations.GetAoeLiabilityReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetAoeLiabilityReportOuputResponse>;
    /**
     * getBatchJobInfo - Get the Batch job information
     *
     * Return the the Batch job information
    **/
    getBatchJobInfo(req: operations.GetBatchJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobInfoResponse>;
    /**
     * getBatchJobProgress - Get the Batch job progress
     *
     * Return the the Batch job progress
    **/
    getBatchJobProgress(req: operations.GetBatchJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobProgressResponse>;
    /**
     * getBatchJobStatus - Get the Batch job status
     *
     * Return the the Batch job status
    **/
    getBatchJobStatus(req: operations.GetBatchJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobStatusResponse>;
    /**
     * getBatchJobs - Get all Batch jobs
     *
     * Gets all the Batch jobs
    **/
    getBatchJobs(req: operations.GetBatchJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobsResponse>;
    /**
     * getCisInstructionFromSubContractor - Get CIS instruction from sub contractor
     *
     * Gets the specified CIS instruction from sub contractor.
    **/
    getCisInstructionFromSubContractor(req: operations.GetCisInstructionFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionFromSubContractorResponse>;
    /**
     * getCisInstructionsFromSubContractor - Get CIS instructions from sub contractor.
     *
     * Get links to all CIS instructions for the specified sub contractor.
    **/
    getCisInstructionsFromSubContractor(req: operations.GetCisInstructionsFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionsFromSubContractorResponse>;
    /**
     * getCisInstructionsWithTag - Get CIS instructions with tag
     *
     * Gets the CIS instruction with the tag
    **/
    getCisInstructionsWithTag(req: operations.GetCisInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionsWithTagResponse>;
    /**
     * getCisJobInfo - Get the CIS job information
     *
     * Return the the CIS job information
    **/
    getCisJobInfo(req: operations.GetCisJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobInfoResponse>;
    /**
     * getCisJobProgress - Get the CIS job progress
     *
     * Return the the CIS job progress
    **/
    getCisJobProgress(req: operations.GetCisJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobProgressResponse>;
    /**
     * getCisJobStatus - Get the CIS job status
     *
     * Return the the CIS job status
    **/
    getCisJobStatus(req: operations.GetCisJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobStatusResponse>;
    /**
     * getCisJobs - Get all CIS jobs
     *
     * Gets all the CIS jobs
    **/
    getCisJobs(req: operations.GetCisJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobsResponse>;
    /**
     * getCisLineFromSubContractor - Get CIS line from sub contractor
     *
     * Gets the specified CIS line from sub contractor.
    **/
    getCisLineFromSubContractor(req: operations.GetCisLineFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineFromSubContractorResponse>;
    /**
     * getCisLineTypeFromEmployer - Get CIS line type from employer
     *
     * Gets the specified CIS line type from employer.
    **/
    getCisLineTypeFromEmployer(req: operations.GetCisLineTypeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypeFromEmployerResponse>;
    /**
     * getCisLineTypesFromEmployer - Get CIS line types from employer.
     *
     * Get links to all CIS line types for the specified employer.
    **/
    getCisLineTypesFromEmployer(req: operations.GetCisLineTypesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypesFromEmployerResponse>;
    /**
     * getCisLineTypesWithTag - Get CIS line types with tag
     *
     * Gets the CIS line type with the tag
    **/
    getCisLineTypesWithTag(req: operations.GetCisLineTypesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypesWithTagResponse>;
    /**
     * getCisLinesFromSubContractor - Get CIS lines from sub contractor.
     *
     * Get links to all CIS lines for the specified sub contractor.
    **/
    getCisLinesFromSubContractor(req: operations.GetCisLinesFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLinesFromSubContractorResponse>;
    /**
     * getCisLinesWithTag - Get CIS lines with tag
     *
     * Gets the CIS line with the tag
    **/
    getCisLinesWithTag(req: operations.GetCisLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLinesWithTagResponse>;
    /**
     * getCisTransactionFromEmployer - Get the CIS transaction
     *
     * Returns the specified CIS transaction
    **/
    getCisTransactionFromEmployer(req: operations.GetCisTransactionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisTransactionFromEmployerResponse>;
    /**
     * getCisTransactionsFromEmployer - Get all CIS transactions for the employer
     *
     * Get links for all CIS transactions for the specified employer
    **/
    getCisTransactionsFromEmployer(req: operations.GetCisTransactionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisTransactionsFromEmployerResponse>;
    /**
     * getCommentariesFromEmployee - Get links to all commentaries for the specified employee
     *
     * Get links to all commentaries for the specified employee.
    **/
    getCommentariesFromEmployee(req: operations.GetCommentariesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentariesFromEmployeeResponse>;
    /**
     * getCommentariesFromPayRun - Get links to all commentaries for the specified pay run
     *
     * Get links to all commentaries for the specified pay run.
    **/
    getCommentariesFromPayRun(req: operations.GetCommentariesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentariesFromPayRunResponse>;
    /**
     * getCommentaryFromEmployee - Get commentary from employee
     *
     * Gets the specified commentary report from the employee
    **/
    getCommentaryFromEmployee(req: operations.GetCommentaryFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentaryFromEmployeeResponse>;
    /**
     * getCommentaryFromPayRunByEmployee - Get commentary from payrun by specified employee.
     *
     * Get commentary from payrun by specified employee.
    **/
    getCommentaryFromPayRunByEmployee(req: operations.GetCommentaryFromPayRunByEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentaryFromPayRunByEmployeeResponse>;
    /**
     * getDpsJobInfo - Get the DPS job information
     *
     * Return the the DPS job information
    **/
    getDpsJobInfo(req: operations.GetDpsJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobInfoResponse>;
    /**
     * getDpsJobProgress - Get the DPS job progress
     *
     * Return the the DPS job progress
    **/
    getDpsJobProgress(req: operations.GetDpsJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobProgressResponse>;
    /**
     * getDpsJobStatus - Get the DPS job status
     *
     * Return the the DPS job status
    **/
    getDpsJobStatus(req: operations.GetDpsJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobStatusResponse>;
    /**
     * getDpsJobs - Get all DPS jobs
     *
     * Gets all the DPS jobs
    **/
    getDpsJobs(req: operations.GetDpsJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobsResponse>;
    /**
     * getDpsMessageFromEmployer - Gets the DPS message
     *
     * Gets the DPS message
    **/
    getDpsMessageFromEmployer(req: operations.GetDpsMessageFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessageFromEmployerResponse>;
    /**
     * getDpsMessageReportOutput - Runs the DPS message report
     *
     * Returns the result of the executed DPS message report for the given query parameters
    **/
    getDpsMessageReportOutput(req: operations.GetDpsMessageReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessageReportOutputResponse>;
    /**
     * getDpsMessagesFromEmployer - Gets the DPS messages
     *
     * Gets the DPS message links
    **/
    getDpsMessagesFromEmployer(req: operations.GetDpsMessagesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessagesFromEmployerResponse>;
    /**
     * getEmployeeByEffectiveDate - Get employee by effective date.
     *
     * Returns the employee's state at the specified effective date.
    **/
    getEmployeeByEffectiveDate(req: operations.GetEmployeeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeByEffectiveDateResponse>;
    /**
     * getEmployeeFromEmployer - Get employee from employer
     *
     * Gets the specified employee from employer by employee code.
    **/
    getEmployeeFromEmployer(req: operations.GetEmployeeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeFromEmployerResponse>;
    /**
     * getEmployeeRevisionByNumber - Gets the employee by revision number
     *
     * Get the employee revision matching the specified revision number
    **/
    getEmployeeRevisionByNumber(req: operations.GetEmployeeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeRevisionByNumberResponse>;
    /**
     * getEmployeeRevisions - Get all employee revisions
     *
     * Gets links to all employee revisions
    **/
    getEmployeeRevisions(req: operations.GetEmployeeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeRevisionsResponse>;
    /**
     * getEmployeeSecret - Get employee secret
     *
     * Get the public visible employee secret object
    **/
    getEmployeeSecret(req: operations.GetEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSecretResponse>;
    /**
     * getEmployeeSecrets - Get all employee secret links
     *
     * Get all the employee secret links
    **/
    getEmployeeSecrets(req: operations.GetEmployeeSecretsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSecretsResponse>;
    /**
     * getEmployeesByEffectiveDate - Get employees from employer at a given effective date.
     *
     * Get links to all employees for the employer on specified effective date.
    **/
    getEmployeesByEffectiveDate(req: operations.GetEmployeesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesByEffectiveDateResponse>;
    /**
     * getEmployeesFromEmployer - Get employees from employer.
     *
     * Get links to all employees for the specified employer.
    **/
    getEmployeesFromEmployer(req: operations.GetEmployeesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromEmployerResponse>;
    /**
     * getEmployeesFromPayRun - Get employees from the pay run
     *
     * Gets links to all employees included in the specified pay run.
    **/
    getEmployeesFromPayRun(req: operations.GetEmployeesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayRunResponse>;
    /**
     * getEmployeesFromPaySchedule - Get all employees revisions from a pay schedule.
     *
     * Gets links to all employee revisions that have ever existed in the specified pay schedule.
    **/
    getEmployeesFromPaySchedule(req: operations.GetEmployeesFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleResponse>;
    /**
     * getEmployeesFromPayScheduleOnEffectiveDate - Get employees from a pay schedule on effective date.
     *
     * Gets links to all employee revisions in the specified pay schedule for the given effective date.
    **/
    getEmployeesFromPayScheduleOnEffectiveDate(req: operations.GetEmployeesFromPayScheduleOnEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleOnEffectiveDateResponse>;
    /**
     * getEmployeesWithTag - Get employees with tag
     *
     * Gets the employees with the tag
    **/
    getEmployeesWithTag(req: operations.GetEmployeesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesWithTagResponse>;
    /**
     * getEmployer - Gets the employer
     *
     * Get the specified employer object
    **/
    getEmployer(req: operations.GetEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerResponse>;
    /**
     * getEmployerByEffectiveDate - Gets the employer at the specified effective
     *
     * Returns the employer's state at the specified effective date.
    **/
    getEmployerByEffectiveDate(req: operations.GetEmployerByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerByEffectiveDateResponse>;
    /**
     * getEmployerJobs - Gets all jobs relating to the employer.
     *
     * Returns all job information objects for the specified employer.
    **/
    getEmployerJobs(req: operations.GetEmployerJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerJobsResponse>;
    /**
     * getEmployerRevisionByNumber - Gets the employer by revision number
     *
     * Get the employer revision matching the specified revision number
    **/
    getEmployerRevisionByNumber(req: operations.GetEmployerRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerRevisionByNumberResponse>;
    /**
     * getEmployerRevisions - Gets the employer revisions
     *
     * Gets links to all the employer revisions
    **/
    getEmployerRevisions(req: operations.GetEmployerRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerRevisionsResponse>;
    /**
     * getEmployerSecret - Get employer secret
     *
     * Get the public visible employer secret object
    **/
    getEmployerSecret(req: operations.GetEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSecretResponse>;
    /**
     * getEmployerSecrets - Get all employer secret links
     *
     * Get all the employer secret links
    **/
    getEmployerSecrets(req: operations.GetEmployerSecretsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSecretsResponse>;
    /**
     * getEmployerSummaryReportOuput - Runs the employer summary report
     *
     * Returns the result of the employer summary report for the given query parameters
    **/
    getEmployerSummaryReportOuput(req: operations.GetEmployerSummaryReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSummaryReportOuputResponse>;
    /**
     * getEmployers - Gets all employers
     *
     * Gets links to all employers contained under the authorised application scope
    **/
    getEmployers(req: operations.GetEmployersRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersResponse>;
    /**
     * getEmployersByEffectiveDate - Gets all employers at the specified effective date
     *
     * Gets links to all employers contained under the authorised application scope for the specified effective date.
    **/
    getEmployersByEffectiveDate(req: operations.GetEmployersByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersByEffectiveDateResponse>;
    /**
     * getEmployersWithTag - Get employers with tag
     *
     * Gets the employers with the tag
    **/
    getEmployersWithTag(req: operations.GetEmployersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersWithTagResponse>;
    /**
     * getGrossToNetReportOutput - Runs the gross to net report
     *
     * Returns the result of the executed gross to net report for the given query parameters
    **/
    getGrossToNetReportOutput(req: operations.GetGrossToNetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetGrossToNetReportOutputResponse>;
    /**
     * getHealthCheck - Get health check status
     *
     * Returns the health status of the application
    **/
    getHealthCheck(config?: AxiosRequestConfig): Promise<operations.GetHealthCheckResponse>;
    /**
     * getHolidayBalanceReportOutput - Runs the holiday balance report
     *
     * Returns the result of the executed holiday balance report for the given query parameters
    **/
    getHolidayBalanceReportOutput(req: operations.GetHolidayBalanceReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidayBalanceReportOutputResponse>;
    /**
     * getHolidaySchemeByEffectiveDate - Get holiday scheme by effective date.
     *
     * Returns the holiday scheme's state at the specified effective date.
    **/
    getHolidaySchemeByEffectiveDate(req: operations.GetHolidaySchemeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeByEffectiveDateResponse>;
    /**
     * getHolidaySchemeFromEmployer - Get holiday scheme from employer
     *
     * Gets the specified holiday scheme from employer.
    **/
    getHolidaySchemeFromEmployer(req: operations.GetHolidaySchemeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeFromEmployerResponse>;
    /**
     * getHolidaySchemeRevisionByNumber - Gets the holiday scheme revision by revision number
     *
     * Get the holiday scheme revision matching the specified revision number
    **/
    getHolidaySchemeRevisionByNumber(req: operations.GetHolidaySchemeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeRevisionByNumberResponse>;
    /**
     * getHolidaySchemeRevisions - Get all holiday scheme revisions
     *
     * Gets links to all the holiday scheme revisions
    **/
    getHolidaySchemeRevisions(req: operations.GetHolidaySchemeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeRevisionsResponse>;
    /**
     * getHolidaySchemesByEffectiveDate - Get holiday schemes from employer at a given effective date.
     *
     * Get links to all holiday schemes for the employer on specified effective date.
    **/
    getHolidaySchemesByEffectiveDate(req: operations.GetHolidaySchemesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesByEffectiveDateResponse>;
    /**
     * getHolidaySchemesFromEmployer - Get holiday schemes from employer.
     *
     * Get links to all holiday schemes for the specified employer.
    **/
    getHolidaySchemesFromEmployer(req: operations.GetHolidaySchemesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesFromEmployerResponse>;
    /**
     * getHolidaySchemesWithTag - Get holiday schemes with tag
     *
     * Gets the holiday scheme with the tag
    **/
    getHolidaySchemesWithTag(req: operations.GetHolidaySchemesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesWithTagResponse>;
    /**
     * getJournalExpressionSchema - Gets the journal expression data schema
     *
     * Gets the data schema for all available journal expression values. Includes table names, column names and data types.
    **/
    getJournalExpressionSchema(req: operations.GetJournalExpressionSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalExpressionSchemaResponse>;
    /**
     * getJournalInstructionFromEmployer - Gets the specified journal instruction from the employer
     *
     * Returns the specified journal instruction from employer
    **/
    getJournalInstructionFromEmployer(req: operations.GetJournalInstructionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionFromEmployerResponse>;
    /**
     * getJournalInstructionTemplate - Gets the Journal instructions template for the application
     *
     * Retrurns the specified journal instruction from the application
    **/
    getJournalInstructionTemplate(req: operations.GetJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionTemplateResponse>;
    /**
     * getJournalInstructionTemplates - Gets the Journal instructions templates for the application
     *
     * Get links to all journal instruction templates for the application
    **/
    getJournalInstructionTemplates(req: operations.GetJournalInstructionTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionTemplatesResponse>;
    /**
     * getJournalInstructionsFromEmployer - Gets the Journal instructions from the specified employer
     *
     * Get links to all journal instructions for the specified employer
    **/
    getJournalInstructionsFromEmployer(req: operations.GetJournalInstructionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionsFromEmployerResponse>;
    /**
     * getJournalLineFromEmployer - Gets the specified journal Line from the employer
     *
     * Returns the specified journal Line from employer
    **/
    getJournalLineFromEmployer(req: operations.GetJournalLineFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLineFromEmployerResponse>;
    /**
     * getJournalLinesFromEmployee - Gets the journal Lines from the specified employee
     *
     * Get links to all journal lines for the specified employee
    **/
    getJournalLinesFromEmployee(req: operations.GetJournalLinesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromEmployeeResponse>;
    /**
     * getJournalLinesFromEmployer - Gets the Journal Lines from the specified employer
     *
     * Get links to all journal Lines for the specified employer
    **/
    getJournalLinesFromEmployer(req: operations.GetJournalLinesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromEmployerResponse>;
    /**
     * getJournalLinesFromPayRun - Gets the journal Lines from the specified pay run
     *
     * Get links to all journal lines for the specified pay run
    **/
    getJournalLinesFromPayRun(req: operations.GetJournalLinesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromPayRunResponse>;
    /**
     * getJournalLinesFromSubContractor - Gets the journal Lines from the specified sub contractor
     *
     * Get links to all journal lines for the specified sub contractor
    **/
    getJournalLinesFromSubContractor(req: operations.GetJournalLinesFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromSubContractorResponse>;
    /**
     * getJournalReportOuput - Runs the journal report
     *
     * Returns the result of the journal report for the given query parameters
    **/
    getJournalReportOuput(req: operations.GetJournalReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalReportOuputResponse>;
    /**
     * getLastPayDateReportOuput - Runs the last pay date report
     *
     * Returns the result of the executed last pay date report for the given query parameters
    **/
    getLastPayDateReportOuput(req: operations.GetLastPayDateReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetLastPayDateReportOuputResponse>;
    /**
     * getNetPayReportOutput - Runs the net pay report
     *
     * Returns the result of the executed net pay report for the given query parameters
    **/
    getNetPayReportOutput(req: operations.GetNetPayReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetNetPayReportOutputResponse>;
    /**
     * getNextPayPeriodDatesReportOutput - Runs the next pay period report
     *
     * Returns the result of the executed next pay period report for the given query parameters
    **/
    getNextPayPeriodDatesReportOutput(req: operations.GetNextPayPeriodDatesReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetNextPayPeriodDatesReportOutputResponse>;
    /**
     * getNominalCodeFromEmployer - Gets the nominal code
     *
     * Gets the nominal code
    **/
    getNominalCodeFromEmployer(req: operations.GetNominalCodeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetNominalCodeFromEmployerResponse>;
    /**
     * getNominalCodesFromEmployer - Gets the nominal codes
     *
     * Gets the nominal code links
    **/
    getNominalCodesFromEmployer(req: operations.GetNominalCodesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetNominalCodesFromEmployerResponse>;
    /**
     * getP11SummaryReportOutput - Runs the P11 summary report
     *
     * Returns the result of the executed P11 summary report for the given query parameters
    **/
    getP11SummaryReportOutput(req: operations.GetP11SummaryReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP11SummaryReportOutputResponse>;
    /**
     * getP32NetReportOutput - Runs the P32 report
     *
     * Returns the result of the executed P32 report for the given query parameters
    **/
    getP32NetReportOutput(req: operations.GetP32NetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP32NetReportOutputResponse>;
    /**
     * getP32SummaryNetReportOutput - Runs the P32 summary report
     *
     * Returns the result of the executed P32 summary report for the given query parameters
    **/
    getP32SummaryNetReportOutput(req: operations.GetP32SummaryNetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP32SummaryNetReportOutputResponse>;
    /**
     * getP45ReportOutput - Runs the P45 report
     *
     * Returns the result of the executed P45 report for the given query parameters
    **/
    getP45ReportOutput(req: operations.GetP45ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP45ReportOutputResponse>;
    /**
     * getP60ReportOutput - Runs the P60 report
     *
     * Returns the result of the executed P60 report for the given query parameters
    **/
    getP60ReportOutput(req: operations.GetP60ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP60ReportOutputResponse>;
    /**
     * getPapdisReportOuput - Runs the PAPDIS report
     *
     * Returns the result of the executed PAPDIS report. PAPDIS is a free and open data interface standard designed to allow payroll and middleware software developers to create a file that can be used by pension providers to exchange data. http://www.papdis.org
    **/
    getPapdisReportOuput(req: operations.GetPapdisReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPapdisReportOuputResponse>;
    /**
     * getPassReportOuput - Runs the PASS report
     *
     * Returns the result of the executed PASS report. PASS stands for Payroll and Systemsync. PASS 1.1 is an extension of the PAPDIS V1.1 schema. https://pensionsynckb.systemsyncsolutions.com/display/PKB/PASS+1.1
    **/
    getPassReportOuput(req: operations.GetPassReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPassReportOuputResponse>;
    /**
     * getPayCodeByEffectiveDate - Gets pay code for specified date
     *
     * Gets the pay code revision for the specified effective date
    **/
    getPayCodeByEffectiveDate(req: operations.GetPayCodeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeByEffectiveDateResponse>;
    /**
     * getPayCodeFromEmployer - Gets the specified pay code from the employer
     *
     * Returns the specified pay code from the employer
    **/
    getPayCodeFromEmployer(req: operations.GetPayCodeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeFromEmployerResponse>;
    /**
     * getPayCodeRevisionByNumber - Gets the pay code by revision number
     *
     * Get the pay code revision matching the specified revision number
    **/
    getPayCodeRevisionByNumber(req: operations.GetPayCodeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeRevisionByNumberResponse>;
    /**
     * getPayCodeRevisions - Get all revisions of the Pay Code
     *
     * Returns links to all revisions of the pay code
    **/
    getPayCodeRevisions(req: operations.GetPayCodeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeRevisionsResponse>;
    /**
     * getPayCodesByEffectiveDate - Gets all pay codes for specified date
     *
     * Gets the effective pay code revision for the specified date
    **/
    getPayCodesByEffectiveDate(req: operations.GetPayCodesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesByEffectiveDateResponse>;
    /**
     * getPayCodesFromEmployer - Gets the pay codes from the employer
     *
     * Get links to all the pay codes for the specified employer
    **/
    getPayCodesFromEmployer(req: operations.GetPayCodesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesFromEmployerResponse>;
    /**
     * getPayCodesFromNominalCode - Gets the pay codes by nominal code
     *
     * Get the pay codes that share the specified nominal code
    **/
    getPayCodesFromNominalCode(req: operations.GetPayCodesFromNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesFromNominalCodeResponse>;
    /**
     * getPayCodesWithTag - Get pay codes with tag
     *
     * Gets the pay codes with the tag
    **/
    getPayCodesWithTag(req: operations.GetPayCodesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesWithTagResponse>;
    /**
     * getPayDashboardPayslipReportOuput - Runs the Pay Dashboard payslips report
     *
     * Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.
    **/
    getPayDashboardPayslipReportOuput(req: operations.GetPayDashboardPayslipReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPayDashboardPayslipReportOuputResponse>;
    /**
     * getPayInstructionFromEmployee - Gets the specified pay instruction from the employee
     *
     * Returns the specified pay instruction from employee
    **/
    getPayInstructionFromEmployee(req: operations.GetPayInstructionFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionFromEmployeeResponse>;
    /**
     * getPayInstructionsFromEmployee - Gets the pay instructions from the specified employee
     *
     * Get links to all pay instructions for the specified employee
    **/
    getPayInstructionsFromEmployee(req: operations.GetPayInstructionsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionsFromEmployeeResponse>;
    /**
     * getPayInstructionsWithTag - Get pay instructions with tag
     *
     * Gets the pay instructions with the tag
    **/
    getPayInstructionsWithTag(req: operations.GetPayInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionsWithTagResponse>;
    /**
     * getPayLineFromEmployee - Gets the specified pay line from the employee
     *
     * Returns the specified pay line from employee
    **/
    getPayLineFromEmployee(req: operations.GetPayLineFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLineFromEmployeeResponse>;
    /**
     * getPayLinesFromEmployee - Gets the pay lines from the specified employee
     *
     * Get links to all pay lines for the specified employee
    **/
    getPayLinesFromEmployee(req: operations.GetPayLinesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesFromEmployeeResponse>;
    /**
     * getPayLinesWithTag - Get pay lines with tag
     *
     * Gets the pay line with the tag
    **/
    getPayLinesWithTag(req: operations.GetPayLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesWithTagResponse>;
    /**
     * getPayRunFromPaySchedule - Gets the pay run from the pay schedule
     *
     * Returns the pay run from the pay schedule
    **/
    getPayRunFromPaySchedule(req: operations.GetPayRunFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunFromPayScheduleResponse>;
    /**
     * getPayRunJobInfo - Get the pay run job information
     *
     * Return the the payrun job information
    **/
    getPayRunJobInfo(req: operations.GetPayRunJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobInfoResponse>;
    /**
     * getPayRunJobProgress - Get the pay run job progress
     *
     * Return the the payrun job progress
    **/
    getPayRunJobProgress(req: operations.GetPayRunJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobProgressResponse>;
    /**
     * getPayRunJobStatus - Get the pay run job status
     *
     * Return the the payrun job status
    **/
    getPayRunJobStatus(req: operations.GetPayRunJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobStatusResponse>;
    /**
     * getPayRunJobs - Get all PayRun jobs
     *
     * Gets all the pay run jobs
    **/
    getPayRunJobs(req: operations.GetPayRunJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobsResponse>;
    /**
     * getPayRunsFromEmployee - Gets the pay runs from the employee
     *
     * Get links to all pay runs for the specified employee.
    **/
    getPayRunsFromEmployee(req: operations.GetPayRunsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromEmployeeResponse>;
    /**
     * getPayRunsFromPaySchedule - Gets the pay runs from the pay schedule
     *
     * Get links to all pay runs for the specified pay schedule
    **/
    getPayRunsFromPaySchedule(req: operations.GetPayRunsFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromPayScheduleResponse>;
    /**
     * getPayRunsWithTag - Get pay runs with tag
     *
     * Gets the pay runs with the tag
    **/
    getPayRunsWithTag(req: operations.GetPayRunsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsWithTagResponse>;
    /**
     * getPayScheduleFromEmployer - Gets the specified pay schedule from the employer
     *
     * Returns the specified pay schedule object from employer
    **/
    getPayScheduleFromEmployer(req: operations.GetPayScheduleFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayScheduleFromEmployerResponse>;
    /**
     * getPaySchedulesFromEmployer - Gets the pay schedule from the specified employer
     *
     * Get links to all pay schedules for the specified employer
    **/
    getPaySchedulesFromEmployer(req: operations.GetPaySchedulesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPaySchedulesFromEmployerResponse>;
    /**
     * getPaySchedulesWithTag - Get pay schedule with tag
     *
     * Gets the pay schedules with the tag
    **/
    getPaySchedulesWithTag(req: operations.GetPaySchedulesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPaySchedulesWithTagResponse>;
    /**
     * getPayslip3ReportOutput - Runs the verbose payslip report
     *
     * Returns the result of the executed verbose payslip report for the given query parameters
    **/
    getPayslip3ReportOutput(req: operations.GetPayslip3ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetPayslip3ReportOutputResponse>;
    /**
     * getPensionByEffectiveDate - Get pension by effective date.
     *
     * Returns the penion's state at the specified effective date.
    **/
    getPensionByEffectiveDate(req: operations.GetPensionByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionByEffectiveDateResponse>;
    /**
     * getPensionFromEmployer - Get pension from employer
     *
     * Gets the specified pension from employer by pension code.
    **/
    getPensionFromEmployer(req: operations.GetPensionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionFromEmployerResponse>;
    /**
     * getPensionLiabilityReportOutput - Runs the pension liability report
     *
     * Returns the result of the executed pension liability report for the given query parameters
    **/
    getPensionLiabilityReportOutput(req: operations.GetPensionLiabilityReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionLiabilityReportOutputResponse>;
    /**
     * getPensionRevisionByNumber - Gets the pension by revision number
     *
     * Get the pension revision matching the specified revision number
    **/
    getPensionRevisionByNumber(req: operations.GetPensionRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionRevisionByNumberResponse>;
    /**
     * getPensionRevisions - Get all pension revisions
     *
     * Returns links to all revisions of the pension
    **/
    getPensionRevisions(req: operations.GetPensionRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionRevisionsResponse>;
    /**
     * getPensionsByEffectiveDate - Get pensions from employer at a given effective date.
     *
     * Get links to all pensions for the employer on specified effective date.
    **/
    getPensionsByEffectiveDate(req: operations.GetPensionsByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionsByEffectiveDateResponse>;
    /**
     * getPensionsFromEmployer - Get pensions from employer.
     *
     * Get links to all pensions for the specified employer.
    **/
    getPensionsFromEmployer(req: operations.GetPensionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionsFromEmployerResponse>;
    /**
     * getPermission - Gets the permission object
     *
     * Gets the permission object for application
    **/
    getPermission(req: operations.GetPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionResponse>;
    /**
     * getPermissions - Gets all permission objects
     *
     * Gets all permission objects for application
    **/
    getPermissions(req: operations.GetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionsResponse>;
    /**
     * getQueryResponse - Get the query result
     *
     * Get the results for the specified query
    **/
    getQueryResponse(req: operations.GetQueryResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResponseResponse>;
    /**
     * getReportDefinitionFromApplication - Get the report definition
     *
     * Returns the specified report definition from the authroised application
    **/
    getReportDefinitionFromApplication(req: operations.GetReportDefinitionFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetReportDefinitionFromApplicationResponse>;
    /**
     * getReportDefinitionsFromApplication - Gets all reports
     *
     * Get links to all saved report definitions under authorised application
    **/
    getReportDefinitionsFromApplication(req: operations.GetReportDefinitionsFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetReportDefinitionsFromApplicationResponse>;
    /**
     * getReportLineFromEmployer - Gets the specified report line from the employer
     *
     * Returns the specified pay line from employee
    **/
    getReportLineFromEmployer(req: operations.GetReportLineFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLineFromEmployerResponse>;
    /**
     * getReportLinesFromEmployer - Gets the report lines from the specified employer
     *
     * Get links to all report lines for the specified employee
    **/
    getReportLinesFromEmployer(req: operations.GetReportLinesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLinesFromEmployerResponse>;
    /**
     * getReportLinesFromPayRun - Gets the report lines from the specified pay run
     *
     * Returns all report lines associated with the specified pay run
    **/
    getReportLinesFromPayRun(req: operations.GetReportLinesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLinesFromPayRunResponse>;
    /**
     * getReportOutput - Runs the specified report definition
     *
     * Returns the result of the executed report definition
    **/
    getReportOutput(req: operations.GetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetReportOutputResponse>;
    /**
     * getReportingInstructionFromEmployer - Gets the specified reporting instruction from the employer
     *
     * Returns the specified pay instruction from employee
    **/
    getReportingInstructionFromEmployer(req: operations.GetReportingInstructionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportingInstructionFromEmployerResponse>;
    /**
     * getReportingInstructionsFromEmployer - Gets the reporting instructions from the specified employer
     *
     * Get links to all pay instructions for the specified employee
    **/
    getReportingInstructionsFromEmployer(req: operations.GetReportingInstructionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportingInstructionsFromEmployerResponse>;
    /**
     * getRtiJobInfo - Get the RTI job information
     *
     * Return the the RTI job information
    **/
    getRtiJobInfo(req: operations.GetRtiJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobInfoResponse>;
    /**
     * getRtiJobProgress - Get the RTI job progress
     *
     * Return the the RTI job progress
    **/
    getRtiJobProgress(req: operations.GetRtiJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobProgressResponse>;
    /**
     * getRtiJobStatus - Get the RTI job status
     *
     * Return the the RTI job status
    **/
    getRtiJobStatus(req: operations.GetRtiJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobStatusResponse>;
    /**
     * getRtiJobs - Get all RTI jobs
     *
     * Gets all the RTI jobs
    **/
    getRtiJobs(req: operations.GetRtiJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobsResponse>;
    /**
     * getRtiTransactionFromEmployer - Get the RTI transaction
     *
     * Returns the specified RTI transaction
    **/
    getRtiTransactionFromEmployer(req: operations.GetRtiTransactionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionFromEmployerResponse>;
    /**
     * getRtiTransactionsFromEmployer - Get all RTI transactions for the employer
     *
     * Get links for all RTI transactions for the specified employer
    **/
    getRtiTransactionsFromEmployer(req: operations.GetRtiTransactionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionsFromEmployerResponse>;
    /**
     * getRtiTransactionsWithTag - Get RTI transactions with tag
     *
     * Gets the RTI transactions with the tag
    **/
    getRtiTransactionsWithTag(req: operations.GetRtiTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionsWithTagResponse>;
    /**
     * getSchema - Get XSD schema
     *
     * Returns the XSD schema for the specified data type
    **/
    getSchema(req: operations.GetSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaResponse>;
    /**
     * getSchemas - Get a list of all available schemas
     *
     * Returns a collection of links to all the available data object schemas
    **/
    getSchemas(req: operations.GetSchemasRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemasResponse>;
    /**
     * getSubContractorByEffectiveDate - Get sub contractor by effective date.
     *
     * Returns the sub contractor's state at the specified effective date.
    **/
    getSubContractorByEffectiveDate(req: operations.GetSubContractorByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorByEffectiveDateResponse>;
    /**
     * getSubContractorFromEmployer - Get sub contractor from employer
     *
     * Gets the specified sub contractor from employer.
    **/
    getSubContractorFromEmployer(req: operations.GetSubContractorFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorFromEmployerResponse>;
    /**
     * getSubContractorRevisionByNumber - Gets the sub contractor by revision number
     *
     * Get the sub contractor revision matching the specified revision number
    **/
    getSubContractorRevisionByNumber(req: operations.GetSubContractorRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorRevisionByNumberResponse>;
    /**
     * getSubContractorRevisions - Get all sub contractor revisions
     *
     * Gets links to all the sub contractor revisions
    **/
    getSubContractorRevisions(req: operations.GetSubContractorRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorRevisionsResponse>;
    /**
     * getSubContractorsByEffectiveDate - Get sub contractors from employer at a given effective date.
     *
     * Get links to all sub contractors for the employer on specified effective date.
    **/
    getSubContractorsByEffectiveDate(req: operations.GetSubContractorsByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsByEffectiveDateResponse>;
    /**
     * getSubContractorsFromEmployer - Get sub contractors from employer.
     *
     * Get links to all sub contractors for the specified employer.
    **/
    getSubContractorsFromEmployer(req: operations.GetSubContractorsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsFromEmployerResponse>;
    /**
     * getSubContractorsWithTag - Get sub contractors with tag
     *
     * Gets the sub contractor with the tag
    **/
    getSubContractorsWithTag(req: operations.GetSubContractorsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsWithTagResponse>;
    /**
     * getTagFromCisInstruction - Get CIS instruction tag
     *
     * Gets the tag from the CIS instruction
    **/
    getTagFromCisInstruction(req: operations.GetTagFromCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisInstructionResponse>;
    /**
     * getTagFromCisLine - Get CIS line tag
     *
     * Gets the tag from the CIS line
    **/
    getTagFromCisLine(req: operations.GetTagFromCisLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisLineResponse>;
    /**
     * getTagFromCisLineType - Get CIS line type tag
     *
     * Gets the tag from the CIS line type
    **/
    getTagFromCisLineType(req: operations.GetTagFromCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisLineTypeResponse>;
    /**
     * getTagFromEmployee - Get employee tag
     *
     * Gets the tag from the employee
    **/
    getTagFromEmployee(req: operations.GetTagFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployeeResponse>;
    /**
     * getTagFromEmployeeRevision - Get employee revision tag
     *
     * Gets the tag from the employee revision
    **/
    getTagFromEmployeeRevision(req: operations.GetTagFromEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployeeRevisionResponse>;
    /**
     * getTagFromEmployer - Get employer tag
     *
     * Gets the tag from the employer
    **/
    getTagFromEmployer(req: operations.GetTagFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployerResponse>;
    /**
     * getTagFromEmployerRevision - Get employer revision tag
     *
     * Gets the tag from the employer revision
    **/
    getTagFromEmployerRevision(req: operations.GetTagFromEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployerRevisionResponse>;
    /**
     * getTagFromHolidayScheme - Get holiday scheme tag
     *
     * Gets the tag from the holiday scheme
    **/
    getTagFromHolidayScheme(req: operations.GetTagFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeResponse>;
    /**
     * getTagFromHolidaySchemeRevision - Get holiday scheme revision tag
     *
     * Gets the tag from the holiday scheme revision
    **/
    getTagFromHolidaySchemeRevision(req: operations.GetTagFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeRevisionResponse>;
    /**
     * getTagFromJournalLine - Get journal line tag
     *
     * Gets a tag from the journal line
    **/
    getTagFromJournalLine(req: operations.GetTagFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromJournalLineResponse>;
    /**
     * getTagFromPayCode - Get pay code tag
     *
     * Gets the tag from the pay code
    **/
    getTagFromPayCode(req: operations.GetTagFromPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayCodeResponse>;
    /**
     * getTagFromPayInstruction - Get pay instruction tag
     *
     * Gets the tag from the pay instruction
    **/
    getTagFromPayInstruction(req: operations.GetTagFromPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayInstructionResponse>;
    /**
     * getTagFromPayLine - Get pay line tag
     *
     * Gets the tag from the pay line
    **/
    getTagFromPayLine(req: operations.GetTagFromPayLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayLineResponse>;
    /**
     * getTagFromPayRun - Get pay run tag
     *
     * Gets the tag from the pay run
    **/
    getTagFromPayRun(req: operations.GetTagFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayRunResponse>;
    /**
     * getTagFromPaySchedule - Get pay schedule tag
     *
     * Gets the tag from the pay schedule
    **/
    getTagFromPaySchedule(req: operations.GetTagFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayScheduleResponse>;
    /**
     * getTagFromRtiTransaction - Get RTI transaction tag
     *
     * Gets the tag from the RTI transaction
    **/
    getTagFromRtiTransaction(req: operations.GetTagFromRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromRtiTransactionResponse>;
    /**
     * getTagFromSubContractor - Get sub contractor tag
     *
     * Gets the tag from the sub contractor
    **/
    getTagFromSubContractor(req: operations.GetTagFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromSubContractorResponse>;
    /**
     * getTagFromSubContractorRevision - Get sub contractor revision tag
     *
     * Gets the tag from the sub contractor revision
    **/
    getTagFromSubContractorRevision(req: operations.GetTagFromSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromSubContractorRevisionResponse>;
    /**
     * getTagFromThirdPartyTransaction - Get third party transaction tag
     *
     * Gets a tag from the third party transaction
    **/
    getTagFromThirdPartyTransaction(req: operations.GetTagFromThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromThirdPartyTransactionResponse>;
    /**
     * getTagFromUser - Get user tag
     *
     * Gets a tag from the user
    **/
    getTagFromUser(req: operations.GetTagFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromUserResponse>;
    /**
     * getTagsFromCisInstruction - Get all tags from the CIS instruction
     *
     * Gets all the tags from the CIS instruction
    **/
    getTagsFromCisInstruction(req: operations.GetTagsFromCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisInstructionResponse>;
    /**
     * getTagsFromCisLine - Get all tags from the CIS line
     *
     * Gets all the tags from the CIS line
    **/
    getTagsFromCisLine(req: operations.GetTagsFromCisLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisLineResponse>;
    /**
     * getTagsFromCisLineType - Get all tags from the CIS line type
     *
     * Gets all the tags from the CIS line type
    **/
    getTagsFromCisLineType(req: operations.GetTagsFromCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisLineTypeResponse>;
    /**
     * getTagsFromEmployee - Get all employee tags
     *
     * Gets all the tags from the employee
    **/
    getTagsFromEmployee(req: operations.GetTagsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployeeResponse>;
    /**
     * getTagsFromEmployeeRevision - Get all employee revision tags
     *
     * Gets all the tags from the employee revision
    **/
    getTagsFromEmployeeRevision(req: operations.GetTagsFromEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployeeRevisionResponse>;
    /**
     * getTagsFromEmployer - Get all employer tags
     *
     * Gets all the tags from the employer
    **/
    getTagsFromEmployer(req: operations.GetTagsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployerResponse>;
    /**
     * getTagsFromEmployerRevision - Get all employer revision tags
     *
     * Gets all the tags from the employer revision
    **/
    getTagsFromEmployerRevision(req: operations.GetTagsFromEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployerRevisionResponse>;
    /**
     * getTagsFromHolidayScheme - Get all tags from the holiday scheme
     *
     * Gets all the tags from the holiday scheme
    **/
    getTagsFromHolidayScheme(req: operations.GetTagsFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeResponse>;
    /**
     * getTagsFromHolidaySchemeRevision - Get all holiday scheme revision tags
     *
     * Gets all the tags from the holiday scheme revision
    **/
    getTagsFromHolidaySchemeRevision(req: operations.GetTagsFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeRevisionResponse>;
    /**
     * getTagsFromJournalLine - Get tags from journal line
     *
     * Gets all tags from the journal line
    **/
    getTagsFromJournalLine(req: operations.GetTagsFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromJournalLineResponse>;
    /**
     * getTagsFromPayCode - Get all pay code tags
     *
     * Gets all the tags from the pay code
    **/
    getTagsFromPayCode(req: operations.GetTagsFromPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayCodeResponse>;
    /**
     * getTagsFromPayInstruction - Get all tags from the pay instruction
     *
     * Gets all the tags from the pay instruction
    **/
    getTagsFromPayInstruction(req: operations.GetTagsFromPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayInstructionResponse>;
    /**
     * getTagsFromPayLine - Get all tags from the pay line
     *
     * Gets all the tags from the pay line
    **/
    getTagsFromPayLine(req: operations.GetTagsFromPayLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayLineResponse>;
    /**
     * getTagsFromPayRun - Get all pay run tags
     *
     * Gets all the tags from the pay run
    **/
    getTagsFromPayRun(req: operations.GetTagsFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayRunResponse>;
    /**
     * getTagsFromPaySchedule - Get all pay schedule tags
     *
     * Gets all the tags from the pay schedule
    **/
    getTagsFromPaySchedule(req: operations.GetTagsFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayScheduleResponse>;
    /**
     * getTagsFromRtiTransaction - Get all tags from RTI transaction
     *
     * Gets all the tags from the RTI transaction
    **/
    getTagsFromRtiTransaction(req: operations.GetTagsFromRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromRtiTransactionResponse>;
    /**
     * getTagsFromSubContractor - Get all tags from the sub contractor
     *
     * Gets all the tags from the sub contractor
    **/
    getTagsFromSubContractor(req: operations.GetTagsFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromSubContractorResponse>;
    /**
     * getTagsFromSubContractorRevision - Get all sub contractor revision tags
     *
     * Gets all the tags from the sub contractor revision
    **/
    getTagsFromSubContractorRevision(req: operations.GetTagsFromSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromSubContractorRevisionResponse>;
    /**
     * getTagsFromThirdPartyTransaction - Get tags from third party transaction
     *
     * Gets all tags from the third party transaction
    **/
    getTagsFromThirdPartyTransaction(req: operations.GetTagsFromThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromThirdPartyTransactionResponse>;
    /**
     * getTagsFromUser - Get tags from user
     *
     * Gets all tags from the user
    **/
    getTagsFromUser(req: operations.GetTagsFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromUserResponse>;
    /**
     * getTemplateModel - Get the object template
     *
     * Returns a template instance of the specified data type
    **/
    getTemplateModel(req: operations.GetTemplateModelRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateModelResponse>;
    /**
     * getTemplates - Get a list of all available data object tempaltes
     *
     * Returns a collection of links to all the available data object templates
    **/
    getTemplates(req: operations.GetTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplatesResponse>;
    /**
     * getThirdPartyJobInfo - Get the Third Party job information
     *
     * Return the the Third Party job information
    **/
    getThirdPartyJobInfo(req: operations.GetThirdPartyJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobInfoResponse>;
    /**
     * getThirdPartyJobProgress - Get the Third Party job progress
     *
     * Return the the Third Party job progress
    **/
    getThirdPartyJobProgress(req: operations.GetThirdPartyJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobProgressResponse>;
    /**
     * getThirdPartyJobStatus - Get the Third Party job status
     *
     * Return the the Third Party job status
    **/
    getThirdPartyJobStatus(req: operations.GetThirdPartyJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobStatusResponse>;
    /**
     * getThirdPartyJobs - Get all Third Party jobs
     *
     * Gets all the Third Party jobs
    **/
    getThirdPartyJobs(req: operations.GetThirdPartyJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobsResponse>;
    /**
     * getThirdPartyTransaction - Get a third party transaction
     *
     * Get a third party transaction
    **/
    getThirdPartyTransaction(req: operations.GetThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyTransactionResponse>;
    /**
     * getThirdPartyTransactions - Get all third party transaction links
     *
     * Get all third party transaction links
    **/
    getThirdPartyTransactions(req: operations.GetThirdPartyTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyTransactionsResponse>;
    /**
     * getTransformDefinitionFromApplication - Get the transform definition
     *
     * Returns the specified transform definition from the authroised application
    **/
    getTransformDefinitionFromApplication(req: operations.GetTransformDefinitionFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetTransformDefinitionFromApplicationResponse>;
    /**
     * getTransformDefinitionsFromApplication - Gets all transform definitions
     *
     * Get links to all saved transform definitions under authorised application
    **/
    getTransformDefinitionsFromApplication(req: operations.GetTransformDefinitionsFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetTransformDefinitionsFromApplicationResponse>;
    /**
     * getUser - Gets the user object
     *
     * Gets the user object for application
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUsers - Gets all user objects
     *
     * Gets all user objects for application
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * patchCisInstruction - Patches the CIS instruction
     *
     * Update an existing CIS instruction object
    **/
    patchCisInstruction(req: operations.PatchCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PatchCisInstructionResponse>;
    /**
     * patchDpsMessage - Patches the DPS message
     *
     * Patches the specified DPS message with the supplied values
    **/
    patchDpsMessage(req: operations.PatchDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PatchDpsMessageResponse>;
    /**
     * patchEmployee - Patches the employee
     *
     * Patches the specified employee with the supplied values
    **/
    patchEmployee(req: operations.PatchEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.PatchEmployeeResponse>;
    /**
     * patchEmployer - Patches the employer
     *
     * Patches the specified employer with the supplied values
    **/
    patchEmployer(req: operations.PatchEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PatchEmployerResponse>;
    /**
     * patchHolidayScheme - Patches the holiday scheme
     *
     * Patches the specified holiday scheme with the supplied values
    **/
    patchHolidayScheme(req: operations.PatchHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.PatchHolidaySchemeResponse>;
    /**
     * patchPayCode - Patches the pay code
     *
     * Patches the specified pay code object with the supplied values
    **/
    patchPayCode(req: operations.PatchPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PatchPayCodeResponse>;
    /**
     * patchPayInstruction - Sparse Update of a Pay Instruction
     *
     * Patches the specified pay instruction with the supplied values
    **/
    patchPayInstruction(req: operations.PatchPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPayInstructionResponse>;
    /**
     * patchPension - Patches the pension
     *
     * Patches the specified pension with the supplied values
    **/
    patchPension(req: operations.PatchPensionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPensionResponse>;
    /**
     * patchPermission - Patch permission object
     *
     * Patch the permission object at the specified resource location
    **/
    patchPermission(req: operations.PatchPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPermissionResponse>;
    /**
     * patchSubContractor - Patches the sub contractor
     *
     * Patches the specified sub contractor with the supplied values
    **/
    patchSubContractor(req: operations.PatchSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PatchSubContractorResponse>;
    /**
     * patchUser - Patch user object
     *
     * Patch the user object at the specified resource location
    **/
    patchUser(req: operations.PatchUserRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserResponse>;
    /**
     * postCisInstructionIntoSubContractor - Create a new CIS instruction
     *
     * Create a new CIS instruction object
    **/
    postCisInstructionIntoSubContractor(req: operations.PostCisInstructionIntoSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PostCisInstructionIntoSubContractorResponse>;
    /**
     * postCisLineTypeIntoEmployer - Create a new CIS line type
     *
     * Create a new CIS line type object
    **/
    postCisLineTypeIntoEmployer(req: operations.PostCisLineTypeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostCisLineTypeIntoEmployerResponse>;
    /**
     * postDpsMessage - Posta the DPS message
     *
     * Insert new DPS message
    **/
    postDpsMessage(req: operations.PostDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PostDpsMessageResponse>;
    /**
     * postEmployeeIntoEmployer - Create a new Employee
     *
     * Create a new employee object
    **/
    postEmployeeIntoEmployer(req: operations.PostEmployeeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployeeIntoEmployerResponse>;
    /**
     * postEmployeeSecret - Create a new employee secret
     *
     * Create new employee secret using auto generated resource location key
    **/
    postEmployeeSecret(req: operations.PostEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployeeSecretResponse>;
    /**
     * postEmployer - Create a new Employer
     *
     * Create a new employer object
    **/
    postEmployer(req: operations.PostEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployerResponse>;
    /**
     * postEmployerSecret - Create a new employer secret
     *
     * Create new employer secret using auto generated resource location key
    **/
    postEmployerSecret(req: operations.PostEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployerSecretResponse>;
    /**
     * postHolidaySchemeIntoEmployer - Create a new holiday scheme
     *
     * Create a new holiday scheme object
    **/
    postHolidaySchemeIntoEmployer(req: operations.PostHolidaySchemeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostHolidaySchemeIntoEmployerResponse>;
    /**
     * postJournalInstruction - Creates a new Journal Instruction
     *
     * Creates a new Journal instruction object
    **/
    postJournalInstruction(req: operations.PostJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostJournalInstructionResponse>;
    /**
     * postJournalInstructionTemplate - Creates a new Journal Instruction template
     *
     * Creates a new Journal instruction teamplte object
    **/
    postJournalInstructionTemplate(req: operations.PostJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PostJournalInstructionTemplateResponse>;
    /**
     * postNewAeAssessment - Insert new auto enrolment assessment
     *
     * Creates a new auto enrolment assessment for the employee. Used to insert historical assessments
    **/
    postNewAeAssessment(req: operations.PostNewAeAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.PostNewAeAssessmentResponse>;
    /**
     * postNewBatchJob - Create new Batch job
     *
     * Adds a new Batch job to the queue and returns the job info
    **/
    postNewBatchJob(req: operations.PostNewBatchJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewBatchJobResponse>;
    /**
     * postNewCisJob - Create new CIS job
     *
     * Adds a new CIS job to the queue and returns the job info
    **/
    postNewCisJob(req: operations.PostNewCisJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewCisJobResponse>;
    /**
     * postNewDpsJob - Create new DPS job
     *
     * Creates the new DPS job to the queue and returns the job info
    **/
    postNewDpsJob(req: operations.PostNewDpsJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewDpsJobResponse>;
    /**
     * postNewPayRunJob - Create new PayRun job
     *
     * Creates the new pay run job to the queue and returns the job info
    **/
    postNewPayRunJob(req: operations.PostNewPayRunJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewPayRunJobResponse>;
    /**
     * postNewRtiJob - Create new RTI job
     *
     * Creates the new RTI job to the queue and returns the job info
    **/
    postNewRtiJob(req: operations.PostNewRtiJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewRtiJobResponse>;
    /**
     * postNewThirdPartyJob - Create new Third Party job
     *
     * Adds a new Third Party job to the queue and returns the job info
    **/
    postNewThirdPartyJob(req: operations.PostNewThirdPartyJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewThirdPartyJobResponse>;
    /**
     * postNominalCode - Insert nominal code
     *
     * Inserts a new nominal code
    **/
    postNominalCode(req: operations.PostNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.PostNominalCodeResponse>;
    /**
     * postPayCode - Create a new pay code
     *
     * Create a new pay code object
    **/
    postPayCode(req: operations.PostPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PostPayCodeResponse>;
    /**
     * postPayInstruction - Creates a new Pay Instruction
     *
     * Creates a new pay instruction object
    **/
    postPayInstruction(req: operations.PostPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostPayInstructionResponse>;
    /**
     * postPaySchedule - Create a new pay schedule
     *
     * Create a new pay schedule object
    **/
    postPaySchedule(req: operations.PostPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PostPayScheduleResponse>;
    /**
     * postPensionIntoEmployer - Create a new Pension
     *
     * Create a new pension object
    **/
    postPensionIntoEmployer(req: operations.PostPensionIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostPensionIntoEmployerResponse>;
    /**
     * postPermission - Post permisson object
     *
     * Post the new permission object into the application
    **/
    postPermission(req: operations.PostPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PostPermissionResponse>;
    /**
     * postReportDefinition - Create a new report definition
     *
     * Creates a new report defintion object
    **/
    postReportDefinition(req: operations.PostReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PostReportDefinitionResponse>;
    /**
     * postReportingInstruction - Creates a new Reporting Instruction
     *
     * Creates a new reporting instruction object
    **/
    postReportingInstruction(req: operations.PostReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostReportingInstructionResponse>;
    /**
     * postSubContractorIntoEmployer - Create a new sub contractor
     *
     * Create a new sub contractor object
    **/
    postSubContractorIntoEmployer(req: operations.PostSubContractorIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostSubContractorIntoEmployerResponse>;
    /**
     * postTransformDefinition - Create a new transform definition
     *
     * Creates a new transform defintion object
    **/
    postTransformDefinition(req: operations.PostTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PostTransformDefinitionResponse>;
    /**
     * postUser - Post user object
     *
     * Post the new user object into the application
    **/
    postUser(req: operations.PostUserRequest, config?: AxiosRequestConfig): Promise<operations.PostUserResponse>;
    /**
     * putCisInstructionIntoSubContractor - Updates the CIS instruction
     *
     * Insert or update existing CIS instruction object
    **/
    putCisInstructionIntoSubContractor(req: operations.PutCisInstructionIntoSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PutCisInstructionIntoSubContractorResponse>;
    /**
     * putCisInstructionTag - Insert CIS instruction tag
     *
     * Inserts a new tag on the CIS instruction
    **/
    putCisInstructionTag(req: operations.PutCisInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisInstructionTagResponse>;
    /**
     * putCisLineTag - Insert CIS line tag
     *
     * Inserts a new tag on the CIS line
    **/
    putCisLineTag(req: operations.PutCisLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTagResponse>;
    /**
     * putCisLineTypeIntoEmployer - Updates the CIS line type
     *
     * Updates the existing specified CIS line type object
    **/
    putCisLineTypeIntoEmployer(req: operations.PutCisLineTypeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTypeIntoEmployerResponse>;
    /**
     * putCisLineTypeTag - Insert CIS line type tag
     *
     * Inserts a new tag on the CIS line type
    **/
    putCisLineTypeTag(req: operations.PutCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTypeTagResponse>;
    /**
     * putDpsMessage - Puts the DPS message
     *
     * Puts the DPS message
    **/
    putDpsMessage(req: operations.PutDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PutDpsMessageResponse>;
    /**
     * putEmployeeIntoEmployer - Updates the Employee
     *
     * Updates the existing specified employee object
    **/
    putEmployeeIntoEmployer(req: operations.PutEmployeeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeIntoEmployerResponse>;
    /**
     * putEmployeeSecret - Create a new employee secret
     *
     * Create / update an employee secret at the given resource location
    **/
    putEmployeeSecret(req: operations.PutEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeSecretResponse>;
    /**
     * putEmployeeTag - Insert employee tag
     *
     * Inserts a new tag on the employee
    **/
    putEmployeeTag(req: operations.PutEmployeeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeTagResponse>;
    /**
     * putEmployer - Updates the Employer
     *
     * Updates the existing specified employer object
    **/
    putEmployer(req: operations.PutEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerResponse>;
    /**
     * putEmployerSecret - Create a new employer secret
     *
     * Create / update an employer secret at the given resource location
    **/
    putEmployerSecret(req: operations.PutEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerSecretResponse>;
    /**
     * putEmployerTag - Insert employer tag
     *
     * Inserts a new tag on the employer
    **/
    putEmployerTag(req: operations.PutEmployerTagRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerTagResponse>;
    /**
     * putHolidaySchemeIntoEmployer - Updates the holiday scheme
     *
     * Updates the existing specified holiday scheme object
    **/
    putHolidaySchemeIntoEmployer(req: operations.PutHolidaySchemeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutHolidaySchemeIntoEmployerResponse>;
    /**
     * putHolidaySchemeTag - Insert holiday scheme tag
     *
     * Inserts a new tag on the holiday scheme
    **/
    putHolidaySchemeTag(req: operations.PutHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutHolidaySchemeTagResponse>;
    /**
     * putJournalInstruction - Update a Journal Instruction
     *
     * Updates the existing specified Journal instruction object
    **/
    putJournalInstruction(req: operations.PutJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalInstructionResponse>;
    /**
     * putJournalInstructionTemplate - Update a Journal Instruction template
     *
     * Updates the existing specified Journal instruction template object
    **/
    putJournalInstructionTemplate(req: operations.PutJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalInstructionTemplateResponse>;
    /**
     * putJournalLineTag - Insert journal line tag
     *
     * Inserts a tag on the journal line
    **/
    putJournalLineTag(req: operations.PutJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalLineTagResponse>;
    /**
     * putNewAeAssessment - Insert new auto enrolment assessment
     *
     * Creates a new auto enrolment assessment for the employee. Used to insert historical assessments
    **/
    putNewAeAssessment(req: operations.PutNewAeAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.PutNewAeAssessmentResponse>;
    /**
     * putNominalCode - Insert nominal code
     *
     * Inserts a new nominal code at the specified resource location
    **/
    putNominalCode(req: operations.PutNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutNominalCodeResponse>;
    /**
     * putPayCode - Updates a pay code
     *
     * Updates the existing specified pay code object
    **/
    putPayCode(req: operations.PutPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutPayCodeResponse>;
    /**
     * putPayCodeTag - Insert pay code tag
     *
     * Inserts a new tag on the pay code
    **/
    putPayCodeTag(req: operations.PutPayCodeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayCodeTagResponse>;
    /**
     * putPayInstruction - Update a Pay Instruction
     *
     * Updates the existing specified pay instruction object
    **/
    putPayInstruction(req: operations.PutPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutPayInstructionResponse>;
    /**
     * putPayInstructionTag - Insert pay instruction tag
     *
     * Inserts a new tag on the pay instruction
    **/
    putPayInstructionTag(req: operations.PutPayInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayInstructionTagResponse>;
    /**
     * putPayLineTag - Insert pay line tag
     *
     * Inserts a new tag on the pay line
    **/
    putPayLineTag(req: operations.PutPayLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayLineTagResponse>;
    /**
     * putPayRunTag - Insert pay run tag
     *
     * Inserts a new tag on the pay run
    **/
    putPayRunTag(req: operations.PutPayRunTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayRunTagResponse>;
    /**
     * putPaySchedule - Updates a pay schedule
     *
     * Updates the existing specified pay schedule object
    **/
    putPaySchedule(req: operations.PutPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PutPayScheduleResponse>;
    /**
     * putPayScheduleTag - Insert pay schedule tag
     *
     * Inserts a new tag on the pay schedule
    **/
    putPayScheduleTag(req: operations.PutPayScheduleTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayScheduleTagResponse>;
    /**
     * putPensionIntoEmployer - Updates the Pension
     *
     * Updates existing or inserts the specified pension object
    **/
    putPensionIntoEmployer(req: operations.PutPensionIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutPensionIntoEmployerResponse>;
    /**
     * putPermission - Puts permisson object
     *
     * Puts the permission object into the specified resource location
    **/
    putPermission(req: operations.PutPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PutPermissionResponse>;
    /**
     * putReportDefinition - Updates a report definition
     *
     * Updates the existing specified report definition object
    **/
    putReportDefinition(req: operations.PutReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportDefinitionResponse>;
    /**
     * putReportingInstruction - Update a reporting Instruction
     *
     * Updates the existing specified reporting instruction object
    **/
    putReportingInstruction(req: operations.PutReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportingInstructionResponse>;
    /**
     * putRtiTransactionTag - Insert RTI transaction tag
     *
     * Inserts a new tag on the RTI transaction
    **/
    putRtiTransactionTag(req: operations.PutRtiTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutRtiTransactionTagResponse>;
    /**
     * putSubContractorIntoEmployer - Updates the sub contractor
     *
     * Updates the existing specified sub contractor object
    **/
    putSubContractorIntoEmployer(req: operations.PutSubContractorIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutSubContractorIntoEmployerResponse>;
    /**
     * putSubContractorTag - Insert sub contractor tag
     *
     * Inserts a new tag on the sub contractor
    **/
    putSubContractorTag(req: operations.PutSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.PutSubContractorTagResponse>;
    /**
     * putThirdPartyTransactionTag - insert third party transaction tag
     *
     * Inserts a tag on the third party transaction
    **/
    putThirdPartyTransactionTag(req: operations.PutThirdPartyTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutThirdPartyTransactionTagResponse>;
    /**
     * putTransformDefinition - Updates a transform definition
     *
     * Updates the existing specified transform definition object
    **/
    putTransformDefinition(req: operations.PutTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutTransformDefinitionResponse>;
    /**
     * putUser - Puts user object
     *
     * Puts the user object into the specified resource location
    **/
    putUser(req: operations.PutUserRequest, config?: AxiosRequestConfig): Promise<operations.PutUserResponse>;
    /**
     * putUserTag - Insert user tag
     *
     * Inserts a tag on the user
    **/
    putUserTag(req: operations.PutUserTagRequest, config?: AxiosRequestConfig): Promise<operations.PutUserTagResponse>;
}
export {};
