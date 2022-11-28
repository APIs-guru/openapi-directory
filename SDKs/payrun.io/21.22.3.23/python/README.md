# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAeAssessmentRequest(
    path_params=operations.DeleteAeAssessmentPathParams(
        ae_assessment_id="quae",
        employee_id="sed",
        employer_id="deserunt",
    ),
    headers=operations.DeleteAeAssessmentHeaders(
        api_version="rerum",
        authorization="saepe",
    ),
)
    
res = s.sdk.delete_ae_assessment(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_ae_assessment` - Delete auto enrolment assessment
* `delete_batch_job` - Delete the Batch job
* `delete_cis_instruction` - Delete a CIS instruction
* `delete_cis_instruction_tag` - Delete CIS instruction tag
* `delete_cis_job` - Delete the CIS job
* `delete_cis_line` - Delete a CIS line
* `delete_cis_line_tag` - Delete CIS line tag
* `delete_cis_line_type` - Delete an CIS line type
* `delete_cis_line_type_tag` - Delete CIS line type tag
* `delete_cis_transaction` - Delete the CIS transaction
* `delete_dps_job` - Delete the DPS job
* `delete_dps_message` - Deletes the DPS message
* `delete_employee` - Delete an Employee
* `delete_employee_revision` - Delete an Employee revision matching the specified revision date.
* `delete_employee_revision_by_number` - Delete an Employee revision matching the specified revision number.
* `delete_employee_secret` - Deletes employee secret
* `delete_employee_tag` - Delete employee tag
* `delete_employer` - Delete an Employer
* `delete_employer_revision` - Delete an Employer revision matching the specified revision date.
* `delete_employer_revision_by_number` - Delete an Employer revision matching the specified revision number.
* `delete_employer_secret` - Deletes employer secret
* `delete_employer_tag` - Delete employer tag
* `delete_holiday_scheme` - Delete an holiday scheme
* `delete_holiday_scheme_revision` - Delete an holiday scheme revision matching the specified revision date.
* `delete_holiday_scheme_revision_by_number` - Delete an HolidayScheme revision matching the specified revision number.
* `delete_holiday_scheme_tag` - Delete holiday scheme tag
* `delete_journal_instruction` - Deletes a Journal instruction
* `delete_journal_instruction_template` - Deletes a Journal instruction template
* `delete_journal_line_tag` - Delete journal line tag
* `delete_nominal_code` - Deletes the nominal codes
* `delete_pay_code` - Deletes a pay code
* `delete_pay_code_revision` - Deletes a pay code revision
* `delete_pay_code_revision_by_number` - Delete an PayCode revision matching the specified revision number.
* `delete_pay_code_tag` - Delete pay code tag
* `delete_pay_instruction` - Deletes a pay instruction
* `delete_pay_instruction_tag` - Delete pay instruction tag
* `delete_pay_line_tag` - Delete pay line tag
* `delete_pay_run` - Deletes a pay run
* `delete_pay_run_employee` - Deletes a pay run employee
* `delete_pay_run_job` - Delete the pay run job
* `delete_pay_run_tag` - Delete pay run tag
* `delete_pay_schedule` - Deletes a pay schedule
* `delete_pay_schedule_tag` - Delete pay schedule tag
* `delete_pension` - Delete a Pension
* `delete_pension_revision` - Delete an Pension revision matching the specified revision date.
* `delete_pension_revision_by_number` - Delete an Pension revision matching the specified revision number.
* `delete_permission` - Deletes the permission object
* `delete_report_definition` - Deletes a report definition
* `delete_reporting_instruction` - Deletes a reporting instruction
* `delete_rti_job` - Delete the RTI job
* `delete_rti_transaction` - Delete the RTI transaction
* `delete_rti_transaction_tag` - Delete RTI transaction tag
* `delete_sub_contractor` - Delete an sub contractor
* `delete_sub_contractor_revision` - Delete an sub contractor revision matching the specified revision date.
* `delete_sub_contractor_revision_by_number` - Delete an SubContractor revision matching the specified revision number.
* `delete_sub_contractor_tag` - Delete sub contractor tag
* `delete_third_party_job` - Delete the Third Party job
* `delete_third_party_transaction` - Delete third party transaction
* `delete_third_party_transaction_tag` - Delete third party transaction tag
* `delete_transform_definition` - Deletes a transform definition
* `delete_user` - Deletes the user object
* `delete_user_tag` - Delete user tag
* `get_ae_assessment_from_employee` - Get the auto enrolment assessment
* `get_ae_assessments_from_employee` - Get the auto enrolment assessments
* `get_ae_assessments_from_pay_run` - Get the auto enrolment assessments
* `get_active_pay_instructions_report_output` - Runs the active pay instructions report
* `get_all_cis_instruction_tags` - Get all CIS instruction tags
* `get_all_cis_line_tags` - Get all CIS line tags
* `get_all_cis_line_type_tags` - Get all CIS line type tags
* `get_all_employee_tags` - Get all employee tags
* `get_all_employer_tags` - Get all employer tags
* `get_all_holiday_scheme_tags` - Get all holiday scheme tags
* `get_all_journal_line_tags` - Get all journal line tags
* `get_all_journal_lines_with_tag` - Get links to tagged journal lines
* `get_all_pay_code_tags` - Get all pay code tags
* `get_all_pay_instruction_tags` - Get all pay instruction tags
* `get_all_pay_line_tags` - Get all pay line tags
* `get_all_pay_run_tags` - Get all pay run tags
* `get_all_pay_schedule_tags` - Get all pay schedule tags
* `get_all_rti_transaction_tags` - Get all RTI transaction tags
* `get_all_sub_contractor_tags` - Get all sub contractor tags
* `get_all_third_party_transaction_tags` - Get all third party transaction tags
* `get_all_third_party_transactions_with_tag` - Get links to tagged third party transactions
* `get_all_user_tags` - Get all user tags
* `get_all_users_with_tag` - Get links to tagged users
* `get_aoe_liability_report_ouput` - Runs the AOE liability report
* `get_batch_job_info` - Get the Batch job information
* `get_batch_job_progress` - Get the Batch job progress
* `get_batch_job_status` - Get the Batch job status
* `get_batch_jobs` - Get all Batch jobs
* `get_cis_instruction_from_sub_contractor` - Get CIS instruction from sub contractor
* `get_cis_instructions_from_sub_contractor` - Get CIS instructions from sub contractor.
* `get_cis_instructions_with_tag` - Get CIS instructions with tag
* `get_cis_job_info` - Get the CIS job information
* `get_cis_job_progress` - Get the CIS job progress
* `get_cis_job_status` - Get the CIS job status
* `get_cis_jobs` - Get all CIS jobs
* `get_cis_line_from_sub_contractor` - Get CIS line from sub contractor
* `get_cis_line_type_from_employer` - Get CIS line type from employer
* `get_cis_line_types_from_employer` - Get CIS line types from employer.
* `get_cis_line_types_with_tag` - Get CIS line types with tag
* `get_cis_lines_from_sub_contractor` - Get CIS lines from sub contractor.
* `get_cis_lines_with_tag` - Get CIS lines with tag
* `get_cis_transaction_from_employer` - Get the CIS transaction
* `get_cis_transactions_from_employer` - Get all CIS transactions for the employer
* `get_commentaries_from_employee` - Get links to all commentaries for the specified employee
* `get_commentaries_from_pay_run` - Get links to all commentaries for the specified pay run
* `get_commentary_from_employee` - Get commentary from employee
* `get_commentary_from_pay_run_by_employee` - Get commentary from payrun by specified employee.
* `get_dps_job_info` - Get the DPS job information
* `get_dps_job_progress` - Get the DPS job progress
* `get_dps_job_status` - Get the DPS job status
* `get_dps_jobs` - Get all DPS jobs
* `get_dps_message_from_employer` - Gets the DPS message
* `get_dps_message_report_output` - Runs the DPS message report
* `get_dps_messages_from_employer` - Gets the DPS messages
* `get_employee_by_effective_date` - Get employee by effective date.
* `get_employee_from_employer` - Get employee from employer
* `get_employee_revision_by_number` - Gets the employee by revision number
* `get_employee_revisions` - Get all employee revisions
* `get_employee_secret` - Get employee secret
* `get_employee_secrets` - Get all employee secret links
* `get_employees_by_effective_date` - Get employees from employer at a given effective date.
* `get_employees_from_employer` - Get employees from employer.
* `get_employees_from_pay_run` - Get employees from the pay run
* `get_employees_from_pay_schedule` - Get all employees revisions from a pay schedule.
* `get_employees_from_pay_schedule_on_effective_date` - Get employees from a pay schedule on effective date.
* `get_employees_with_tag` - Get employees with tag
* `get_employer` - Gets the employer
* `get_employer_by_effective_date` - Gets the employer at the specified effective
* `get_employer_jobs` - Gets all jobs relating to the employer.
* `get_employer_revision_by_number` - Gets the employer by revision number
* `get_employer_revisions` - Gets the employer revisions
* `get_employer_secret` - Get employer secret
* `get_employer_secrets` - Get all employer secret links
* `get_employer_summary_report_ouput` - Runs the employer summary report
* `get_employers` - Gets all employers
* `get_employers_by_effective_date` - Gets all employers at the specified effective date
* `get_employers_with_tag` - Get employers with tag
* `get_gross_to_net_report_output` - Runs the gross to net report
* `get_health_check` - Get health check status
* `get_holiday_balance_report_output` - Runs the holiday balance report
* `get_holiday_scheme_by_effective_date` - Get holiday scheme by effective date.
* `get_holiday_scheme_from_employer` - Get holiday scheme from employer
* `get_holiday_scheme_revision_by_number` - Gets the holiday scheme revision by revision number
* `get_holiday_scheme_revisions` - Get all holiday scheme revisions
* `get_holiday_schemes_by_effective_date` - Get holiday schemes from employer at a given effective date.
* `get_holiday_schemes_from_employer` - Get holiday schemes from employer.
* `get_holiday_schemes_with_tag` - Get holiday schemes with tag
* `get_journal_expression_schema` - Gets the journal expression data schema
* `get_journal_instruction_from_employer` - Gets the specified journal instruction from the employer
* `get_journal_instruction_template` - Gets the Journal instructions template for the application
* `get_journal_instruction_templates` - Gets the Journal instructions templates for the application
* `get_journal_instructions_from_employer` - Gets the Journal instructions from the specified employer
* `get_journal_line_from_employer` - Gets the specified journal Line from the employer
* `get_journal_lines_from_employee` - Gets the journal Lines from the specified employee
* `get_journal_lines_from_employer` - Gets the Journal Lines from the specified employer
* `get_journal_lines_from_pay_run` - Gets the journal Lines from the specified pay run
* `get_journal_lines_from_sub_contractor` - Gets the journal Lines from the specified sub contractor
* `get_journal_report_ouput` - Runs the journal report
* `get_last_pay_date_report_ouput` - Runs the last pay date report
* `get_net_pay_report_output` - Runs the net pay report
* `get_next_pay_period_dates_report_output` - Runs the next pay period report
* `get_nominal_code_from_employer` - Gets the nominal code
* `get_nominal_codes_from_employer` - Gets the nominal codes
* `get_p11_summary_report_output` - Runs the P11 summary report
* `get_p32_net_report_output` - Runs the P32 report
* `get_p32_summary_net_report_output` - Runs the P32 summary report
* `get_p45_report_output` - Runs the P45 report
* `get_p60_report_output` - Runs the P60 report
* `get_papdis_report_ouput` - Runs the PAPDIS report
* `get_pass_report_ouput` - Runs the PASS report
* `get_pay_code_by_effective_date` - Gets pay code for specified date
* `get_pay_code_from_employer` - Gets the specified pay code from the employer
* `get_pay_code_revision_by_number` - Gets the pay code by revision number
* `get_pay_code_revisions` - Get all revisions of the Pay Code
* `get_pay_codes_by_effective_date` - Gets all pay codes for specified date
* `get_pay_codes_from_employer` - Gets the pay codes from the employer
* `get_pay_codes_from_nominal_code` - Gets the pay codes by nominal code
* `get_pay_codes_with_tag` - Get pay codes with tag
* `get_pay_dashboard_payslip_report_ouput` - Runs the Pay Dashboard payslips report
* `get_pay_instruction_from_employee` - Gets the specified pay instruction from the employee
* `get_pay_instructions_from_employee` - Gets the pay instructions from the specified employee
* `get_pay_instructions_with_tag` - Get pay instructions with tag
* `get_pay_line_from_employee` - Gets the specified pay line from the employee
* `get_pay_lines_from_employee` - Gets the pay lines from the specified employee
* `get_pay_lines_with_tag` - Get pay lines with tag
* `get_pay_run_from_pay_schedule` - Gets the pay run from the pay schedule
* `get_pay_run_job_info` - Get the pay run job information
* `get_pay_run_job_progress` - Get the pay run job progress
* `get_pay_run_job_status` - Get the pay run job status
* `get_pay_run_jobs` - Get all PayRun jobs
* `get_pay_runs_from_employee` - Gets the pay runs from the employee
* `get_pay_runs_from_pay_schedule` - Gets the pay runs from the pay schedule
* `get_pay_runs_with_tag` - Get pay runs with tag
* `get_pay_schedule_from_employer` - Gets the specified pay schedule from the employer
* `get_pay_schedules_from_employer` - Gets the pay schedule from the specified employer
* `get_pay_schedules_with_tag` - Get pay schedule with tag
* `get_payslip3_report_output` - Runs the verbose payslip report
* `get_pension_by_effective_date` - Get pension by effective date.
* `get_pension_from_employer` - Get pension from employer
* `get_pension_liability_report_output` - Runs the pension liability report
* `get_pension_revision_by_number` - Gets the pension by revision number
* `get_pension_revisions` - Get all pension revisions
* `get_pensions_by_effective_date` - Get pensions from employer at a given effective date.
* `get_pensions_from_employer` - Get pensions from employer.
* `get_permission` - Gets the permission object
* `get_permissions` - Gets all permission objects
* `get_query_response` - Get the query result
* `get_report_definition_from_application` - Get the report definition
* `get_report_definitions_from_application` - Gets all reports
* `get_report_line_from_employer` - Gets the specified report line from the employer
* `get_report_lines_from_employer` - Gets the report lines from the specified employer
* `get_report_lines_from_pay_run` - Gets the report lines from the specified pay run
* `get_report_output` - Runs the specified report definition
* `get_reporting_instruction_from_employer` - Gets the specified reporting instruction from the employer
* `get_reporting_instructions_from_employer` - Gets the reporting instructions from the specified employer
* `get_rti_job_info` - Get the RTI job information
* `get_rti_job_progress` - Get the RTI job progress
* `get_rti_job_status` - Get the RTI job status
* `get_rti_jobs` - Get all RTI jobs
* `get_rti_transaction_from_employer` - Get the RTI transaction
* `get_rti_transactions_from_employer` - Get all RTI transactions for the employer
* `get_rti_transactions_with_tag` - Get RTI transactions with tag
* `get_schema` - Get XSD schema
* `get_schemas` - Get a list of all available schemas
* `get_sub_contractor_by_effective_date` - Get sub contractor by effective date.
* `get_sub_contractor_from_employer` - Get sub contractor from employer
* `get_sub_contractor_revision_by_number` - Gets the sub contractor by revision number
* `get_sub_contractor_revisions` - Get all sub contractor revisions
* `get_sub_contractors_by_effective_date` - Get sub contractors from employer at a given effective date.
* `get_sub_contractors_from_employer` - Get sub contractors from employer.
* `get_sub_contractors_with_tag` - Get sub contractors with tag
* `get_tag_from_cis_instruction` - Get CIS instruction tag
* `get_tag_from_cis_line` - Get CIS line tag
* `get_tag_from_cis_line_type` - Get CIS line type tag
* `get_tag_from_employee` - Get employee tag
* `get_tag_from_employee_revision` - Get employee revision tag
* `get_tag_from_employer` - Get employer tag
* `get_tag_from_employer_revision` - Get employer revision tag
* `get_tag_from_holiday_scheme` - Get holiday scheme tag
* `get_tag_from_holiday_scheme_revision` - Get holiday scheme revision tag
* `get_tag_from_journal_line` - Get journal line tag
* `get_tag_from_pay_code` - Get pay code tag
* `get_tag_from_pay_instruction` - Get pay instruction tag
* `get_tag_from_pay_line` - Get pay line tag
* `get_tag_from_pay_run` - Get pay run tag
* `get_tag_from_pay_schedule` - Get pay schedule tag
* `get_tag_from_rti_transaction` - Get RTI transaction tag
* `get_tag_from_sub_contractor` - Get sub contractor tag
* `get_tag_from_sub_contractor_revision` - Get sub contractor revision tag
* `get_tag_from_third_party_transaction` - Get third party transaction tag
* `get_tag_from_user` - Get user tag
* `get_tags_from_cis_instruction` - Get all tags from the CIS instruction
* `get_tags_from_cis_line` - Get all tags from the CIS line
* `get_tags_from_cis_line_type` - Get all tags from the CIS line type
* `get_tags_from_employee` - Get all employee tags
* `get_tags_from_employee_revision` - Get all employee revision tags
* `get_tags_from_employer` - Get all employer tags
* `get_tags_from_employer_revision` - Get all employer revision tags
* `get_tags_from_holiday_scheme` - Get all tags from the holiday scheme
* `get_tags_from_holiday_scheme_revision` - Get all holiday scheme revision tags
* `get_tags_from_journal_line` - Get tags from journal line
* `get_tags_from_pay_code` - Get all pay code tags
* `get_tags_from_pay_instruction` - Get all tags from the pay instruction
* `get_tags_from_pay_line` - Get all tags from the pay line
* `get_tags_from_pay_run` - Get all pay run tags
* `get_tags_from_pay_schedule` - Get all pay schedule tags
* `get_tags_from_rti_transaction` - Get all tags from RTI transaction
* `get_tags_from_sub_contractor` - Get all tags from the sub contractor
* `get_tags_from_sub_contractor_revision` - Get all sub contractor revision tags
* `get_tags_from_third_party_transaction` - Get tags from third party transaction
* `get_tags_from_user` - Get tags from user
* `get_template_model` - Get the object template
* `get_templates` - Get a list of all available data object tempaltes
* `get_third_party_job_info` - Get the Third Party job information
* `get_third_party_job_progress` - Get the Third Party job progress
* `get_third_party_job_status` - Get the Third Party job status
* `get_third_party_jobs` - Get all Third Party jobs
* `get_third_party_transaction` - Get a third party transaction
* `get_third_party_transactions` - Get all third party transaction links
* `get_transform_definition_from_application` - Get the transform definition
* `get_transform_definitions_from_application` - Gets all transform definitions
* `get_user` - Gets the user object
* `get_users` - Gets all user objects
* `patch_cis_instruction` - Patches the CIS instruction
* `patch_dps_message` - Patches the DPS message
* `patch_employee` - Patches the employee
* `patch_employer` - Patches the employer
* `patch_holiday_scheme` - Patches the holiday scheme
* `patch_pay_code` - Patches the pay code
* `patch_pay_instruction` - Sparse Update of a Pay Instruction
* `patch_pension` - Patches the pension
* `patch_permission` - Patch permission object
* `patch_sub_contractor` - Patches the sub contractor
* `patch_user` - Patch user object
* `post_cis_instruction_into_sub_contractor` - Create a new CIS instruction
* `post_cis_line_type_into_employer` - Create a new CIS line type
* `post_dps_message` - Posta the DPS message
* `post_employee_into_employer` - Create a new Employee
* `post_employee_secret` - Create a new employee secret
* `post_employer` - Create a new Employer
* `post_employer_secret` - Create a new employer secret
* `post_holiday_scheme_into_employer` - Create a new holiday scheme
* `post_journal_instruction` - Creates a new Journal Instruction
* `post_journal_instruction_template` - Creates a new Journal Instruction template
* `post_new_ae_assessment` - Insert new auto enrolment assessment
* `post_new_batch_job` - Create new Batch job
* `post_new_cis_job` - Create new CIS job
* `post_new_dps_job` - Create new DPS job
* `post_new_pay_run_job` - Create new PayRun job
* `post_new_rti_job` - Create new RTI job
* `post_new_third_party_job` - Create new Third Party job
* `post_nominal_code` - Insert nominal code
* `post_pay_code` - Create a new pay code
* `post_pay_instruction` - Creates a new Pay Instruction
* `post_pay_schedule` - Create a new pay schedule
* `post_pension_into_employer` - Create a new Pension
* `post_permission` - Post permisson object
* `post_report_definition` - Create a new report definition
* `post_reporting_instruction` - Creates a new Reporting Instruction
* `post_sub_contractor_into_employer` - Create a new sub contractor
* `post_transform_definition` - Create a new transform definition
* `post_user` - Post user object
* `put_cis_instruction_into_sub_contractor` - Updates the CIS instruction
* `put_cis_instruction_tag` - Insert CIS instruction tag
* `put_cis_line_tag` - Insert CIS line tag
* `put_cis_line_type_into_employer` - Updates the CIS line type
* `put_cis_line_type_tag` - Insert CIS line type tag
* `put_dps_message` - Puts the DPS message
* `put_employee_into_employer` - Updates the Employee
* `put_employee_secret` - Create a new employee secret
* `put_employee_tag` - Insert employee tag
* `put_employer` - Updates the Employer
* `put_employer_secret` - Create a new employer secret
* `put_employer_tag` - Insert employer tag
* `put_holiday_scheme_into_employer` - Updates the holiday scheme
* `put_holiday_scheme_tag` - Insert holiday scheme tag
* `put_journal_instruction` - Update a Journal Instruction
* `put_journal_instruction_template` - Update a Journal Instruction template
* `put_journal_line_tag` - Insert journal line tag
* `put_new_ae_assessment` - Insert new auto enrolment assessment
* `put_nominal_code` - Insert nominal code
* `put_pay_code` - Updates a pay code
* `put_pay_code_tag` - Insert pay code tag
* `put_pay_instruction` - Update a Pay Instruction
* `put_pay_instruction_tag` - Insert pay instruction tag
* `put_pay_line_tag` - Insert pay line tag
* `put_pay_run_tag` - Insert pay run tag
* `put_pay_schedule` - Updates a pay schedule
* `put_pay_schedule_tag` - Insert pay schedule tag
* `put_pension_into_employer` - Updates the Pension
* `put_permission` - Puts permisson object
* `put_report_definition` - Updates a report definition
* `put_reporting_instruction` - Update a reporting Instruction
* `put_rti_transaction_tag` - Insert RTI transaction tag
* `put_sub_contractor_into_employer` - Updates the sub contractor
* `put_sub_contractor_tag` - Insert sub contractor tag
* `put_third_party_transaction_tag` - insert third party transaction tag
* `put_transform_definition` - Updates a transform definition
* `put_user` - Puts user object
* `put_user_tag` - Insert user tag

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
