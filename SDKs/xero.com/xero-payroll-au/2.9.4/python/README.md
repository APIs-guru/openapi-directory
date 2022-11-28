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
    
req = operations.CreateEmployeeRequest(
    security=operations.CreateEmployeeSecurity(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    headers=operations.CreateEmployeeHeaders(
        xero_tenant_id="et",
    ),
    request=[
        shared.EmployeeInput(
            bank_accounts=[
                shared.BankAccount(
                    account_name="eligendi",
                    account_number="consequatur",
                    amount=62.200001,
                    bsb="rerum",
                    remainder=True,
                    statement_text="ut",
                ),
            ],
            classification="dolorum",
            date_of_birth="facere",
            email="sunt",
            employee_group_name="accusantium",
            employee_id="cum",
            first_name="delectus",
            gender="I",
            home_address=shared.HomeAddress(
                address_line1="et",
                address_line2="dolor",
                city="velit",
                country="alias",
                postal_code="hic",
                region="ACT",
            ),
            is_authorised_to_approve_leave=False,
            is_authorised_to_approve_timesheets=True,
            job_title="quis",
            last_name="blanditiis",
            leave_balances=[
                shared.LeaveBalance(
                    leave_name="quos",
                    leave_type_id="accusamus",
                    number_of_units=64.199997,
                    type_of_units="ut",
                ),
                shared.LeaveBalance(
                    leave_name="harum",
                    leave_type_id="soluta",
                    number_of_units=39.099998,
                    type_of_units="consequatur",
                ),
            ],
            leave_lines=[
                shared.LeaveLine(
                    annual_number_of_units=78.099998,
                    calculation_type="FIXEDAMOUNTEACHPERIOD",
                    employment_termination_payment_type="R",
                    entitlement_final_pay_payout_type="PAIDOUT",
                    full_time_number_of_units_per_period=11.200000,
                    include_superannuation_guarantee_contribution=False,
                    leave_type_id="perferendis",
                    number_of_units=70.099998,
                ),
            ],
            middle_names="minus",
            mobile="possimus",
            opening_balances=shared.OpeningBalances(
                deduction_lines=[
                    shared.DeductionLine(
                        amount=70.099998,
                        calculation_type="FIXEDAMOUNT",
                        deduction_type_id="nemo",
                        number_of_units=48.099998,
                        percentage=1.100000,
                    ),
                    shared.DeductionLine(
                        amount=7.100000,
                        calculation_type="POSTTAX",
                        deduction_type_id="aut",
                        number_of_units=99.199997,
                        percentage=35.099998,
                    ),
                    shared.DeductionLine(
                        amount=7.100000,
                        calculation_type="PRETAX",
                        deduction_type_id="dicta",
                        number_of_units=3.100000,
                        percentage=23.200001,
                    ),
                ],
                earnings_lines=[
                    shared.EarningsLine(
                        amount=5.200000,
                        annual_salary=12.100000,
                        calculation_type="USEEARNINGSRATE",
                        earnings_rate_id="nemo",
                        fixed_amount=71.099998,
                        normal_number_of_units=17.200001,
                        number_of_units=51.099998,
                        number_of_units_per_week=49.099998,
                        rate_per_unit=86.199997,
                    ),
                    shared.EarningsLine(
                        amount=89.199997,
                        annual_salary=70.199997,
                        calculation_type="ENTEREARNINGSRATE",
                        earnings_rate_id="repudiandae",
                        fixed_amount=42.200001,
                        normal_number_of_units=92.099998,
                        number_of_units=52.200001,
                        number_of_units_per_week=77.199997,
                        rate_per_unit=94.099998,
                    ),
                ],
                leave_lines=[
                    shared.LeaveLine(
                        annual_number_of_units=15.100000,
                        calculation_type="FIXEDAMOUNTEACHPERIOD",
                        employment_termination_payment_type="R",
                        entitlement_final_pay_payout_type="PAIDOUT",
                        full_time_number_of_units_per_period=77.199997,
                        include_superannuation_guarantee_contribution=False,
                        leave_type_id="aperiam",
                        number_of_units=60.200001,
                    ),
                    shared.LeaveLine(
                        annual_number_of_units=0.200000,
                        calculation_type="",
                        employment_termination_payment_type="O",
                        entitlement_final_pay_payout_type="PAIDOUT",
                        full_time_number_of_units_per_period=78.199997,
                        include_superannuation_guarantee_contribution=False,
                        leave_type_id="pariatur",
                        number_of_units=86.199997,
                    ),
                    shared.LeaveLine(
                        annual_number_of_units=54.099998,
                        calculation_type="FIXEDAMOUNTEACHPERIOD",
                        employment_termination_payment_type="O",
                        entitlement_final_pay_payout_type="PAIDOUT",
                        full_time_number_of_units_per_period=49.099998,
                        include_superannuation_guarantee_contribution=False,
                        leave_type_id="iure",
                        number_of_units=36.099998,
                    ),
                ],
                opening_balance_date="nemo",
                reimbursement_lines=[
                    shared.ReimbursementLine(
                        amount=15.100000,
                        description="cum",
                        expense_account="est",
                        reimbursement_type_id="minima",
                    ),
                    shared.ReimbursementLine(
                        amount=69.099998,
                        description="consequatur",
                        expense_account="nemo",
                        reimbursement_type_id="dicta",
                    ),
                ],
                super_lines=[
                    shared.SuperLine(
                        amount=32.099998,
                        calculation_type="FIXEDAMOUNT",
                        contribution_type="EMPLOYERADDITIONAL",
                        expense_account_code="officiis",
                        liability_account_code="ut",
                        minimum_monthly_earnings=6.200000,
                        percentage=5.100000,
                        super_membership_id="porro",
                    ),
                    shared.SuperLine(
                        amount=1.200000,
                        calculation_type="FIXEDAMOUNT",
                        contribution_type="SALARYSACRIFICE",
                        expense_account_code="autem",
                        liability_account_code="a",
                        minimum_monthly_earnings=77.199997,
                        percentage=40.099998,
                        super_membership_id="explicabo",
                    ),
                    shared.SuperLine(
                        amount=85.199997,
                        calculation_type="PERCENTAGEOFEARNINGS",
                        contribution_type="SGC",
                        expense_account_code="et",
                        liability_account_code="voluptas",
                        minimum_monthly_earnings=19.100000,
                        percentage=72.099998,
                        super_membership_id="quia",
                    ),
                ],
                tax="et",
            ),
            ordinary_earnings_rate_id="blanditiis",
            pay_template=shared.PayTemplate(
                deduction_lines=[
                    shared.DeductionLine(
                        amount=62.200001,
                        calculation_type="FIXEDAMOUNT",
                        deduction_type_id="ex",
                        number_of_units=53.200001,
                        percentage=3.100000,
                    ),
                ],
                earnings_lines=[
                    shared.EarningsLine(
                        amount=45.099998,
                        annual_salary=42.200001,
                        calculation_type="ANNUALSALARY",
                        earnings_rate_id="et",
                        fixed_amount=89.199997,
                        normal_number_of_units=27.100000,
                        number_of_units=90.199997,
                        number_of_units_per_week=82.199997,
                        rate_per_unit=64.199997,
                    ),
                ],
                leave_lines=[
                    shared.LeaveLine(
                        annual_number_of_units=44.099998,
                        calculation_type="",
                        employment_termination_payment_type="O",
                        entitlement_final_pay_payout_type="NOTPAIDOUT",
                        full_time_number_of_units_per_period=68.099998,
                        include_superannuation_guarantee_contribution=True,
                        leave_type_id="qui",
                        number_of_units=92.099998,
                    ),
                ],
                reimbursement_lines=[
                    shared.ReimbursementLine(
                        amount=17.100000,
                        description="tenetur",
                        expense_account="quia",
                        reimbursement_type_id="rerum",
                    ),
                    shared.ReimbursementLine(
                        amount=32.099998,
                        description="a",
                        expense_account="nam",
                        reimbursement_type_id="perspiciatis",
                    ),
                ],
                super_lines=[
                    shared.SuperLine(
                        amount=33.099998,
                        calculation_type="PERCENTAGEOFEARNINGS",
                        contribution_type="EMPLOYEE",
                        expense_account_code="et",
                        liability_account_code="aperiam",
                        minimum_monthly_earnings=35.099998,
                        percentage=35.099998,
                        super_membership_id="aut",
                    ),
                    shared.SuperLine(
                        amount=47.200001,
                        calculation_type="STATUTORY",
                        contribution_type="SALARYSACRIFICE",
                        expense_account_code="at",
                        liability_account_code="voluptatum",
                        minimum_monthly_earnings=62.099998,
                        percentage=6.200000,
                        super_membership_id="magnam",
                    ),
                    shared.SuperLine(
                        amount=34.200001,
                        calculation_type="STATUTORY",
                        contribution_type="SALARYSACRIFICE",
                        expense_account_code="ex",
                        liability_account_code="id",
                        minimum_monthly_earnings=29.100000,
                        percentage=44.200001,
                        super_membership_id="harum",
                    ),
                ],
            ),
            payroll_calendar_id="aut",
            phone="enim",
            start_date="possimus",
            status="ACTIVE",
            super_memberships=[
                shared.SuperMembership(
                    employee_number="sequi",
                    super_fund_id="praesentium",
                    super_membership_id="temporibus",
                ),
            ],
            tax_declaration=shared.TaxDeclarationInput(
                approved_withholding_variation_percentage=8.200000,
                australian_resident_for_tax_purposes=False,
                eligible_to_receive_leave_loading=False,
                employee_id="eum",
                employment_basis="LABOURHIRE",
                has_help_debt=False,
                has_sfss_debt=True,
                has_student_startup_loan=True,
                has_trade_support_loan_debt=False,
                residency_status="AUSTRALIANRESIDENT",
                tfn_exemption_type="PENDING",
                tax_file_number="optio",
                tax_free_threshold_claimed=False,
                tax_offset_estimated_amount=62.200001,
                upward_variation_tax_withholding_amount=71.099998,
            ),
            termination_date="sunt",
            title="perspiciatis",
            twitter_user_name="placeat",
            validation_errors=[
                shared.ValidationError(
                    message="fugiat",
                ),
                shared.ValidationError(
                    message="aut",
                ),
            ],
        ),
    ],
)
    
res = s.payroll_au.create_employee(req)

if res.employees is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### PayrollAu

* `create_employee` - Creates a payroll employee
* `create_leave_application` - Creates a leave application
* `create_pay_item` - Creates a pay item
* `create_pay_run` - Creates a pay run
* `create_payroll_calendar` - Creates a Payroll Calendar
* `create_superfund` - Creates a superfund
* `create_timesheet` - Creates a timesheet
* `get_employee` - Retrieves an employee's detail by unique employee id
* `get_employees` - Searches payroll employees
* `get_leave_application` - Retrieves a leave application by a unique leave application id
* `get_leave_applications` - Retrieves leave applications
* `get_pay_items` - Retrieves pay items
* `get_pay_run` - Retrieves a pay run by using a unique pay run id
* `get_pay_runs` - Retrieves pay runs
* `get_payroll_calendar` - Retrieves payroll calendar by using a unique payroll calendar ID
* `get_payroll_calendars` - Retrieves payroll calendars
* `get_payslip` - Retrieves for a payslip by a unique payslip id
* `get_settings` - Retrieves payroll settings
* `get_superfund` - Retrieves a superfund by using a unique superfund ID
* `get_superfund_products` - Retrieves superfund products
* `get_superfunds` - Retrieves superfunds
* `get_timesheet` - Retrieves a timesheet by using a unique timesheet id
* `get_timesheets` - Retrieves timesheets
* `update_employee` - Updates an employee's detail
* `update_leave_application` - Updates a specific leave application
* `update_pay_run` - Updates a pay run
* `update_payslip` - Updates a payslip
* `update_superfund` - Updates a superfund
* `update_timesheet` - Updates a timesheet

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
