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
     * Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments
    **/
    DeleteAeAssessment(req: operations.DeleteAeAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAeAssessmentResponse>;
    /**
     * Deletes the the Batch job
    **/
    DeleteBatchJob(req: operations.DeleteBatchJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBatchJobResponse>;
    /**
     * Delete the specified CIS instruction
    **/
    DeleteCisInstruction(req: operations.DeleteCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisInstructionResponse>;
    /**
     * Deletes a tag from the CIS instruction
    **/
    DeleteCisInstructionTag(req: operations.DeleteCisInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisInstructionTagResponse>;
    /**
     * Deletes the the CIS job
    **/
    DeleteCisJob(req: operations.DeleteCisJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisJobResponse>;
    /**
     * Delete the specified CIS line
    **/
    DeleteCisLine(req: operations.DeleteCisLineRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineResponse>;
    /**
     * Deletes a tag from the CIS line
    **/
    DeleteCisLineTag(req: operations.DeleteCisLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTagResponse>;
    /**
     * Delete the specified CIS line type
    **/
    DeleteCisLineType(req: operations.DeleteCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTypeResponse>;
    /**
     * Deletes a tag from the CIS line type
    **/
    DeleteCisLineTypeTag(req: operations.DeleteCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTypeTagResponse>;
    /**
     * Deletes the specified CIS transaction
    **/
    DeleteCisTransaction(req: operations.DeleteCisTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisTransactionResponse>;
    /**
     * Deletes the the DPS job
    **/
    DeleteDpsJob(req: operations.DeleteDpsJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDpsJobResponse>;
    /**
     * Deletes the DPS message
    **/
    DeleteDpsMessage(req: operations.DeleteDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDpsMessageResponse>;
    /**
     * Delete the specified employee
    **/
    DeleteEmployee(req: operations.DeleteEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeResponse>;
    /**
     * Deletes the specified employee revision for the matching revision date
    **/
    DeleteEmployeeRevision(req: operations.DeleteEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeRevisionResponse>;
    /**
     * Deletes the specified employee revision for the matching revision number
    **/
    DeleteEmployeeRevisionByNumber(req: operations.DeleteEmployeeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeRevisionByNumberResponse>;
    /**
     * Deletes an employee secret from the given resource location
    **/
    DeleteEmployeeSecret(req: operations.DeleteEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeSecretResponse>;
    /**
     * Deletes a tag from the employee
    **/
    DeleteEmployeeTag(req: operations.DeleteEmployeeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeTagResponse>;
    /**
     * Delete the specified employer
    **/
    DeleteEmployer(req: operations.DeleteEmployerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerResponse>;
    /**
     * Deletes the specified employer revision for the matching revision date
    **/
    DeleteEmployerRevision(req: operations.DeleteEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerRevisionResponse>;
    /**
     * Deletes the specified employer revision for the matching revision number
    **/
    DeleteEmployerRevisionByNumber(req: operations.DeleteEmployerRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerRevisionByNumberResponse>;
    /**
     * Deletes an employer secret from the given resource location
    **/
    DeleteEmployerSecret(req: operations.DeleteEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerSecretResponse>;
    /**
     * Deletes a tag from the employer
    **/
    DeleteEmployerTag(req: operations.DeleteEmployerTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerTagResponse>;
    /**
     * Delete the specified holiday scheme
    **/
    DeleteHolidayScheme(req: operations.DeleteHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeResponse>;
    /**
     * Deletes the specified holiday scheme revision for the matching revision date
    **/
    DeleteHolidaySchemeRevision(req: operations.DeleteHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeRevisionResponse>;
    /**
     * Deletes the specified holiday scheme revision for the matching revision number
    **/
    DeleteHolidaySchemeRevisionByNumber(req: operations.DeleteHolidaySchemeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeRevisionByNumberResponse>;
    /**
     * Deletes a tag from the holiday scheme
    **/
    DeleteHolidaySchemeTag(req: operations.DeleteHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeTagResponse>;
    /**
     * Delete the specified Journal instruction
    **/
    DeleteJournalInstruction(req: operations.DeleteJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalInstructionResponse>;
    /**
     * Delete the specified Journal instruction template object
    **/
    DeleteJournalInstructionTemplate(req: operations.DeleteJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalInstructionTemplateResponse>;
    /**
     * Deletes a tag from the journal line
    **/
    DeleteJournalLineTag(req: operations.DeleteJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalLineTagResponse>;
    /**
     * Deletes the nominal code
    **/
    DeleteNominalCode(req: operations.DeleteNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNominalCodeResponse>;
    /**
     * Delete the specified pay code
    **/
    DeletePayCode(req: operations.DeletePayCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeResponse>;
    /**
     * Delete the pay code revision for the specified date
    **/
    DeletePayCodeRevision(req: operations.DeletePayCodeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeRevisionResponse>;
    /**
     * Deletes the specified pay code revision for the matching revision number
    **/
    DeletePayCodeRevisionByNumber(req: operations.DeletePayCodeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeRevisionByNumberResponse>;
    /**
     * Deletes a tag from the pay code
    **/
    DeletePayCodeTag(req: operations.DeletePayCodeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeTagResponse>;
    /**
     * Delete the specified pay instruction
    **/
    DeletePayInstruction(req: operations.DeletePayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayInstructionResponse>;
    /**
     * Deletes a tag from the pay instruction
    **/
    DeletePayInstructionTag(req: operations.DeletePayInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayInstructionTagResponse>;
    /**
     * Deletes a tag from the pay line
    **/
    DeletePayLineTag(req: operations.DeletePayLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayLineTagResponse>;
    /**
     * Delete the specified pay run
    **/
    DeletePayRun(req: operations.DeletePayRunRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunResponse>;
    /**
     * Delete pay run results for a single employee
    **/
    DeletePayRunEmployee(req: operations.DeletePayRunEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunEmployeeResponse>;
    /**
     * Deletes the the payrun job
    **/
    DeletePayRunJob(req: operations.DeletePayRunJobRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunJobResponse>;
    /**
     * Deletes a tag from the pay run
    **/
    DeletePayRunTag(req: operations.DeletePayRunTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunTagResponse>;
    /**
     * Delete the specified pay schedule
    **/
    DeletePaySchedule(req: operations.DeletePayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayScheduleResponse>;
    /**
     * Deletes a tag from the pay schedule
    **/
    DeletePayScheduleTag(req: operations.DeletePayScheduleTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayScheduleTagResponse>;
    /**
     * Delete the specified ppension
    **/
    DeletePension(req: operations.DeletePensionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionResponse>;
    /**
     * Deletes the specified pension revision for the matching revision date
    **/
    DeletePensionRevision(req: operations.DeletePensionRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionRevisionResponse>;
    /**
     * Deletes the specified pension revision for the matching revision number
    **/
    DeletePensionRevisionByNumber(req: operations.DeletePensionRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionRevisionByNumberResponse>;
    /**
     * Deletes the permission object from the application
    **/
    DeletePermission(req: operations.DeletePermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionResponse>;
    /**
     * Delete the specified report definition
    **/
    DeleteReportDefinition(req: operations.DeleteReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportDefinitionResponse>;
    /**
     * Delete the specified reporting instruction
    **/
    DeleteReportingInstruction(req: operations.DeleteReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportingInstructionResponse>;
    /**
     * Deletes the the RTI job
    **/
    DeleteRtiJob(req: operations.DeleteRtiJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiJobResponse>;
    /**
     * Deletes the specified RTI transaction
    **/
    DeleteRtiTransaction(req: operations.DeleteRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiTransactionResponse>;
    /**
     * Deletes a tag from the RTI transaction
    **/
    DeleteRtiTransactionTag(req: operations.DeleteRtiTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiTransactionTagResponse>;
    /**
     * Delete the specified sub contractor
    **/
    DeleteSubContractor(req: operations.DeleteSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorResponse>;
    /**
     * Deletes the specified sub contractor revision for the matching revision date
    **/
    DeleteSubContractorRevision(req: operations.DeleteSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorRevisionResponse>;
    /**
     * Deletes the specified sub contractor revision for the matching revision number
    **/
    DeleteSubContractorRevisionByNumber(req: operations.DeleteSubContractorRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorRevisionByNumberResponse>;
    /**
     * Deletes a tag from the sub contractor
    **/
    DeleteSubContractorTag(req: operations.DeleteSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorTagResponse>;
    /**
     * Deletes the the Third Party job
    **/
    DeleteThirdPartyJob(req: operations.DeleteThirdPartyJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyJobResponse>;
    /**
     * Deletes a third party transaction record from the given resource location
    **/
    DeleteThirdPartyTransaction(req: operations.DeleteThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyTransactionResponse>;
    /**
     * Deletes a tag from the third party transaction
    **/
    DeleteThirdPartyTransactionTag(req: operations.DeleteThirdPartyTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyTransactionTagResponse>;
    /**
     * Delete the specified transform definition
    **/
    DeleteTransformDefinition(req: operations.DeleteTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransformDefinitionResponse>;
    /**
     * Deletes the user object from the application
    **/
    DeleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Deletes a tag from the user
    **/
    DeleteUserTag(req: operations.DeleteUserTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagResponse>;
    /**
     * Gets the auto enrolment assessment from the specified employee
    **/
    GetAeAssessmentFromEmployee(req: operations.GetAeAssessmentFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetAeAssessmentFromEmployeeResponse>;
    /**
     * Gets all auto enrolment assessments from the specified employee
    **/
    GetAeAssessmentsFromEmployee(req: operations.GetAeAssessmentsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetAeAssessmentsFromEmployeeResponse>;
    /**
     * Gets all auto enrolment assessments from the specified pay run
    **/
    GetAeAssessmentsFromPayRun(req: operations.GetAeAssessmentsFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetAeAssessmentsFromPayRunResponse>;
    /**
     * Returns the result of the executed active pay instructions report for the given query parameters
    **/
    GetActivePayInstructionsReportOutput(req: operations.GetActivePayInstructionsReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetActivePayInstructionsReportOutputResponse>;
    /**
     * Gets all the CIS instruction tags
    **/
    GetAllCisInstructionTags(req: operations.GetAllCisInstructionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisInstructionTagsResponse>;
    /**
     * Gets all the CIS line tags
    **/
    GetAllCisLineTags(req: operations.GetAllCisLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisLineTagsResponse>;
    /**
     * Gets all the CIS line type tags
    **/
    GetAllCisLineTypeTags(req: operations.GetAllCisLineTypeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisLineTypeTagsResponse>;
    /**
     * Gets all the employee tags
    **/
    GetAllEmployeeTags(req: operations.GetAllEmployeeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployeeTagsResponse>;
    /**
     * Gets all the employer tags
    **/
    GetAllEmployerTags(req: operations.GetAllEmployerTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployerTagsResponse>;
    /**
     * Gets all the holiday scheme tags
    **/
    GetAllHolidaySchemeTags(req: operations.GetAllHolidaySchemeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllHolidaySchemeTagsResponse>;
    /**
     * Gets all the journal line tags
    **/
    GetAllJournalLineTags(req: operations.GetAllJournalLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLineTagsResponse>;
    /**
     * Gets the journal lines with the specified tag
    **/
    GetAllJournalLinesWithTag(req: operations.GetAllJournalLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLinesWithTagResponse>;
    /**
     * Gets all the pay code tags
    **/
    GetAllPayCodeTags(req: operations.GetAllPayCodeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayCodeTagsResponse>;
    /**
     * Gets all the pay instruction tags
    **/
    GetAllPayInstructionTags(req: operations.GetAllPayInstructionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayInstructionTagsResponse>;
    /**
     * Gets all the pay line tags
    **/
    GetAllPayLineTags(req: operations.GetAllPayLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayLineTagsResponse>;
    /**
     * Gets all the pay run tags
    **/
    GetAllPayRunTags(req: operations.GetAllPayRunTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayRunTagsResponse>;
    /**
     * Gets all the pay schedule tags
    **/
    GetAllPayScheduleTags(req: operations.GetAllPayScheduleTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayScheduleTagsResponse>;
    /**
     * Gets all the RTI transaction tags
    **/
    GetAllRtiTransactionTags(req: operations.GetAllRtiTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllRtiTransactionTagsResponse>;
    /**
     * Gets all the sub contractor tags
    **/
    GetAllSubContractorTags(req: operations.GetAllSubContractorTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllSubContractorTagsResponse>;
    /**
     * Gets all the third party transaction tags
    **/
    GetAllThirdPartyTransactionTags(req: operations.GetAllThirdPartyTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllThirdPartyTransactionTagsResponse>;
    /**
     * Gets the third party transactions with the specified tag
    **/
    GetAllThirdPartyTransactionsWithTag(req: operations.GetAllThirdPartyTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllThirdPartyTransactionsWithTagResponse>;
    /**
     * Get all tags from all users
    **/
    GetAllUserTags(req: operations.GetAllUserTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUserTagsResponse>;
    /**
     * Gets the users with the specified tag
    **/
    GetAllUsersWithTag(req: operations.GetAllUsersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUsersWithTagResponse>;
    /**
     * Returns the result of the executed AOE liability report for the given query parameters
    **/
    GetAoeLiabilityReportOuput(req: operations.GetAoeLiabilityReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetAoeLiabilityReportOuputResponse>;
    /**
     * Return the the Batch job information
    **/
    GetBatchJobInfo(req: operations.GetBatchJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobInfoResponse>;
    /**
     * Return the the Batch job progress
    **/
    GetBatchJobProgress(req: operations.GetBatchJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobProgressResponse>;
    /**
     * Return the the Batch job status
    **/
    GetBatchJobStatus(req: operations.GetBatchJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobStatusResponse>;
    /**
     * Gets all the Batch jobs
    **/
    GetBatchJobs(req: operations.GetBatchJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobsResponse>;
    /**
     * Gets the specified CIS instruction from sub contractor.
    **/
    GetCisInstructionFromSubContractor(req: operations.GetCisInstructionFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionFromSubContractorResponse>;
    /**
     * Get links to all CIS instructions for the specified sub contractor.
    **/
    GetCisInstructionsFromSubContractor(req: operations.GetCisInstructionsFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionsFromSubContractorResponse>;
    /**
     * Gets the CIS instruction with the tag
    **/
    GetCisInstructionsWithTag(req: operations.GetCisInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionsWithTagResponse>;
    /**
     * Return the the CIS job information
    **/
    GetCisJobInfo(req: operations.GetCisJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobInfoResponse>;
    /**
     * Return the the CIS job progress
    **/
    GetCisJobProgress(req: operations.GetCisJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobProgressResponse>;
    /**
     * Return the the CIS job status
    **/
    GetCisJobStatus(req: operations.GetCisJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobStatusResponse>;
    /**
     * Gets all the CIS jobs
    **/
    GetCisJobs(req: operations.GetCisJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobsResponse>;
    /**
     * Gets the specified CIS line from sub contractor.
    **/
    GetCisLineFromSubContractor(req: operations.GetCisLineFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineFromSubContractorResponse>;
    /**
     * Gets the specified CIS line type from employer.
    **/
    GetCisLineTypeFromEmployer(req: operations.GetCisLineTypeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypeFromEmployerResponse>;
    /**
     * Get links to all CIS line types for the specified employer.
    **/
    GetCisLineTypesFromEmployer(req: operations.GetCisLineTypesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypesFromEmployerResponse>;
    /**
     * Gets the CIS line type with the tag
    **/
    GetCisLineTypesWithTag(req: operations.GetCisLineTypesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypesWithTagResponse>;
    /**
     * Get links to all CIS lines for the specified sub contractor.
    **/
    GetCisLinesFromSubContractor(req: operations.GetCisLinesFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLinesFromSubContractorResponse>;
    /**
     * Gets the CIS line with the tag
    **/
    GetCisLinesWithTag(req: operations.GetCisLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLinesWithTagResponse>;
    /**
     * Returns the specified CIS transaction
    **/
    GetCisTransactionFromEmployer(req: operations.GetCisTransactionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisTransactionFromEmployerResponse>;
    /**
     * Get links for all CIS transactions for the specified employer
    **/
    GetCisTransactionsFromEmployer(req: operations.GetCisTransactionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisTransactionsFromEmployerResponse>;
    /**
     * Get links to all commentaries for the specified employee.
    **/
    GetCommentariesFromEmployee(req: operations.GetCommentariesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentariesFromEmployeeResponse>;
    /**
     * Get links to all commentaries for the specified pay run.
    **/
    GetCommentariesFromPayRun(req: operations.GetCommentariesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentariesFromPayRunResponse>;
    /**
     * Gets the specified commentary report from the employee
    **/
    GetCommentaryFromEmployee(req: operations.GetCommentaryFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentaryFromEmployeeResponse>;
    /**
     * Get commentary from payrun by specified employee.
    **/
    GetCommentaryFromPayRunByEmployee(req: operations.GetCommentaryFromPayRunByEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentaryFromPayRunByEmployeeResponse>;
    /**
     * Return the the DPS job information
    **/
    GetDpsJobInfo(req: operations.GetDpsJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobInfoResponse>;
    /**
     * Return the the DPS job progress
    **/
    GetDpsJobProgress(req: operations.GetDpsJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobProgressResponse>;
    /**
     * Return the the DPS job status
    **/
    GetDpsJobStatus(req: operations.GetDpsJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobStatusResponse>;
    /**
     * Gets all the DPS jobs
    **/
    GetDpsJobs(req: operations.GetDpsJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobsResponse>;
    /**
     * Gets the DPS message
    **/
    GetDpsMessageFromEmployer(req: operations.GetDpsMessageFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessageFromEmployerResponse>;
    /**
     * Returns the result of the executed DPS message report for the given query parameters
    **/
    GetDpsMessageReportOutput(req: operations.GetDpsMessageReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessageReportOutputResponse>;
    /**
     * Gets the DPS message links
    **/
    GetDpsMessagesFromEmployer(req: operations.GetDpsMessagesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessagesFromEmployerResponse>;
    /**
     * Returns the employee's state at the specified effective date.
    **/
    GetEmployeeByEffectiveDate(req: operations.GetEmployeeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeByEffectiveDateResponse>;
    /**
     * Gets the specified employee from employer by employee code.
    **/
    GetEmployeeFromEmployer(req: operations.GetEmployeeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeFromEmployerResponse>;
    /**
     * Get the employee revision matching the specified revision number
    **/
    GetEmployeeRevisionByNumber(req: operations.GetEmployeeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeRevisionByNumberResponse>;
    /**
     * Gets links to all employee revisions
    **/
    GetEmployeeRevisions(req: operations.GetEmployeeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeRevisionsResponse>;
    /**
     * Get the public visible employee secret object
    **/
    GetEmployeeSecret(req: operations.GetEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSecretResponse>;
    /**
     * Get all the employee secret links
    **/
    GetEmployeeSecrets(req: operations.GetEmployeeSecretsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSecretsResponse>;
    /**
     * Get links to all employees for the employer on specified effective date.
    **/
    GetEmployeesByEffectiveDate(req: operations.GetEmployeesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesByEffectiveDateResponse>;
    /**
     * Get links to all employees for the specified employer.
    **/
    GetEmployeesFromEmployer(req: operations.GetEmployeesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromEmployerResponse>;
    /**
     * Gets links to all employees included in the specified pay run.
    **/
    GetEmployeesFromPayRun(req: operations.GetEmployeesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayRunResponse>;
    /**
     * Gets links to all employee revisions that have ever existed in the specified pay schedule.
    **/
    GetEmployeesFromPaySchedule(req: operations.GetEmployeesFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleResponse>;
    /**
     * Gets links to all employee revisions in the specified pay schedule for the given effective date.
    **/
    GetEmployeesFromPayScheduleOnEffectiveDate(req: operations.GetEmployeesFromPayScheduleOnEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleOnEffectiveDateResponse>;
    /**
     * Gets the employees with the tag
    **/
    GetEmployeesWithTag(req: operations.GetEmployeesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesWithTagResponse>;
    /**
     * Get the specified employer object
    **/
    GetEmployer(req: operations.GetEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerResponse>;
    /**
     * Returns the employer's state at the specified effective date.
    **/
    GetEmployerByEffectiveDate(req: operations.GetEmployerByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerByEffectiveDateResponse>;
    /**
     * Returns all job information objects for the specified employer.
    **/
    GetEmployerJobs(req: operations.GetEmployerJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerJobsResponse>;
    /**
     * Get the employer revision matching the specified revision number
    **/
    GetEmployerRevisionByNumber(req: operations.GetEmployerRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerRevisionByNumberResponse>;
    /**
     * Gets links to all the employer revisions
    **/
    GetEmployerRevisions(req: operations.GetEmployerRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerRevisionsResponse>;
    /**
     * Get the public visible employer secret object
    **/
    GetEmployerSecret(req: operations.GetEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSecretResponse>;
    /**
     * Get all the employer secret links
    **/
    GetEmployerSecrets(req: operations.GetEmployerSecretsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSecretsResponse>;
    /**
     * Returns the result of the employer summary report for the given query parameters
    **/
    GetEmployerSummaryReportOuput(req: operations.GetEmployerSummaryReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSummaryReportOuputResponse>;
    /**
     * Gets links to all employers contained under the authorised application scope
    **/
    GetEmployers(req: operations.GetEmployersRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersResponse>;
    /**
     * Gets links to all employers contained under the authorised application scope for the specified effective date.
    **/
    GetEmployersByEffectiveDate(req: operations.GetEmployersByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersByEffectiveDateResponse>;
    /**
     * Gets the employers with the tag
    **/
    GetEmployersWithTag(req: operations.GetEmployersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersWithTagResponse>;
    /**
     * Returns the result of the executed gross to net report for the given query parameters
    **/
    GetGrossToNetReportOutput(req: operations.GetGrossToNetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetGrossToNetReportOutputResponse>;
    /**
     * Returns the health status of the application
    **/
    GetHealthCheck(config?: AxiosRequestConfig): Promise<operations.GetHealthCheckResponse>;
    /**
     * Returns the result of the executed holiday balance report for the given query parameters
    **/
    GetHolidayBalanceReportOutput(req: operations.GetHolidayBalanceReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidayBalanceReportOutputResponse>;
    /**
     * Returns the holiday scheme's state at the specified effective date.
    **/
    GetHolidaySchemeByEffectiveDate(req: operations.GetHolidaySchemeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeByEffectiveDateResponse>;
    /**
     * Gets the specified holiday scheme from employer.
    **/
    GetHolidaySchemeFromEmployer(req: operations.GetHolidaySchemeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeFromEmployerResponse>;
    /**
     * Get the holiday scheme revision matching the specified revision number
    **/
    GetHolidaySchemeRevisionByNumber(req: operations.GetHolidaySchemeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeRevisionByNumberResponse>;
    /**
     * Gets links to all the holiday scheme revisions
    **/
    GetHolidaySchemeRevisions(req: operations.GetHolidaySchemeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeRevisionsResponse>;
    /**
     * Get links to all holiday schemes for the employer on specified effective date.
    **/
    GetHolidaySchemesByEffectiveDate(req: operations.GetHolidaySchemesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesByEffectiveDateResponse>;
    /**
     * Get links to all holiday schemes for the specified employer.
    **/
    GetHolidaySchemesFromEmployer(req: operations.GetHolidaySchemesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesFromEmployerResponse>;
    /**
     * Gets the holiday scheme with the tag
    **/
    GetHolidaySchemesWithTag(req: operations.GetHolidaySchemesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesWithTagResponse>;
    /**
     * Gets the data schema for all available journal expression values. Includes table names, column names and data types.
    **/
    GetJournalExpressionSchema(req: operations.GetJournalExpressionSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalExpressionSchemaResponse>;
    /**
     * Returns the specified journal instruction from employer
    **/
    GetJournalInstructionFromEmployer(req: operations.GetJournalInstructionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionFromEmployerResponse>;
    /**
     * Retrurns the specified journal instruction from the application
    **/
    GetJournalInstructionTemplate(req: operations.GetJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionTemplateResponse>;
    /**
     * Get links to all journal instruction templates for the application
    **/
    GetJournalInstructionTemplates(req: operations.GetJournalInstructionTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionTemplatesResponse>;
    /**
     * Get links to all journal instructions for the specified employer
    **/
    GetJournalInstructionsFromEmployer(req: operations.GetJournalInstructionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionsFromEmployerResponse>;
    /**
     * Returns the specified journal Line from employer
    **/
    GetJournalLineFromEmployer(req: operations.GetJournalLineFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLineFromEmployerResponse>;
    /**
     * Get links to all journal lines for the specified employee
    **/
    GetJournalLinesFromEmployee(req: operations.GetJournalLinesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromEmployeeResponse>;
    /**
     * Get links to all journal Lines for the specified employer
    **/
    GetJournalLinesFromEmployer(req: operations.GetJournalLinesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromEmployerResponse>;
    /**
     * Get links to all journal lines for the specified pay run
    **/
    GetJournalLinesFromPayRun(req: operations.GetJournalLinesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromPayRunResponse>;
    /**
     * Get links to all journal lines for the specified sub contractor
    **/
    GetJournalLinesFromSubContractor(req: operations.GetJournalLinesFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromSubContractorResponse>;
    /**
     * Returns the result of the journal report for the given query parameters
    **/
    GetJournalReportOuput(req: operations.GetJournalReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalReportOuputResponse>;
    /**
     * Returns the result of the executed last pay date report for the given query parameters
    **/
    GetLastPayDateReportOuput(req: operations.GetLastPayDateReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetLastPayDateReportOuputResponse>;
    /**
     * Returns the result of the executed net pay report for the given query parameters
    **/
    GetNetPayReportOutput(req: operations.GetNetPayReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetNetPayReportOutputResponse>;
    /**
     * Returns the result of the executed next pay period report for the given query parameters
    **/
    GetNextPayPeriodDatesReportOutput(req: operations.GetNextPayPeriodDatesReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetNextPayPeriodDatesReportOutputResponse>;
    /**
     * Gets the nominal code
    **/
    GetNominalCodeFromEmployer(req: operations.GetNominalCodeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetNominalCodeFromEmployerResponse>;
    /**
     * Gets the nominal code links
    **/
    GetNominalCodesFromEmployer(req: operations.GetNominalCodesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetNominalCodesFromEmployerResponse>;
    /**
     * Returns the result of the executed P11 summary report for the given query parameters
    **/
    GetP11SummaryReportOutput(req: operations.GetP11SummaryReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP11SummaryReportOutputResponse>;
    /**
     * Returns the result of the executed P32 report for the given query parameters
    **/
    GetP32NetReportOutput(req: operations.GetP32NetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP32NetReportOutputResponse>;
    /**
     * Returns the result of the executed P32 summary report for the given query parameters
    **/
    GetP32SummaryNetReportOutput(req: operations.GetP32SummaryNetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP32SummaryNetReportOutputResponse>;
    /**
     * Returns the result of the executed P45 report for the given query parameters
    **/
    GetP45ReportOutput(req: operations.GetP45ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP45ReportOutputResponse>;
    /**
     * Returns the result of the executed P60 report for the given query parameters
    **/
    GetP60ReportOutput(req: operations.GetP60ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP60ReportOutputResponse>;
    /**
     * Returns the result of the executed PAPDIS report. PAPDIS is a free and open data interface standard designed to allow payroll and middleware software developers to create a file that can be used by pension providers to exchange data. http://www.papdis.org
    **/
    GetPapdisReportOuput(req: operations.GetPapdisReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPapdisReportOuputResponse>;
    /**
     * Returns the result of the executed PASS report. PASS stands for Payroll and Systemsync. PASS 1.1 is an extension of the PAPDIS V1.1 schema. https://pensionsynckb.systemsyncsolutions.com/display/PKB/PASS+1.1
    **/
    GetPassReportOuput(req: operations.GetPassReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPassReportOuputResponse>;
    /**
     * Gets the pay code revision for the specified effective date
    **/
    GetPayCodeByEffectiveDate(req: operations.GetPayCodeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeByEffectiveDateResponse>;
    /**
     * Returns the specified pay code from the employer
    **/
    GetPayCodeFromEmployer(req: operations.GetPayCodeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeFromEmployerResponse>;
    /**
     * Get the pay code revision matching the specified revision number
    **/
    GetPayCodeRevisionByNumber(req: operations.GetPayCodeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeRevisionByNumberResponse>;
    /**
     * Returns links to all revisions of the pay code
    **/
    GetPayCodeRevisions(req: operations.GetPayCodeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeRevisionsResponse>;
    /**
     * Gets the effective pay code revision for the specified date
    **/
    GetPayCodesByEffectiveDate(req: operations.GetPayCodesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesByEffectiveDateResponse>;
    /**
     * Get links to all the pay codes for the specified employer
    **/
    GetPayCodesFromEmployer(req: operations.GetPayCodesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesFromEmployerResponse>;
    /**
     * Get the pay codes that share the specified nominal code
    **/
    GetPayCodesFromNominalCode(req: operations.GetPayCodesFromNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesFromNominalCodeResponse>;
    /**
     * Gets the pay codes with the tag
    **/
    GetPayCodesWithTag(req: operations.GetPayCodesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesWithTagResponse>;
    /**
     * Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.
    **/
    GetPayDashboardPayslipReportOuput(req: operations.GetPayDashboardPayslipReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPayDashboardPayslipReportOuputResponse>;
    /**
     * Returns the specified pay instruction from employee
    **/
    GetPayInstructionFromEmployee(req: operations.GetPayInstructionFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionFromEmployeeResponse>;
    /**
     * Get links to all pay instructions for the specified employee
    **/
    GetPayInstructionsFromEmployee(req: operations.GetPayInstructionsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionsFromEmployeeResponse>;
    /**
     * Gets the pay instructions with the tag
    **/
    GetPayInstructionsWithTag(req: operations.GetPayInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionsWithTagResponse>;
    /**
     * Returns the specified pay line from employee
    **/
    GetPayLineFromEmployee(req: operations.GetPayLineFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLineFromEmployeeResponse>;
    /**
     * Get links to all pay lines for the specified employee
    **/
    GetPayLinesFromEmployee(req: operations.GetPayLinesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesFromEmployeeResponse>;
    /**
     * Gets the pay line with the tag
    **/
    GetPayLinesWithTag(req: operations.GetPayLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesWithTagResponse>;
    /**
     * Returns the pay run from the pay schedule
    **/
    GetPayRunFromPaySchedule(req: operations.GetPayRunFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunFromPayScheduleResponse>;
    /**
     * Return the the payrun job information
    **/
    GetPayRunJobInfo(req: operations.GetPayRunJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobInfoResponse>;
    /**
     * Return the the payrun job progress
    **/
    GetPayRunJobProgress(req: operations.GetPayRunJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobProgressResponse>;
    /**
     * Return the the payrun job status
    **/
    GetPayRunJobStatus(req: operations.GetPayRunJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobStatusResponse>;
    /**
     * Gets all the pay run jobs
    **/
    GetPayRunJobs(req: operations.GetPayRunJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobsResponse>;
    /**
     * Get links to all pay runs for the specified employee.
    **/
    GetPayRunsFromEmployee(req: operations.GetPayRunsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromEmployeeResponse>;
    /**
     * Get links to all pay runs for the specified pay schedule
    **/
    GetPayRunsFromPaySchedule(req: operations.GetPayRunsFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromPayScheduleResponse>;
    /**
     * Gets the pay runs with the tag
    **/
    GetPayRunsWithTag(req: operations.GetPayRunsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsWithTagResponse>;
    /**
     * Returns the specified pay schedule object from employer
    **/
    GetPayScheduleFromEmployer(req: operations.GetPayScheduleFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayScheduleFromEmployerResponse>;
    /**
     * Get links to all pay schedules for the specified employer
    **/
    GetPaySchedulesFromEmployer(req: operations.GetPaySchedulesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPaySchedulesFromEmployerResponse>;
    /**
     * Gets the pay schedules with the tag
    **/
    GetPaySchedulesWithTag(req: operations.GetPaySchedulesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPaySchedulesWithTagResponse>;
    /**
     * Returns the result of the executed verbose payslip report for the given query parameters
    **/
    GetPayslip3ReportOutput(req: operations.GetPayslip3ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetPayslip3ReportOutputResponse>;
    /**
     * Returns the penion's state at the specified effective date.
    **/
    GetPensionByEffectiveDate(req: operations.GetPensionByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionByEffectiveDateResponse>;
    /**
     * Gets the specified pension from employer by pension code.
    **/
    GetPensionFromEmployer(req: operations.GetPensionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionFromEmployerResponse>;
    /**
     * Returns the result of the executed pension liability report for the given query parameters
    **/
    GetPensionLiabilityReportOutput(req: operations.GetPensionLiabilityReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionLiabilityReportOutputResponse>;
    /**
     * Get the pension revision matching the specified revision number
    **/
    GetPensionRevisionByNumber(req: operations.GetPensionRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionRevisionByNumberResponse>;
    /**
     * Returns links to all revisions of the pension
    **/
    GetPensionRevisions(req: operations.GetPensionRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionRevisionsResponse>;
    /**
     * Get links to all pensions for the employer on specified effective date.
    **/
    GetPensionsByEffectiveDate(req: operations.GetPensionsByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionsByEffectiveDateResponse>;
    /**
     * Get links to all pensions for the specified employer.
    **/
    GetPensionsFromEmployer(req: operations.GetPensionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionsFromEmployerResponse>;
    /**
     * Gets the permission object for application
    **/
    GetPermission(req: operations.GetPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionResponse>;
    /**
     * Gets all permission objects for application
    **/
    GetPermissions(req: operations.GetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionsResponse>;
    /**
     * Get the results for the specified query
    **/
    GetQueryResponse(req: operations.GetQueryResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResponseResponse>;
    /**
     * Returns the specified report definition from the authroised application
    **/
    GetReportDefinitionFromApplication(req: operations.GetReportDefinitionFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetReportDefinitionFromApplicationResponse>;
    /**
     * Get links to all saved report definitions under authorised application
    **/
    GetReportDefinitionsFromApplication(req: operations.GetReportDefinitionsFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetReportDefinitionsFromApplicationResponse>;
    /**
     * Returns the specified pay line from employee
    **/
    GetReportLineFromEmployer(req: operations.GetReportLineFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLineFromEmployerResponse>;
    /**
     * Get links to all report lines for the specified employee
    **/
    GetReportLinesFromEmployer(req: operations.GetReportLinesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLinesFromEmployerResponse>;
    /**
     * Returns all report lines associated with the specified pay run
    **/
    GetReportLinesFromPayRun(req: operations.GetReportLinesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLinesFromPayRunResponse>;
    /**
     * Returns the result of the executed report definition
    **/
    GetReportOutput(req: operations.GetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetReportOutputResponse>;
    /**
     * Returns the specified pay instruction from employee
    **/
    GetReportingInstructionFromEmployer(req: operations.GetReportingInstructionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportingInstructionFromEmployerResponse>;
    /**
     * Get links to all pay instructions for the specified employee
    **/
    GetReportingInstructionsFromEmployer(req: operations.GetReportingInstructionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportingInstructionsFromEmployerResponse>;
    /**
     * Return the the RTI job information
    **/
    GetRtiJobInfo(req: operations.GetRtiJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobInfoResponse>;
    /**
     * Return the the RTI job progress
    **/
    GetRtiJobProgress(req: operations.GetRtiJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobProgressResponse>;
    /**
     * Return the the RTI job status
    **/
    GetRtiJobStatus(req: operations.GetRtiJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobStatusResponse>;
    /**
     * Gets all the RTI jobs
    **/
    GetRtiJobs(req: operations.GetRtiJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobsResponse>;
    /**
     * Returns the specified RTI transaction
    **/
    GetRtiTransactionFromEmployer(req: operations.GetRtiTransactionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionFromEmployerResponse>;
    /**
     * Get links for all RTI transactions for the specified employer
    **/
    GetRtiTransactionsFromEmployer(req: operations.GetRtiTransactionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionsFromEmployerResponse>;
    /**
     * Gets the RTI transactions with the tag
    **/
    GetRtiTransactionsWithTag(req: operations.GetRtiTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionsWithTagResponse>;
    /**
     * Returns the XSD schema for the specified data type
    **/
    GetSchema(req: operations.GetSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaResponse>;
    /**
     * Returns a collection of links to all the available data object schemas
    **/
    GetSchemas(req: operations.GetSchemasRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemasResponse>;
    /**
     * Returns the sub contractor's state at the specified effective date.
    **/
    GetSubContractorByEffectiveDate(req: operations.GetSubContractorByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorByEffectiveDateResponse>;
    /**
     * Gets the specified sub contractor from employer.
    **/
    GetSubContractorFromEmployer(req: operations.GetSubContractorFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorFromEmployerResponse>;
    /**
     * Get the sub contractor revision matching the specified revision number
    **/
    GetSubContractorRevisionByNumber(req: operations.GetSubContractorRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorRevisionByNumberResponse>;
    /**
     * Gets links to all the sub contractor revisions
    **/
    GetSubContractorRevisions(req: operations.GetSubContractorRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorRevisionsResponse>;
    /**
     * Get links to all sub contractors for the employer on specified effective date.
    **/
    GetSubContractorsByEffectiveDate(req: operations.GetSubContractorsByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsByEffectiveDateResponse>;
    /**
     * Get links to all sub contractors for the specified employer.
    **/
    GetSubContractorsFromEmployer(req: operations.GetSubContractorsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsFromEmployerResponse>;
    /**
     * Gets the sub contractor with the tag
    **/
    GetSubContractorsWithTag(req: operations.GetSubContractorsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsWithTagResponse>;
    /**
     * Gets the tag from the CIS instruction
    **/
    GetTagFromCisInstruction(req: operations.GetTagFromCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisInstructionResponse>;
    /**
     * Gets the tag from the CIS line
    **/
    GetTagFromCisLine(req: operations.GetTagFromCisLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisLineResponse>;
    /**
     * Gets the tag from the CIS line type
    **/
    GetTagFromCisLineType(req: operations.GetTagFromCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisLineTypeResponse>;
    /**
     * Gets the tag from the employee
    **/
    GetTagFromEmployee(req: operations.GetTagFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployeeResponse>;
    /**
     * Gets the tag from the employee revision
    **/
    GetTagFromEmployeeRevision(req: operations.GetTagFromEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployeeRevisionResponse>;
    /**
     * Gets the tag from the employer
    **/
    GetTagFromEmployer(req: operations.GetTagFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployerResponse>;
    /**
     * Gets the tag from the employer revision
    **/
    GetTagFromEmployerRevision(req: operations.GetTagFromEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployerRevisionResponse>;
    /**
     * Gets the tag from the holiday scheme
    **/
    GetTagFromHolidayScheme(req: operations.GetTagFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeResponse>;
    /**
     * Gets the tag from the holiday scheme revision
    **/
    GetTagFromHolidaySchemeRevision(req: operations.GetTagFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeRevisionResponse>;
    /**
     * Gets a tag from the journal line
    **/
    GetTagFromJournalLine(req: operations.GetTagFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromJournalLineResponse>;
    /**
     * Gets the tag from the pay code
    **/
    GetTagFromPayCode(req: operations.GetTagFromPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayCodeResponse>;
    /**
     * Gets the tag from the pay instruction
    **/
    GetTagFromPayInstruction(req: operations.GetTagFromPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayInstructionResponse>;
    /**
     * Gets the tag from the pay line
    **/
    GetTagFromPayLine(req: operations.GetTagFromPayLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayLineResponse>;
    /**
     * Gets the tag from the pay run
    **/
    GetTagFromPayRun(req: operations.GetTagFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayRunResponse>;
    /**
     * Gets the tag from the pay schedule
    **/
    GetTagFromPaySchedule(req: operations.GetTagFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayScheduleResponse>;
    /**
     * Gets the tag from the RTI transaction
    **/
    GetTagFromRtiTransaction(req: operations.GetTagFromRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromRtiTransactionResponse>;
    /**
     * Gets the tag from the sub contractor
    **/
    GetTagFromSubContractor(req: operations.GetTagFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromSubContractorResponse>;
    /**
     * Gets the tag from the sub contractor revision
    **/
    GetTagFromSubContractorRevision(req: operations.GetTagFromSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromSubContractorRevisionResponse>;
    /**
     * Gets a tag from the third party transaction
    **/
    GetTagFromThirdPartyTransaction(req: operations.GetTagFromThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromThirdPartyTransactionResponse>;
    /**
     * Gets a tag from the user
    **/
    GetTagFromUser(req: operations.GetTagFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromUserResponse>;
    /**
     * Gets all the tags from the CIS instruction
    **/
    GetTagsFromCisInstruction(req: operations.GetTagsFromCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisInstructionResponse>;
    /**
     * Gets all the tags from the CIS line
    **/
    GetTagsFromCisLine(req: operations.GetTagsFromCisLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisLineResponse>;
    /**
     * Gets all the tags from the CIS line type
    **/
    GetTagsFromCisLineType(req: operations.GetTagsFromCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisLineTypeResponse>;
    /**
     * Gets all the tags from the employee
    **/
    GetTagsFromEmployee(req: operations.GetTagsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployeeResponse>;
    /**
     * Gets all the tags from the employee revision
    **/
    GetTagsFromEmployeeRevision(req: operations.GetTagsFromEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployeeRevisionResponse>;
    /**
     * Gets all the tags from the employer
    **/
    GetTagsFromEmployer(req: operations.GetTagsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployerResponse>;
    /**
     * Gets all the tags from the employer revision
    **/
    GetTagsFromEmployerRevision(req: operations.GetTagsFromEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployerRevisionResponse>;
    /**
     * Gets all the tags from the holiday scheme
    **/
    GetTagsFromHolidayScheme(req: operations.GetTagsFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeResponse>;
    /**
     * Gets all the tags from the holiday scheme revision
    **/
    GetTagsFromHolidaySchemeRevision(req: operations.GetTagsFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeRevisionResponse>;
    /**
     * Gets all tags from the journal line
    **/
    GetTagsFromJournalLine(req: operations.GetTagsFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromJournalLineResponse>;
    /**
     * Gets all the tags from the pay code
    **/
    GetTagsFromPayCode(req: operations.GetTagsFromPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayCodeResponse>;
    /**
     * Gets all the tags from the pay instruction
    **/
    GetTagsFromPayInstruction(req: operations.GetTagsFromPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayInstructionResponse>;
    /**
     * Gets all the tags from the pay line
    **/
    GetTagsFromPayLine(req: operations.GetTagsFromPayLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayLineResponse>;
    /**
     * Gets all the tags from the pay run
    **/
    GetTagsFromPayRun(req: operations.GetTagsFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayRunResponse>;
    /**
     * Gets all the tags from the pay schedule
    **/
    GetTagsFromPaySchedule(req: operations.GetTagsFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayScheduleResponse>;
    /**
     * Gets all the tags from the RTI transaction
    **/
    GetTagsFromRtiTransaction(req: operations.GetTagsFromRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromRtiTransactionResponse>;
    /**
     * Gets all the tags from the sub contractor
    **/
    GetTagsFromSubContractor(req: operations.GetTagsFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromSubContractorResponse>;
    /**
     * Gets all the tags from the sub contractor revision
    **/
    GetTagsFromSubContractorRevision(req: operations.GetTagsFromSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromSubContractorRevisionResponse>;
    /**
     * Gets all tags from the third party transaction
    **/
    GetTagsFromThirdPartyTransaction(req: operations.GetTagsFromThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromThirdPartyTransactionResponse>;
    /**
     * Gets all tags from the user
    **/
    GetTagsFromUser(req: operations.GetTagsFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromUserResponse>;
    /**
     * Returns a template instance of the specified data type
    **/
    GetTemplateModel(req: operations.GetTemplateModelRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateModelResponse>;
    /**
     * Returns a collection of links to all the available data object templates
    **/
    GetTemplates(req: operations.GetTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplatesResponse>;
    /**
     * Return the the Third Party job information
    **/
    GetThirdPartyJobInfo(req: operations.GetThirdPartyJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobInfoResponse>;
    /**
     * Return the the Third Party job progress
    **/
    GetThirdPartyJobProgress(req: operations.GetThirdPartyJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobProgressResponse>;
    /**
     * Return the the Third Party job status
    **/
    GetThirdPartyJobStatus(req: operations.GetThirdPartyJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobStatusResponse>;
    /**
     * Gets all the Third Party jobs
    **/
    GetThirdPartyJobs(req: operations.GetThirdPartyJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobsResponse>;
    /**
     * Get a third party transaction
    **/
    GetThirdPartyTransaction(req: operations.GetThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyTransactionResponse>;
    /**
     * Get all third party transaction links
    **/
    GetThirdPartyTransactions(req: operations.GetThirdPartyTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyTransactionsResponse>;
    /**
     * Returns the specified transform definition from the authroised application
    **/
    GetTransformDefinitionFromApplication(req: operations.GetTransformDefinitionFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetTransformDefinitionFromApplicationResponse>;
    /**
     * Get links to all saved transform definitions under authorised application
    **/
    GetTransformDefinitionsFromApplication(req: operations.GetTransformDefinitionsFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetTransformDefinitionsFromApplicationResponse>;
    /**
     * Gets the user object for application
    **/
    GetUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * Gets all user objects for application
    **/
    GetUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * Update an existing CIS instruction object
    **/
    PatchCisInstruction(req: operations.PatchCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PatchCisInstructionResponse>;
    /**
     * Patches the specified DPS message with the supplied values
    **/
    PatchDpsMessage(req: operations.PatchDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PatchDpsMessageResponse>;
    /**
     * Patches the specified employee with the supplied values
    **/
    PatchEmployee(req: operations.PatchEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.PatchEmployeeResponse>;
    /**
     * Patches the specified employer with the supplied values
    **/
    PatchEmployer(req: operations.PatchEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PatchEmployerResponse>;
    /**
     * Patches the specified holiday scheme with the supplied values
    **/
    PatchHolidayScheme(req: operations.PatchHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.PatchHolidaySchemeResponse>;
    /**
     * Patches the specified pay code object with the supplied values
    **/
    PatchPayCode(req: operations.PatchPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PatchPayCodeResponse>;
    /**
     * Patches the specified pay instruction with the supplied values
    **/
    PatchPayInstruction(req: operations.PatchPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPayInstructionResponse>;
    /**
     * Patches the specified pension with the supplied values
    **/
    PatchPension(req: operations.PatchPensionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPensionResponse>;
    /**
     * Patch the permission object at the specified resource location
    **/
    PatchPermission(req: operations.PatchPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPermissionResponse>;
    /**
     * Patches the specified sub contractor with the supplied values
    **/
    PatchSubContractor(req: operations.PatchSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PatchSubContractorResponse>;
    /**
     * Patch the user object at the specified resource location
    **/
    PatchUser(req: operations.PatchUserRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserResponse>;
    /**
     * Create a new CIS instruction object
    **/
    PostCisInstructionIntoSubContractor(req: operations.PostCisInstructionIntoSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PostCisInstructionIntoSubContractorResponse>;
    /**
     * Create a new CIS line type object
    **/
    PostCisLineTypeIntoEmployer(req: operations.PostCisLineTypeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostCisLineTypeIntoEmployerResponse>;
    /**
     * Insert new DPS message
    **/
    PostDpsMessage(req: operations.PostDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PostDpsMessageResponse>;
    /**
     * Create a new employee object
    **/
    PostEmployeeIntoEmployer(req: operations.PostEmployeeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployeeIntoEmployerResponse>;
    /**
     * Create new employee secret using auto generated resource location key
    **/
    PostEmployeeSecret(req: operations.PostEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployeeSecretResponse>;
    /**
     * Create a new employer object
    **/
    PostEmployer(req: operations.PostEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployerResponse>;
    /**
     * Create new employer secret using auto generated resource location key
    **/
    PostEmployerSecret(req: operations.PostEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployerSecretResponse>;
    /**
     * Create a new holiday scheme object
    **/
    PostHolidaySchemeIntoEmployer(req: operations.PostHolidaySchemeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostHolidaySchemeIntoEmployerResponse>;
    /**
     * Creates a new Journal instruction object
    **/
    PostJournalInstruction(req: operations.PostJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostJournalInstructionResponse>;
    /**
     * Creates a new Journal instruction teamplte object
    **/
    PostJournalInstructionTemplate(req: operations.PostJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PostJournalInstructionTemplateResponse>;
    /**
     * Creates a new auto enrolment assessment for the employee. Used to insert historical assessments
    **/
    PostNewAeAssessment(req: operations.PostNewAeAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.PostNewAeAssessmentResponse>;
    /**
     * Adds a new Batch job to the queue and returns the job info
    **/
    PostNewBatchJob(req: operations.PostNewBatchJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewBatchJobResponse>;
    /**
     * Adds a new CIS job to the queue and returns the job info
    **/
    PostNewCisJob(req: operations.PostNewCisJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewCisJobResponse>;
    /**
     * Creates the new DPS job to the queue and returns the job info
    **/
    PostNewDpsJob(req: operations.PostNewDpsJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewDpsJobResponse>;
    /**
     * Creates the new pay run job to the queue and returns the job info
    **/
    PostNewPayRunJob(req: operations.PostNewPayRunJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewPayRunJobResponse>;
    /**
     * Creates the new RTI job to the queue and returns the job info
    **/
    PostNewRtiJob(req: operations.PostNewRtiJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewRtiJobResponse>;
    /**
     * Adds a new Third Party job to the queue and returns the job info
    **/
    PostNewThirdPartyJob(req: operations.PostNewThirdPartyJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewThirdPartyJobResponse>;
    /**
     * Inserts a new nominal code
    **/
    PostNominalCode(req: operations.PostNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.PostNominalCodeResponse>;
    /**
     * Create a new pay code object
    **/
    PostPayCode(req: operations.PostPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PostPayCodeResponse>;
    /**
     * Creates a new pay instruction object
    **/
    PostPayInstruction(req: operations.PostPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostPayInstructionResponse>;
    /**
     * Create a new pay schedule object
    **/
    PostPaySchedule(req: operations.PostPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PostPayScheduleResponse>;
    /**
     * Create a new pension object
    **/
    PostPensionIntoEmployer(req: operations.PostPensionIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostPensionIntoEmployerResponse>;
    /**
     * Post the new permission object into the application
    **/
    PostPermission(req: operations.PostPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PostPermissionResponse>;
    /**
     * Creates a new report defintion object
    **/
    PostReportDefinition(req: operations.PostReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PostReportDefinitionResponse>;
    /**
     * Creates a new reporting instruction object
    **/
    PostReportingInstruction(req: operations.PostReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostReportingInstructionResponse>;
    /**
     * Create a new sub contractor object
    **/
    PostSubContractorIntoEmployer(req: operations.PostSubContractorIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostSubContractorIntoEmployerResponse>;
    /**
     * Creates a new transform defintion object
    **/
    PostTransformDefinition(req: operations.PostTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PostTransformDefinitionResponse>;
    /**
     * Post the new user object into the application
    **/
    PostUser(req: operations.PostUserRequest, config?: AxiosRequestConfig): Promise<operations.PostUserResponse>;
    /**
     * Insert or update existing CIS instruction object
    **/
    PutCisInstructionIntoSubContractor(req: operations.PutCisInstructionIntoSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PutCisInstructionIntoSubContractorResponse>;
    /**
     * Inserts a new tag on the CIS instruction
    **/
    PutCisInstructionTag(req: operations.PutCisInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisInstructionTagResponse>;
    /**
     * Inserts a new tag on the CIS line
    **/
    PutCisLineTag(req: operations.PutCisLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTagResponse>;
    /**
     * Updates the existing specified CIS line type object
    **/
    PutCisLineTypeIntoEmployer(req: operations.PutCisLineTypeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTypeIntoEmployerResponse>;
    /**
     * Inserts a new tag on the CIS line type
    **/
    PutCisLineTypeTag(req: operations.PutCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTypeTagResponse>;
    /**
     * Puts the DPS message
    **/
    PutDpsMessage(req: operations.PutDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PutDpsMessageResponse>;
    /**
     * Updates the existing specified employee object
    **/
    PutEmployeeIntoEmployer(req: operations.PutEmployeeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeIntoEmployerResponse>;
    /**
     * Create / update an employee secret at the given resource location
    **/
    PutEmployeeSecret(req: operations.PutEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeSecretResponse>;
    /**
     * Inserts a new tag on the employee
    **/
    PutEmployeeTag(req: operations.PutEmployeeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeTagResponse>;
    /**
     * Updates the existing specified employer object
    **/
    PutEmployer(req: operations.PutEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerResponse>;
    /**
     * Create / update an employer secret at the given resource location
    **/
    PutEmployerSecret(req: operations.PutEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerSecretResponse>;
    /**
     * Inserts a new tag on the employer
    **/
    PutEmployerTag(req: operations.PutEmployerTagRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerTagResponse>;
    /**
     * Updates the existing specified holiday scheme object
    **/
    PutHolidaySchemeIntoEmployer(req: operations.PutHolidaySchemeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutHolidaySchemeIntoEmployerResponse>;
    /**
     * Inserts a new tag on the holiday scheme
    **/
    PutHolidaySchemeTag(req: operations.PutHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutHolidaySchemeTagResponse>;
    /**
     * Updates the existing specified Journal instruction object
    **/
    PutJournalInstruction(req: operations.PutJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalInstructionResponse>;
    /**
     * Updates the existing specified Journal instruction template object
    **/
    PutJournalInstructionTemplate(req: operations.PutJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalInstructionTemplateResponse>;
    /**
     * Inserts a tag on the journal line
    **/
    PutJournalLineTag(req: operations.PutJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalLineTagResponse>;
    /**
     * Creates a new auto enrolment assessment for the employee. Used to insert historical assessments
    **/
    PutNewAeAssessment(req: operations.PutNewAeAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.PutNewAeAssessmentResponse>;
    /**
     * Inserts a new nominal code at the specified resource location
    **/
    PutNominalCode(req: operations.PutNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutNominalCodeResponse>;
    /**
     * Updates the existing specified pay code object
    **/
    PutPayCode(req: operations.PutPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutPayCodeResponse>;
    /**
     * Inserts a new tag on the pay code
    **/
    PutPayCodeTag(req: operations.PutPayCodeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayCodeTagResponse>;
    /**
     * Updates the existing specified pay instruction object
    **/
    PutPayInstruction(req: operations.PutPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutPayInstructionResponse>;
    /**
     * Inserts a new tag on the pay instruction
    **/
    PutPayInstructionTag(req: operations.PutPayInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayInstructionTagResponse>;
    /**
     * Inserts a new tag on the pay line
    **/
    PutPayLineTag(req: operations.PutPayLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayLineTagResponse>;
    /**
     * Inserts a new tag on the pay run
    **/
    PutPayRunTag(req: operations.PutPayRunTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayRunTagResponse>;
    /**
     * Updates the existing specified pay schedule object
    **/
    PutPaySchedule(req: operations.PutPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PutPayScheduleResponse>;
    /**
     * Inserts a new tag on the pay schedule
    **/
    PutPayScheduleTag(req: operations.PutPayScheduleTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayScheduleTagResponse>;
    /**
     * Updates existing or inserts the specified pension object
    **/
    PutPensionIntoEmployer(req: operations.PutPensionIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutPensionIntoEmployerResponse>;
    /**
     * Puts the permission object into the specified resource location
    **/
    PutPermission(req: operations.PutPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PutPermissionResponse>;
    /**
     * Updates the existing specified report definition object
    **/
    PutReportDefinition(req: operations.PutReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportDefinitionResponse>;
    /**
     * Updates the existing specified reporting instruction object
    **/
    PutReportingInstruction(req: operations.PutReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportingInstructionResponse>;
    /**
     * Inserts a new tag on the RTI transaction
    **/
    PutRtiTransactionTag(req: operations.PutRtiTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutRtiTransactionTagResponse>;
    /**
     * Updates the existing specified sub contractor object
    **/
    PutSubContractorIntoEmployer(req: operations.PutSubContractorIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutSubContractorIntoEmployerResponse>;
    /**
     * Inserts a new tag on the sub contractor
    **/
    PutSubContractorTag(req: operations.PutSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.PutSubContractorTagResponse>;
    /**
     * Inserts a tag on the third party transaction
    **/
    PutThirdPartyTransactionTag(req: operations.PutThirdPartyTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutThirdPartyTransactionTagResponse>;
    /**
     * Updates the existing specified transform definition object
    **/
    PutTransformDefinition(req: operations.PutTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutTransformDefinitionResponse>;
    /**
     * Puts the user object into the specified resource location
    **/
    PutUser(req: operations.PutUserRequest, config?: AxiosRequestConfig): Promise<operations.PutUserResponse>;
    /**
     * Inserts a tag on the user
    **/
    PutUserTag(req: operations.PutUserTagRequest, config?: AxiosRequestConfig): Promise<operations.PutUserTagResponse>;
}
export {};
