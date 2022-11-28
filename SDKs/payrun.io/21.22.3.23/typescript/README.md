# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DeleteAeAssessmentRequest, DeleteAeAssessmentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAeAssessmentRequest = {
  pathParams: {
    aeAssessmentId: "quae",
    employeeId: "sed",
    employerId: "deserunt",
  },
  headers: {
    apiVersion: "rerum",
    authorization: "saepe",
  },
};

sdk.sdk.deleteAeAssessment(req).then((res: DeleteAeAssessmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteAeAssessment` - Delete auto enrolment assessment
* `deleteBatchJob` - Delete the Batch job
* `deleteCisInstruction` - Delete a CIS instruction
* `deleteCisInstructionTag` - Delete CIS instruction tag
* `deleteCisJob` - Delete the CIS job
* `deleteCisLine` - Delete a CIS line
* `deleteCisLineTag` - Delete CIS line tag
* `deleteCisLineType` - Delete an CIS line type
* `deleteCisLineTypeTag` - Delete CIS line type tag
* `deleteCisTransaction` - Delete the CIS transaction
* `deleteDpsJob` - Delete the DPS job
* `deleteDpsMessage` - Deletes the DPS message
* `deleteEmployee` - Delete an Employee
* `deleteEmployeeRevision` - Delete an Employee revision matching the specified revision date.
* `deleteEmployeeRevisionByNumber` - Delete an Employee revision matching the specified revision number.
* `deleteEmployeeSecret` - Deletes employee secret
* `deleteEmployeeTag` - Delete employee tag
* `deleteEmployer` - Delete an Employer
* `deleteEmployerRevision` - Delete an Employer revision matching the specified revision date.
* `deleteEmployerRevisionByNumber` - Delete an Employer revision matching the specified revision number.
* `deleteEmployerSecret` - Deletes employer secret
* `deleteEmployerTag` - Delete employer tag
* `deleteHolidayScheme` - Delete an holiday scheme
* `deleteHolidaySchemeRevision` - Delete an holiday scheme revision matching the specified revision date.
* `deleteHolidaySchemeRevisionByNumber` - Delete an HolidayScheme revision matching the specified revision number.
* `deleteHolidaySchemeTag` - Delete holiday scheme tag
* `deleteJournalInstruction` - Deletes a Journal instruction
* `deleteJournalInstructionTemplate` - Deletes a Journal instruction template
* `deleteJournalLineTag` - Delete journal line tag
* `deleteNominalCode` - Deletes the nominal codes
* `deletePayCode` - Deletes a pay code
* `deletePayCodeRevision` - Deletes a pay code revision
* `deletePayCodeRevisionByNumber` - Delete an PayCode revision matching the specified revision number.
* `deletePayCodeTag` - Delete pay code tag
* `deletePayInstruction` - Deletes a pay instruction
* `deletePayInstructionTag` - Delete pay instruction tag
* `deletePayLineTag` - Delete pay line tag
* `deletePayRun` - Deletes a pay run
* `deletePayRunEmployee` - Deletes a pay run employee
* `deletePayRunJob` - Delete the pay run job
* `deletePayRunTag` - Delete pay run tag
* `deletePaySchedule` - Deletes a pay schedule
* `deletePayScheduleTag` - Delete pay schedule tag
* `deletePension` - Delete a Pension
* `deletePensionRevision` - Delete an Pension revision matching the specified revision date.
* `deletePensionRevisionByNumber` - Delete an Pension revision matching the specified revision number.
* `deletePermission` - Deletes the permission object
* `deleteReportDefinition` - Deletes a report definition
* `deleteReportingInstruction` - Deletes a reporting instruction
* `deleteRtiJob` - Delete the RTI job
* `deleteRtiTransaction` - Delete the RTI transaction
* `deleteRtiTransactionTag` - Delete RTI transaction tag
* `deleteSubContractor` - Delete an sub contractor
* `deleteSubContractorRevision` - Delete an sub contractor revision matching the specified revision date.
* `deleteSubContractorRevisionByNumber` - Delete an SubContractor revision matching the specified revision number.
* `deleteSubContractorTag` - Delete sub contractor tag
* `deleteThirdPartyJob` - Delete the Third Party job
* `deleteThirdPartyTransaction` - Delete third party transaction
* `deleteThirdPartyTransactionTag` - Delete third party transaction tag
* `deleteTransformDefinition` - Deletes a transform definition
* `deleteUser` - Deletes the user object
* `deleteUserTag` - Delete user tag
* `getAeAssessmentFromEmployee` - Get the auto enrolment assessment
* `getAeAssessmentsFromEmployee` - Get the auto enrolment assessments
* `getAeAssessmentsFromPayRun` - Get the auto enrolment assessments
* `getActivePayInstructionsReportOutput` - Runs the active pay instructions report
* `getAllCisInstructionTags` - Get all CIS instruction tags
* `getAllCisLineTags` - Get all CIS line tags
* `getAllCisLineTypeTags` - Get all CIS line type tags
* `getAllEmployeeTags` - Get all employee tags
* `getAllEmployerTags` - Get all employer tags
* `getAllHolidaySchemeTags` - Get all holiday scheme tags
* `getAllJournalLineTags` - Get all journal line tags
* `getAllJournalLinesWithTag` - Get links to tagged journal lines
* `getAllPayCodeTags` - Get all pay code tags
* `getAllPayInstructionTags` - Get all pay instruction tags
* `getAllPayLineTags` - Get all pay line tags
* `getAllPayRunTags` - Get all pay run tags
* `getAllPayScheduleTags` - Get all pay schedule tags
* `getAllRtiTransactionTags` - Get all RTI transaction tags
* `getAllSubContractorTags` - Get all sub contractor tags
* `getAllThirdPartyTransactionTags` - Get all third party transaction tags
* `getAllThirdPartyTransactionsWithTag` - Get links to tagged third party transactions
* `getAllUserTags` - Get all user tags
* `getAllUsersWithTag` - Get links to tagged users
* `getAoeLiabilityReportOuput` - Runs the AOE liability report
* `getBatchJobInfo` - Get the Batch job information
* `getBatchJobProgress` - Get the Batch job progress
* `getBatchJobStatus` - Get the Batch job status
* `getBatchJobs` - Get all Batch jobs
* `getCisInstructionFromSubContractor` - Get CIS instruction from sub contractor
* `getCisInstructionsFromSubContractor` - Get CIS instructions from sub contractor.
* `getCisInstructionsWithTag` - Get CIS instructions with tag
* `getCisJobInfo` - Get the CIS job information
* `getCisJobProgress` - Get the CIS job progress
* `getCisJobStatus` - Get the CIS job status
* `getCisJobs` - Get all CIS jobs
* `getCisLineFromSubContractor` - Get CIS line from sub contractor
* `getCisLineTypeFromEmployer` - Get CIS line type from employer
* `getCisLineTypesFromEmployer` - Get CIS line types from employer.
* `getCisLineTypesWithTag` - Get CIS line types with tag
* `getCisLinesFromSubContractor` - Get CIS lines from sub contractor.
* `getCisLinesWithTag` - Get CIS lines with tag
* `getCisTransactionFromEmployer` - Get the CIS transaction
* `getCisTransactionsFromEmployer` - Get all CIS transactions for the employer
* `getCommentariesFromEmployee` - Get links to all commentaries for the specified employee
* `getCommentariesFromPayRun` - Get links to all commentaries for the specified pay run
* `getCommentaryFromEmployee` - Get commentary from employee
* `getCommentaryFromPayRunByEmployee` - Get commentary from payrun by specified employee.
* `getDpsJobInfo` - Get the DPS job information
* `getDpsJobProgress` - Get the DPS job progress
* `getDpsJobStatus` - Get the DPS job status
* `getDpsJobs` - Get all DPS jobs
* `getDpsMessageFromEmployer` - Gets the DPS message
* `getDpsMessageReportOutput` - Runs the DPS message report
* `getDpsMessagesFromEmployer` - Gets the DPS messages
* `getEmployeeByEffectiveDate` - Get employee by effective date.
* `getEmployeeFromEmployer` - Get employee from employer
* `getEmployeeRevisionByNumber` - Gets the employee by revision number
* `getEmployeeRevisions` - Get all employee revisions
* `getEmployeeSecret` - Get employee secret
* `getEmployeeSecrets` - Get all employee secret links
* `getEmployeesByEffectiveDate` - Get employees from employer at a given effective date.
* `getEmployeesFromEmployer` - Get employees from employer.
* `getEmployeesFromPayRun` - Get employees from the pay run
* `getEmployeesFromPaySchedule` - Get all employees revisions from a pay schedule.
* `getEmployeesFromPayScheduleOnEffectiveDate` - Get employees from a pay schedule on effective date.
* `getEmployeesWithTag` - Get employees with tag
* `getEmployer` - Gets the employer
* `getEmployerByEffectiveDate` - Gets the employer at the specified effective
* `getEmployerJobs` - Gets all jobs relating to the employer.
* `getEmployerRevisionByNumber` - Gets the employer by revision number
* `getEmployerRevisions` - Gets the employer revisions
* `getEmployerSecret` - Get employer secret
* `getEmployerSecrets` - Get all employer secret links
* `getEmployerSummaryReportOuput` - Runs the employer summary report
* `getEmployers` - Gets all employers
* `getEmployersByEffectiveDate` - Gets all employers at the specified effective date
* `getEmployersWithTag` - Get employers with tag
* `getGrossToNetReportOutput` - Runs the gross to net report
* `getHealthCheck` - Get health check status
* `getHolidayBalanceReportOutput` - Runs the holiday balance report
* `getHolidaySchemeByEffectiveDate` - Get holiday scheme by effective date.
* `getHolidaySchemeFromEmployer` - Get holiday scheme from employer
* `getHolidaySchemeRevisionByNumber` - Gets the holiday scheme revision by revision number
* `getHolidaySchemeRevisions` - Get all holiday scheme revisions
* `getHolidaySchemesByEffectiveDate` - Get holiday schemes from employer at a given effective date.
* `getHolidaySchemesFromEmployer` - Get holiday schemes from employer.
* `getHolidaySchemesWithTag` - Get holiday schemes with tag
* `getJournalExpressionSchema` - Gets the journal expression data schema
* `getJournalInstructionFromEmployer` - Gets the specified journal instruction from the employer
* `getJournalInstructionTemplate` - Gets the Journal instructions template for the application
* `getJournalInstructionTemplates` - Gets the Journal instructions templates for the application
* `getJournalInstructionsFromEmployer` - Gets the Journal instructions from the specified employer
* `getJournalLineFromEmployer` - Gets the specified journal Line from the employer
* `getJournalLinesFromEmployee` - Gets the journal Lines from the specified employee
* `getJournalLinesFromEmployer` - Gets the Journal Lines from the specified employer
* `getJournalLinesFromPayRun` - Gets the journal Lines from the specified pay run
* `getJournalLinesFromSubContractor` - Gets the journal Lines from the specified sub contractor
* `getJournalReportOuput` - Runs the journal report
* `getLastPayDateReportOuput` - Runs the last pay date report
* `getNetPayReportOutput` - Runs the net pay report
* `getNextPayPeriodDatesReportOutput` - Runs the next pay period report
* `getNominalCodeFromEmployer` - Gets the nominal code
* `getNominalCodesFromEmployer` - Gets the nominal codes
* `getP11SummaryReportOutput` - Runs the P11 summary report
* `getP32NetReportOutput` - Runs the P32 report
* `getP32SummaryNetReportOutput` - Runs the P32 summary report
* `getP45ReportOutput` - Runs the P45 report
* `getP60ReportOutput` - Runs the P60 report
* `getPapdisReportOuput` - Runs the PAPDIS report
* `getPassReportOuput` - Runs the PASS report
* `getPayCodeByEffectiveDate` - Gets pay code for specified date
* `getPayCodeFromEmployer` - Gets the specified pay code from the employer
* `getPayCodeRevisionByNumber` - Gets the pay code by revision number
* `getPayCodeRevisions` - Get all revisions of the Pay Code
* `getPayCodesByEffectiveDate` - Gets all pay codes for specified date
* `getPayCodesFromEmployer` - Gets the pay codes from the employer
* `getPayCodesFromNominalCode` - Gets the pay codes by nominal code
* `getPayCodesWithTag` - Get pay codes with tag
* `getPayDashboardPayslipReportOuput` - Runs the Pay Dashboard payslips report
* `getPayInstructionFromEmployee` - Gets the specified pay instruction from the employee
* `getPayInstructionsFromEmployee` - Gets the pay instructions from the specified employee
* `getPayInstructionsWithTag` - Get pay instructions with tag
* `getPayLineFromEmployee` - Gets the specified pay line from the employee
* `getPayLinesFromEmployee` - Gets the pay lines from the specified employee
* `getPayLinesWithTag` - Get pay lines with tag
* `getPayRunFromPaySchedule` - Gets the pay run from the pay schedule
* `getPayRunJobInfo` - Get the pay run job information
* `getPayRunJobProgress` - Get the pay run job progress
* `getPayRunJobStatus` - Get the pay run job status
* `getPayRunJobs` - Get all PayRun jobs
* `getPayRunsFromEmployee` - Gets the pay runs from the employee
* `getPayRunsFromPaySchedule` - Gets the pay runs from the pay schedule
* `getPayRunsWithTag` - Get pay runs with tag
* `getPayScheduleFromEmployer` - Gets the specified pay schedule from the employer
* `getPaySchedulesFromEmployer` - Gets the pay schedule from the specified employer
* `getPaySchedulesWithTag` - Get pay schedule with tag
* `getPayslip3ReportOutput` - Runs the verbose payslip report
* `getPensionByEffectiveDate` - Get pension by effective date.
* `getPensionFromEmployer` - Get pension from employer
* `getPensionLiabilityReportOutput` - Runs the pension liability report
* `getPensionRevisionByNumber` - Gets the pension by revision number
* `getPensionRevisions` - Get all pension revisions
* `getPensionsByEffectiveDate` - Get pensions from employer at a given effective date.
* `getPensionsFromEmployer` - Get pensions from employer.
* `getPermission` - Gets the permission object
* `getPermissions` - Gets all permission objects
* `getQueryResponse` - Get the query result
* `getReportDefinitionFromApplication` - Get the report definition
* `getReportDefinitionsFromApplication` - Gets all reports
* `getReportLineFromEmployer` - Gets the specified report line from the employer
* `getReportLinesFromEmployer` - Gets the report lines from the specified employer
* `getReportLinesFromPayRun` - Gets the report lines from the specified pay run
* `getReportOutput` - Runs the specified report definition
* `getReportingInstructionFromEmployer` - Gets the specified reporting instruction from the employer
* `getReportingInstructionsFromEmployer` - Gets the reporting instructions from the specified employer
* `getRtiJobInfo` - Get the RTI job information
* `getRtiJobProgress` - Get the RTI job progress
* `getRtiJobStatus` - Get the RTI job status
* `getRtiJobs` - Get all RTI jobs
* `getRtiTransactionFromEmployer` - Get the RTI transaction
* `getRtiTransactionsFromEmployer` - Get all RTI transactions for the employer
* `getRtiTransactionsWithTag` - Get RTI transactions with tag
* `getSchema` - Get XSD schema
* `getSchemas` - Get a list of all available schemas
* `getSubContractorByEffectiveDate` - Get sub contractor by effective date.
* `getSubContractorFromEmployer` - Get sub contractor from employer
* `getSubContractorRevisionByNumber` - Gets the sub contractor by revision number
* `getSubContractorRevisions` - Get all sub contractor revisions
* `getSubContractorsByEffectiveDate` - Get sub contractors from employer at a given effective date.
* `getSubContractorsFromEmployer` - Get sub contractors from employer.
* `getSubContractorsWithTag` - Get sub contractors with tag
* `getTagFromCisInstruction` - Get CIS instruction tag
* `getTagFromCisLine` - Get CIS line tag
* `getTagFromCisLineType` - Get CIS line type tag
* `getTagFromEmployee` - Get employee tag
* `getTagFromEmployeeRevision` - Get employee revision tag
* `getTagFromEmployer` - Get employer tag
* `getTagFromEmployerRevision` - Get employer revision tag
* `getTagFromHolidayScheme` - Get holiday scheme tag
* `getTagFromHolidaySchemeRevision` - Get holiday scheme revision tag
* `getTagFromJournalLine` - Get journal line tag
* `getTagFromPayCode` - Get pay code tag
* `getTagFromPayInstruction` - Get pay instruction tag
* `getTagFromPayLine` - Get pay line tag
* `getTagFromPayRun` - Get pay run tag
* `getTagFromPaySchedule` - Get pay schedule tag
* `getTagFromRtiTransaction` - Get RTI transaction tag
* `getTagFromSubContractor` - Get sub contractor tag
* `getTagFromSubContractorRevision` - Get sub contractor revision tag
* `getTagFromThirdPartyTransaction` - Get third party transaction tag
* `getTagFromUser` - Get user tag
* `getTagsFromCisInstruction` - Get all tags from the CIS instruction
* `getTagsFromCisLine` - Get all tags from the CIS line
* `getTagsFromCisLineType` - Get all tags from the CIS line type
* `getTagsFromEmployee` - Get all employee tags
* `getTagsFromEmployeeRevision` - Get all employee revision tags
* `getTagsFromEmployer` - Get all employer tags
* `getTagsFromEmployerRevision` - Get all employer revision tags
* `getTagsFromHolidayScheme` - Get all tags from the holiday scheme
* `getTagsFromHolidaySchemeRevision` - Get all holiday scheme revision tags
* `getTagsFromJournalLine` - Get tags from journal line
* `getTagsFromPayCode` - Get all pay code tags
* `getTagsFromPayInstruction` - Get all tags from the pay instruction
* `getTagsFromPayLine` - Get all tags from the pay line
* `getTagsFromPayRun` - Get all pay run tags
* `getTagsFromPaySchedule` - Get all pay schedule tags
* `getTagsFromRtiTransaction` - Get all tags from RTI transaction
* `getTagsFromSubContractor` - Get all tags from the sub contractor
* `getTagsFromSubContractorRevision` - Get all sub contractor revision tags
* `getTagsFromThirdPartyTransaction` - Get tags from third party transaction
* `getTagsFromUser` - Get tags from user
* `getTemplateModel` - Get the object template
* `getTemplates` - Get a list of all available data object tempaltes
* `getThirdPartyJobInfo` - Get the Third Party job information
* `getThirdPartyJobProgress` - Get the Third Party job progress
* `getThirdPartyJobStatus` - Get the Third Party job status
* `getThirdPartyJobs` - Get all Third Party jobs
* `getThirdPartyTransaction` - Get a third party transaction
* `getThirdPartyTransactions` - Get all third party transaction links
* `getTransformDefinitionFromApplication` - Get the transform definition
* `getTransformDefinitionsFromApplication` - Gets all transform definitions
* `getUser` - Gets the user object
* `getUsers` - Gets all user objects
* `patchCisInstruction` - Patches the CIS instruction
* `patchDpsMessage` - Patches the DPS message
* `patchEmployee` - Patches the employee
* `patchEmployer` - Patches the employer
* `patchHolidayScheme` - Patches the holiday scheme
* `patchPayCode` - Patches the pay code
* `patchPayInstruction` - Sparse Update of a Pay Instruction
* `patchPension` - Patches the pension
* `patchPermission` - Patch permission object
* `patchSubContractor` - Patches the sub contractor
* `patchUser` - Patch user object
* `postCisInstructionIntoSubContractor` - Create a new CIS instruction
* `postCisLineTypeIntoEmployer` - Create a new CIS line type
* `postDpsMessage` - Posta the DPS message
* `postEmployeeIntoEmployer` - Create a new Employee
* `postEmployeeSecret` - Create a new employee secret
* `postEmployer` - Create a new Employer
* `postEmployerSecret` - Create a new employer secret
* `postHolidaySchemeIntoEmployer` - Create a new holiday scheme
* `postJournalInstruction` - Creates a new Journal Instruction
* `postJournalInstructionTemplate` - Creates a new Journal Instruction template
* `postNewAeAssessment` - Insert new auto enrolment assessment
* `postNewBatchJob` - Create new Batch job
* `postNewCisJob` - Create new CIS job
* `postNewDpsJob` - Create new DPS job
* `postNewPayRunJob` - Create new PayRun job
* `postNewRtiJob` - Create new RTI job
* `postNewThirdPartyJob` - Create new Third Party job
* `postNominalCode` - Insert nominal code
* `postPayCode` - Create a new pay code
* `postPayInstruction` - Creates a new Pay Instruction
* `postPaySchedule` - Create a new pay schedule
* `postPensionIntoEmployer` - Create a new Pension
* `postPermission` - Post permisson object
* `postReportDefinition` - Create a new report definition
* `postReportingInstruction` - Creates a new Reporting Instruction
* `postSubContractorIntoEmployer` - Create a new sub contractor
* `postTransformDefinition` - Create a new transform definition
* `postUser` - Post user object
* `putCisInstructionIntoSubContractor` - Updates the CIS instruction
* `putCisInstructionTag` - Insert CIS instruction tag
* `putCisLineTag` - Insert CIS line tag
* `putCisLineTypeIntoEmployer` - Updates the CIS line type
* `putCisLineTypeTag` - Insert CIS line type tag
* `putDpsMessage` - Puts the DPS message
* `putEmployeeIntoEmployer` - Updates the Employee
* `putEmployeeSecret` - Create a new employee secret
* `putEmployeeTag` - Insert employee tag
* `putEmployer` - Updates the Employer
* `putEmployerSecret` - Create a new employer secret
* `putEmployerTag` - Insert employer tag
* `putHolidaySchemeIntoEmployer` - Updates the holiday scheme
* `putHolidaySchemeTag` - Insert holiday scheme tag
* `putJournalInstruction` - Update a Journal Instruction
* `putJournalInstructionTemplate` - Update a Journal Instruction template
* `putJournalLineTag` - Insert journal line tag
* `putNewAeAssessment` - Insert new auto enrolment assessment
* `putNominalCode` - Insert nominal code
* `putPayCode` - Updates a pay code
* `putPayCodeTag` - Insert pay code tag
* `putPayInstruction` - Update a Pay Instruction
* `putPayInstructionTag` - Insert pay instruction tag
* `putPayLineTag` - Insert pay line tag
* `putPayRunTag` - Insert pay run tag
* `putPaySchedule` - Updates a pay schedule
* `putPayScheduleTag` - Insert pay schedule tag
* `putPensionIntoEmployer` - Updates the Pension
* `putPermission` - Puts permisson object
* `putReportDefinition` - Updates a report definition
* `putReportingInstruction` - Update a reporting Instruction
* `putRtiTransactionTag` - Insert RTI transaction tag
* `putSubContractorIntoEmployer` - Updates the sub contractor
* `putSubContractorTag` - Insert sub contractor tag
* `putThirdPartyTransactionTag` - insert third party transaction tag
* `putTransformDefinition` - Updates a transform definition
* `putUser` - Puts user object
* `putUserTag` - Insert user tag

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
