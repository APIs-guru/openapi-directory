# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DeleteAeAssessmentRequest{
        PathParams: operations.DeleteAeAssessmentPathParams{
            AeAssessmentID: "quae",
            EmployeeID: "sed",
            EmployerID: "deserunt",
        },
        Headers: operations.DeleteAeAssessmentHeaders{
            APIVersion: "rerum",
            Authorization: "saepe",
        },
    }
    
    res, err := s.Sdk.DeleteAeAssessment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteAeAssessment` - Delete auto enrolment assessment
* `DeleteBatchJob` - Delete the Batch job
* `DeleteCisInstruction` - Delete a CIS instruction
* `DeleteCisInstructionTag` - Delete CIS instruction tag
* `DeleteCisJob` - Delete the CIS job
* `DeleteCisLine` - Delete a CIS line
* `DeleteCisLineTag` - Delete CIS line tag
* `DeleteCisLineType` - Delete an CIS line type
* `DeleteCisLineTypeTag` - Delete CIS line type tag
* `DeleteCisTransaction` - Delete the CIS transaction
* `DeleteDpsJob` - Delete the DPS job
* `DeleteDpsMessage` - Deletes the DPS message
* `DeleteEmployee` - Delete an Employee
* `DeleteEmployeeRevision` - Delete an Employee revision matching the specified revision date.
* `DeleteEmployeeRevisionByNumber` - Delete an Employee revision matching the specified revision number.
* `DeleteEmployeeSecret` - Deletes employee secret
* `DeleteEmployeeTag` - Delete employee tag
* `DeleteEmployer` - Delete an Employer
* `DeleteEmployerRevision` - Delete an Employer revision matching the specified revision date.
* `DeleteEmployerRevisionByNumber` - Delete an Employer revision matching the specified revision number.
* `DeleteEmployerSecret` - Deletes employer secret
* `DeleteEmployerTag` - Delete employer tag
* `DeleteHolidayScheme` - Delete an holiday scheme
* `DeleteHolidaySchemeRevision` - Delete an holiday scheme revision matching the specified revision date.
* `DeleteHolidaySchemeRevisionByNumber` - Delete an HolidayScheme revision matching the specified revision number.
* `DeleteHolidaySchemeTag` - Delete holiday scheme tag
* `DeleteJournalInstruction` - Deletes a Journal instruction
* `DeleteJournalInstructionTemplate` - Deletes a Journal instruction template
* `DeleteJournalLineTag` - Delete journal line tag
* `DeleteNominalCode` - Deletes the nominal codes
* `DeletePayCode` - Deletes a pay code
* `DeletePayCodeRevision` - Deletes a pay code revision
* `DeletePayCodeRevisionByNumber` - Delete an PayCode revision matching the specified revision number.
* `DeletePayCodeTag` - Delete pay code tag
* `DeletePayInstruction` - Deletes a pay instruction
* `DeletePayInstructionTag` - Delete pay instruction tag
* `DeletePayLineTag` - Delete pay line tag
* `DeletePayRun` - Deletes a pay run
* `DeletePayRunEmployee` - Deletes a pay run employee
* `DeletePayRunJob` - Delete the pay run job
* `DeletePayRunTag` - Delete pay run tag
* `DeletePaySchedule` - Deletes a pay schedule
* `DeletePayScheduleTag` - Delete pay schedule tag
* `DeletePension` - Delete a Pension
* `DeletePensionRevision` - Delete an Pension revision matching the specified revision date.
* `DeletePensionRevisionByNumber` - Delete an Pension revision matching the specified revision number.
* `DeletePermission` - Deletes the permission object
* `DeleteReportDefinition` - Deletes a report definition
* `DeleteReportingInstruction` - Deletes a reporting instruction
* `DeleteRtiJob` - Delete the RTI job
* `DeleteRtiTransaction` - Delete the RTI transaction
* `DeleteRtiTransactionTag` - Delete RTI transaction tag
* `DeleteSubContractor` - Delete an sub contractor
* `DeleteSubContractorRevision` - Delete an sub contractor revision matching the specified revision date.
* `DeleteSubContractorRevisionByNumber` - Delete an SubContractor revision matching the specified revision number.
* `DeleteSubContractorTag` - Delete sub contractor tag
* `DeleteThirdPartyJob` - Delete the Third Party job
* `DeleteThirdPartyTransaction` - Delete third party transaction
* `DeleteThirdPartyTransactionTag` - Delete third party transaction tag
* `DeleteTransformDefinition` - Deletes a transform definition
* `DeleteUser` - Deletes the user object
* `DeleteUserTag` - Delete user tag
* `GetAeAssessmentFromEmployee` - Get the auto enrolment assessment
* `GetAeAssessmentsFromEmployee` - Get the auto enrolment assessments
* `GetAeAssessmentsFromPayRun` - Get the auto enrolment assessments
* `GetActivePayInstructionsReportOutput` - Runs the active pay instructions report
* `GetAllCisInstructionTags` - Get all CIS instruction tags
* `GetAllCisLineTags` - Get all CIS line tags
* `GetAllCisLineTypeTags` - Get all CIS line type tags
* `GetAllEmployeeTags` - Get all employee tags
* `GetAllEmployerTags` - Get all employer tags
* `GetAllHolidaySchemeTags` - Get all holiday scheme tags
* `GetAllJournalLineTags` - Get all journal line tags
* `GetAllJournalLinesWithTag` - Get links to tagged journal lines
* `GetAllPayCodeTags` - Get all pay code tags
* `GetAllPayInstructionTags` - Get all pay instruction tags
* `GetAllPayLineTags` - Get all pay line tags
* `GetAllPayRunTags` - Get all pay run tags
* `GetAllPayScheduleTags` - Get all pay schedule tags
* `GetAllRtiTransactionTags` - Get all RTI transaction tags
* `GetAllSubContractorTags` - Get all sub contractor tags
* `GetAllThirdPartyTransactionTags` - Get all third party transaction tags
* `GetAllThirdPartyTransactionsWithTag` - Get links to tagged third party transactions
* `GetAllUserTags` - Get all user tags
* `GetAllUsersWithTag` - Get links to tagged users
* `GetAoeLiabilityReportOuput` - Runs the AOE liability report
* `GetBatchJobInfo` - Get the Batch job information
* `GetBatchJobProgress` - Get the Batch job progress
* `GetBatchJobStatus` - Get the Batch job status
* `GetBatchJobs` - Get all Batch jobs
* `GetCisInstructionFromSubContractor` - Get CIS instruction from sub contractor
* `GetCisInstructionsFromSubContractor` - Get CIS instructions from sub contractor.
* `GetCisInstructionsWithTag` - Get CIS instructions with tag
* `GetCisJobInfo` - Get the CIS job information
* `GetCisJobProgress` - Get the CIS job progress
* `GetCisJobStatus` - Get the CIS job status
* `GetCisJobs` - Get all CIS jobs
* `GetCisLineFromSubContractor` - Get CIS line from sub contractor
* `GetCisLineTypeFromEmployer` - Get CIS line type from employer
* `GetCisLineTypesFromEmployer` - Get CIS line types from employer.
* `GetCisLineTypesWithTag` - Get CIS line types with tag
* `GetCisLinesFromSubContractor` - Get CIS lines from sub contractor.
* `GetCisLinesWithTag` - Get CIS lines with tag
* `GetCisTransactionFromEmployer` - Get the CIS transaction
* `GetCisTransactionsFromEmployer` - Get all CIS transactions for the employer
* `GetCommentariesFromEmployee` - Get links to all commentaries for the specified employee
* `GetCommentariesFromPayRun` - Get links to all commentaries for the specified pay run
* `GetCommentaryFromEmployee` - Get commentary from employee
* `GetCommentaryFromPayRunByEmployee` - Get commentary from payrun by specified employee.
* `GetDpsJobInfo` - Get the DPS job information
* `GetDpsJobProgress` - Get the DPS job progress
* `GetDpsJobStatus` - Get the DPS job status
* `GetDpsJobs` - Get all DPS jobs
* `GetDpsMessageFromEmployer` - Gets the DPS message
* `GetDpsMessageReportOutput` - Runs the DPS message report
* `GetDpsMessagesFromEmployer` - Gets the DPS messages
* `GetEmployeeByEffectiveDate` - Get employee by effective date.
* `GetEmployeeFromEmployer` - Get employee from employer
* `GetEmployeeRevisionByNumber` - Gets the employee by revision number
* `GetEmployeeRevisions` - Get all employee revisions
* `GetEmployeeSecret` - Get employee secret
* `GetEmployeeSecrets` - Get all employee secret links
* `GetEmployeesByEffectiveDate` - Get employees from employer at a given effective date.
* `GetEmployeesFromEmployer` - Get employees from employer.
* `GetEmployeesFromPayRun` - Get employees from the pay run
* `GetEmployeesFromPaySchedule` - Get all employees revisions from a pay schedule.
* `GetEmployeesFromPayScheduleOnEffectiveDate` - Get employees from a pay schedule on effective date.
* `GetEmployeesWithTag` - Get employees with tag
* `GetEmployer` - Gets the employer
* `GetEmployerByEffectiveDate` - Gets the employer at the specified effective
* `GetEmployerJobs` - Gets all jobs relating to the employer.
* `GetEmployerRevisionByNumber` - Gets the employer by revision number
* `GetEmployerRevisions` - Gets the employer revisions
* `GetEmployerSecret` - Get employer secret
* `GetEmployerSecrets` - Get all employer secret links
* `GetEmployerSummaryReportOuput` - Runs the employer summary report
* `GetEmployers` - Gets all employers
* `GetEmployersByEffectiveDate` - Gets all employers at the specified effective date
* `GetEmployersWithTag` - Get employers with tag
* `GetGrossToNetReportOutput` - Runs the gross to net report
* `GetHealthCheck` - Get health check status
* `GetHolidayBalanceReportOutput` - Runs the holiday balance report
* `GetHolidaySchemeByEffectiveDate` - Get holiday scheme by effective date.
* `GetHolidaySchemeFromEmployer` - Get holiday scheme from employer
* `GetHolidaySchemeRevisionByNumber` - Gets the holiday scheme revision by revision number
* `GetHolidaySchemeRevisions` - Get all holiday scheme revisions
* `GetHolidaySchemesByEffectiveDate` - Get holiday schemes from employer at a given effective date.
* `GetHolidaySchemesFromEmployer` - Get holiday schemes from employer.
* `GetHolidaySchemesWithTag` - Get holiday schemes with tag
* `GetJournalExpressionSchema` - Gets the journal expression data schema
* `GetJournalInstructionFromEmployer` - Gets the specified journal instruction from the employer
* `GetJournalInstructionTemplate` - Gets the Journal instructions template for the application
* `GetJournalInstructionTemplates` - Gets the Journal instructions templates for the application
* `GetJournalInstructionsFromEmployer` - Gets the Journal instructions from the specified employer
* `GetJournalLineFromEmployer` - Gets the specified journal Line from the employer
* `GetJournalLinesFromEmployee` - Gets the journal Lines from the specified employee
* `GetJournalLinesFromEmployer` - Gets the Journal Lines from the specified employer
* `GetJournalLinesFromPayRun` - Gets the journal Lines from the specified pay run
* `GetJournalLinesFromSubContractor` - Gets the journal Lines from the specified sub contractor
* `GetJournalReportOuput` - Runs the journal report
* `GetLastPayDateReportOuput` - Runs the last pay date report
* `GetNetPayReportOutput` - Runs the net pay report
* `GetNextPayPeriodDatesReportOutput` - Runs the next pay period report
* `GetNominalCodeFromEmployer` - Gets the nominal code
* `GetNominalCodesFromEmployer` - Gets the nominal codes
* `GetP11SummaryReportOutput` - Runs the P11 summary report
* `GetP32NetReportOutput` - Runs the P32 report
* `GetP32SummaryNetReportOutput` - Runs the P32 summary report
* `GetP45ReportOutput` - Runs the P45 report
* `GetP60ReportOutput` - Runs the P60 report
* `GetPapdisReportOuput` - Runs the PAPDIS report
* `GetPassReportOuput` - Runs the PASS report
* `GetPayCodeByEffectiveDate` - Gets pay code for specified date
* `GetPayCodeFromEmployer` - Gets the specified pay code from the employer
* `GetPayCodeRevisionByNumber` - Gets the pay code by revision number
* `GetPayCodeRevisions` - Get all revisions of the Pay Code
* `GetPayCodesByEffectiveDate` - Gets all pay codes for specified date
* `GetPayCodesFromEmployer` - Gets the pay codes from the employer
* `GetPayCodesFromNominalCode` - Gets the pay codes by nominal code
* `GetPayCodesWithTag` - Get pay codes with tag
* `GetPayDashboardPayslipReportOuput` - Runs the Pay Dashboard payslips report
* `GetPayInstructionFromEmployee` - Gets the specified pay instruction from the employee
* `GetPayInstructionsFromEmployee` - Gets the pay instructions from the specified employee
* `GetPayInstructionsWithTag` - Get pay instructions with tag
* `GetPayLineFromEmployee` - Gets the specified pay line from the employee
* `GetPayLinesFromEmployee` - Gets the pay lines from the specified employee
* `GetPayLinesWithTag` - Get pay lines with tag
* `GetPayRunFromPaySchedule` - Gets the pay run from the pay schedule
* `GetPayRunJobInfo` - Get the pay run job information
* `GetPayRunJobProgress` - Get the pay run job progress
* `GetPayRunJobStatus` - Get the pay run job status
* `GetPayRunJobs` - Get all PayRun jobs
* `GetPayRunsFromEmployee` - Gets the pay runs from the employee
* `GetPayRunsFromPaySchedule` - Gets the pay runs from the pay schedule
* `GetPayRunsWithTag` - Get pay runs with tag
* `GetPayScheduleFromEmployer` - Gets the specified pay schedule from the employer
* `GetPaySchedulesFromEmployer` - Gets the pay schedule from the specified employer
* `GetPaySchedulesWithTag` - Get pay schedule with tag
* `GetPayslip3ReportOutput` - Runs the verbose payslip report
* `GetPensionByEffectiveDate` - Get pension by effective date.
* `GetPensionFromEmployer` - Get pension from employer
* `GetPensionLiabilityReportOutput` - Runs the pension liability report
* `GetPensionRevisionByNumber` - Gets the pension by revision number
* `GetPensionRevisions` - Get all pension revisions
* `GetPensionsByEffectiveDate` - Get pensions from employer at a given effective date.
* `GetPensionsFromEmployer` - Get pensions from employer.
* `GetPermission` - Gets the permission object
* `GetPermissions` - Gets all permission objects
* `GetQueryResponse` - Get the query result
* `GetReportDefinitionFromApplication` - Get the report definition
* `GetReportDefinitionsFromApplication` - Gets all reports
* `GetReportLineFromEmployer` - Gets the specified report line from the employer
* `GetReportLinesFromEmployer` - Gets the report lines from the specified employer
* `GetReportLinesFromPayRun` - Gets the report lines from the specified pay run
* `GetReportOutput` - Runs the specified report definition
* `GetReportingInstructionFromEmployer` - Gets the specified reporting instruction from the employer
* `GetReportingInstructionsFromEmployer` - Gets the reporting instructions from the specified employer
* `GetRtiJobInfo` - Get the RTI job information
* `GetRtiJobProgress` - Get the RTI job progress
* `GetRtiJobStatus` - Get the RTI job status
* `GetRtiJobs` - Get all RTI jobs
* `GetRtiTransactionFromEmployer` - Get the RTI transaction
* `GetRtiTransactionsFromEmployer` - Get all RTI transactions for the employer
* `GetRtiTransactionsWithTag` - Get RTI transactions with tag
* `GetSchema` - Get XSD schema
* `GetSchemas` - Get a list of all available schemas
* `GetSubContractorByEffectiveDate` - Get sub contractor by effective date.
* `GetSubContractorFromEmployer` - Get sub contractor from employer
* `GetSubContractorRevisionByNumber` - Gets the sub contractor by revision number
* `GetSubContractorRevisions` - Get all sub contractor revisions
* `GetSubContractorsByEffectiveDate` - Get sub contractors from employer at a given effective date.
* `GetSubContractorsFromEmployer` - Get sub contractors from employer.
* `GetSubContractorsWithTag` - Get sub contractors with tag
* `GetTagFromCisInstruction` - Get CIS instruction tag
* `GetTagFromCisLine` - Get CIS line tag
* `GetTagFromCisLineType` - Get CIS line type tag
* `GetTagFromEmployee` - Get employee tag
* `GetTagFromEmployeeRevision` - Get employee revision tag
* `GetTagFromEmployer` - Get employer tag
* `GetTagFromEmployerRevision` - Get employer revision tag
* `GetTagFromHolidayScheme` - Get holiday scheme tag
* `GetTagFromHolidaySchemeRevision` - Get holiday scheme revision tag
* `GetTagFromJournalLine` - Get journal line tag
* `GetTagFromPayCode` - Get pay code tag
* `GetTagFromPayInstruction` - Get pay instruction tag
* `GetTagFromPayLine` - Get pay line tag
* `GetTagFromPayRun` - Get pay run tag
* `GetTagFromPaySchedule` - Get pay schedule tag
* `GetTagFromRtiTransaction` - Get RTI transaction tag
* `GetTagFromSubContractor` - Get sub contractor tag
* `GetTagFromSubContractorRevision` - Get sub contractor revision tag
* `GetTagFromThirdPartyTransaction` - Get third party transaction tag
* `GetTagFromUser` - Get user tag
* `GetTagsFromCisInstruction` - Get all tags from the CIS instruction
* `GetTagsFromCisLine` - Get all tags from the CIS line
* `GetTagsFromCisLineType` - Get all tags from the CIS line type
* `GetTagsFromEmployee` - Get all employee tags
* `GetTagsFromEmployeeRevision` - Get all employee revision tags
* `GetTagsFromEmployer` - Get all employer tags
* `GetTagsFromEmployerRevision` - Get all employer revision tags
* `GetTagsFromHolidayScheme` - Get all tags from the holiday scheme
* `GetTagsFromHolidaySchemeRevision` - Get all holiday scheme revision tags
* `GetTagsFromJournalLine` - Get tags from journal line
* `GetTagsFromPayCode` - Get all pay code tags
* `GetTagsFromPayInstruction` - Get all tags from the pay instruction
* `GetTagsFromPayLine` - Get all tags from the pay line
* `GetTagsFromPayRun` - Get all pay run tags
* `GetTagsFromPaySchedule` - Get all pay schedule tags
* `GetTagsFromRtiTransaction` - Get all tags from RTI transaction
* `GetTagsFromSubContractor` - Get all tags from the sub contractor
* `GetTagsFromSubContractorRevision` - Get all sub contractor revision tags
* `GetTagsFromThirdPartyTransaction` - Get tags from third party transaction
* `GetTagsFromUser` - Get tags from user
* `GetTemplateModel` - Get the object template
* `GetTemplates` - Get a list of all available data object tempaltes
* `GetThirdPartyJobInfo` - Get the Third Party job information
* `GetThirdPartyJobProgress` - Get the Third Party job progress
* `GetThirdPartyJobStatus` - Get the Third Party job status
* `GetThirdPartyJobs` - Get all Third Party jobs
* `GetThirdPartyTransaction` - Get a third party transaction
* `GetThirdPartyTransactions` - Get all third party transaction links
* `GetTransformDefinitionFromApplication` - Get the transform definition
* `GetTransformDefinitionsFromApplication` - Gets all transform definitions
* `GetUser` - Gets the user object
* `GetUsers` - Gets all user objects
* `PatchCisInstruction` - Patches the CIS instruction
* `PatchDpsMessage` - Patches the DPS message
* `PatchEmployee` - Patches the employee
* `PatchEmployer` - Patches the employer
* `PatchHolidayScheme` - Patches the holiday scheme
* `PatchPayCode` - Patches the pay code
* `PatchPayInstruction` - Sparse Update of a Pay Instruction
* `PatchPension` - Patches the pension
* `PatchPermission` - Patch permission object
* `PatchSubContractor` - Patches the sub contractor
* `PatchUser` - Patch user object
* `PostCisInstructionIntoSubContractor` - Create a new CIS instruction
* `PostCisLineTypeIntoEmployer` - Create a new CIS line type
* `PostDpsMessage` - Posta the DPS message
* `PostEmployeeIntoEmployer` - Create a new Employee
* `PostEmployeeSecret` - Create a new employee secret
* `PostEmployer` - Create a new Employer
* `PostEmployerSecret` - Create a new employer secret
* `PostHolidaySchemeIntoEmployer` - Create a new holiday scheme
* `PostJournalInstruction` - Creates a new Journal Instruction
* `PostJournalInstructionTemplate` - Creates a new Journal Instruction template
* `PostNewAeAssessment` - Insert new auto enrolment assessment
* `PostNewBatchJob` - Create new Batch job
* `PostNewCisJob` - Create new CIS job
* `PostNewDpsJob` - Create new DPS job
* `PostNewPayRunJob` - Create new PayRun job
* `PostNewRtiJob` - Create new RTI job
* `PostNewThirdPartyJob` - Create new Third Party job
* `PostNominalCode` - Insert nominal code
* `PostPayCode` - Create a new pay code
* `PostPayInstruction` - Creates a new Pay Instruction
* `PostPaySchedule` - Create a new pay schedule
* `PostPensionIntoEmployer` - Create a new Pension
* `PostPermission` - Post permisson object
* `PostReportDefinition` - Create a new report definition
* `PostReportingInstruction` - Creates a new Reporting Instruction
* `PostSubContractorIntoEmployer` - Create a new sub contractor
* `PostTransformDefinition` - Create a new transform definition
* `PostUser` - Post user object
* `PutCisInstructionIntoSubContractor` - Updates the CIS instruction
* `PutCisInstructionTag` - Insert CIS instruction tag
* `PutCisLineTag` - Insert CIS line tag
* `PutCisLineTypeIntoEmployer` - Updates the CIS line type
* `PutCisLineTypeTag` - Insert CIS line type tag
* `PutDpsMessage` - Puts the DPS message
* `PutEmployeeIntoEmployer` - Updates the Employee
* `PutEmployeeSecret` - Create a new employee secret
* `PutEmployeeTag` - Insert employee tag
* `PutEmployer` - Updates the Employer
* `PutEmployerSecret` - Create a new employer secret
* `PutEmployerTag` - Insert employer tag
* `PutHolidaySchemeIntoEmployer` - Updates the holiday scheme
* `PutHolidaySchemeTag` - Insert holiday scheme tag
* `PutJournalInstruction` - Update a Journal Instruction
* `PutJournalInstructionTemplate` - Update a Journal Instruction template
* `PutJournalLineTag` - Insert journal line tag
* `PutNewAeAssessment` - Insert new auto enrolment assessment
* `PutNominalCode` - Insert nominal code
* `PutPayCode` - Updates a pay code
* `PutPayCodeTag` - Insert pay code tag
* `PutPayInstruction` - Update a Pay Instruction
* `PutPayInstructionTag` - Insert pay instruction tag
* `PutPayLineTag` - Insert pay line tag
* `PutPayRunTag` - Insert pay run tag
* `PutPaySchedule` - Updates a pay schedule
* `PutPayScheduleTag` - Insert pay schedule tag
* `PutPensionIntoEmployer` - Updates the Pension
* `PutPermission` - Puts permisson object
* `PutReportDefinition` - Updates a report definition
* `PutReportingInstruction` - Update a reporting Instruction
* `PutRtiTransactionTag` - Insert RTI transaction tag
* `PutSubContractorIntoEmployer` - Updates the sub contractor
* `PutSubContractorTag` - Insert sub contractor tag
* `PutThirdPartyTransactionTag` - insert third party transaction tag
* `PutTransformDefinition` - Updates a transform definition
* `PutUser` - Puts user object
* `PutUserTag` - Insert user tag

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
