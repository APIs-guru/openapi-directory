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
    
    req := operations.CreateEmployeeRequest{
        Security: operations.CreateEmployeeSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateEmployeeHeaders{
            XeroTenantID: "et",
        },
        Request: []shared.EmployeeInput{
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: "eligendi",
                        AccountNumber: "consequatur",
                        Amount: 62.200001,
                        Bsb: "rerum",
                        Remainder: true,
                        StatementText: "ut",
                    },
                },
                Classification: "dolorum",
                DateOfBirth: "facere",
                Email: "sunt",
                EmployeeGroupName: "accusantium",
                EmployeeID: "cum",
                FirstName: "delectus",
                Gender: "I",
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "et",
                    AddressLine2: "dolor",
                    City: "velit",
                    Country: "alias",
                    PostalCode: "hic",
                    Region: "ACT",
                },
                IsAuthorisedToApproveLeave: false,
                IsAuthorisedToApproveTimesheets: true,
                JobTitle: "quis",
                LastName: "blanditiis",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: "quos",
                        LeaveTypeID: "accusamus",
                        NumberOfUnits: 64.199997,
                        TypeOfUnits: "ut",
                    },
                    shared.LeaveBalance{
                        LeaveName: "harum",
                        LeaveTypeID: "soluta",
                        NumberOfUnits: 39.099998,
                        TypeOfUnits: "consequatur",
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 78.099998,
                        CalculationType: "FIXEDAMOUNTEACHPERIOD",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 11.200000,
                        IncludeSuperannuationGuaranteeContribution: false,
                        LeaveTypeID: "perferendis",
                        NumberOfUnits: 70.099998,
                    },
                },
                MiddleNames: "minus",
                Mobile: "possimus",
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 70.099998,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "nemo",
                            NumberOfUnits: 48.099998,
                            Percentage: 1.100000,
                        },
                        shared.DeductionLine{
                            Amount: 7.100000,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "aut",
                            NumberOfUnits: 99.199997,
                            Percentage: 35.099998,
                        },
                        shared.DeductionLine{
                            Amount: 7.100000,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "dicta",
                            NumberOfUnits: 3.100000,
                            Percentage: 23.200001,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 5.200000,
                            AnnualSalary: 12.100000,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "nemo",
                            FixedAmount: 71.099998,
                            NormalNumberOfUnits: 17.200001,
                            NumberOfUnits: 51.099998,
                            NumberOfUnitsPerWeek: 49.099998,
                            RatePerUnit: 86.199997,
                        },
                        shared.EarningsLine{
                            Amount: 89.199997,
                            AnnualSalary: 70.199997,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "repudiandae",
                            FixedAmount: 42.200001,
                            NormalNumberOfUnits: 92.099998,
                            NumberOfUnits: 52.200001,
                            NumberOfUnitsPerWeek: 77.199997,
                            RatePerUnit: 94.099998,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 15.100000,
                            CalculationType: "FIXEDAMOUNTEACHPERIOD",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 77.199997,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "aperiam",
                            NumberOfUnits: 60.200001,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 0.200000,
                            CalculationType: "",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 78.199997,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "pariatur",
                            NumberOfUnits: 86.199997,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 54.099998,
                            CalculationType: "FIXEDAMOUNTEACHPERIOD",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 49.099998,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "iure",
                            NumberOfUnits: 36.099998,
                        },
                    },
                    OpeningBalanceDate: "nemo",
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 15.100000,
                            Description: "cum",
                            ExpenseAccount: "est",
                            ReimbursementTypeID: "minima",
                        },
                        shared.ReimbursementLine{
                            Amount: 69.099998,
                            Description: "consequatur",
                            ExpenseAccount: "nemo",
                            ReimbursementTypeID: "dicta",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 32.099998,
                            CalculationType: "FIXEDAMOUNT",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "officiis",
                            LiabilityAccountCode: "ut",
                            MinimumMonthlyEarnings: 6.200000,
                            Percentage: 5.100000,
                            SuperMembershipID: "porro",
                        },
                        shared.SuperLine{
                            Amount: 1.200000,
                            CalculationType: "FIXEDAMOUNT",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "autem",
                            LiabilityAccountCode: "a",
                            MinimumMonthlyEarnings: 77.199997,
                            Percentage: 40.099998,
                            SuperMembershipID: "explicabo",
                        },
                        shared.SuperLine{
                            Amount: 85.199997,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "et",
                            LiabilityAccountCode: "voluptas",
                            MinimumMonthlyEarnings: 19.100000,
                            Percentage: 72.099998,
                            SuperMembershipID: "quia",
                        },
                    },
                    Tax: "et",
                },
                OrdinaryEarningsRateID: "blanditiis",
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 62.200001,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "ex",
                            NumberOfUnits: 53.200001,
                            Percentage: 3.100000,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 45.099998,
                            AnnualSalary: 42.200001,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "et",
                            FixedAmount: 89.199997,
                            NormalNumberOfUnits: 27.100000,
                            NumberOfUnits: 90.199997,
                            NumberOfUnitsPerWeek: 82.199997,
                            RatePerUnit: 64.199997,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 44.099998,
                            CalculationType: "",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 68.099998,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "qui",
                            NumberOfUnits: 92.099998,
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 17.100000,
                            Description: "tenetur",
                            ExpenseAccount: "quia",
                            ReimbursementTypeID: "rerum",
                        },
                        shared.ReimbursementLine{
                            Amount: 32.099998,
                            Description: "a",
                            ExpenseAccount: "nam",
                            ReimbursementTypeID: "perspiciatis",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 33.099998,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "EMPLOYEE",
                            ExpenseAccountCode: "et",
                            LiabilityAccountCode: "aperiam",
                            MinimumMonthlyEarnings: 35.099998,
                            Percentage: 35.099998,
                            SuperMembershipID: "aut",
                        },
                        shared.SuperLine{
                            Amount: 47.200001,
                            CalculationType: "STATUTORY",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "at",
                            LiabilityAccountCode: "voluptatum",
                            MinimumMonthlyEarnings: 62.099998,
                            Percentage: 6.200000,
                            SuperMembershipID: "magnam",
                        },
                        shared.SuperLine{
                            Amount: 34.200001,
                            CalculationType: "STATUTORY",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "ex",
                            LiabilityAccountCode: "id",
                            MinimumMonthlyEarnings: 29.100000,
                            Percentage: 44.200001,
                            SuperMembershipID: "harum",
                        },
                    },
                },
                PayrollCalendarID: "aut",
                Phone: "enim",
                StartDate: "possimus",
                Status: "ACTIVE",
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "sequi",
                        SuperFundID: "praesentium",
                        SuperMembershipID: "temporibus",
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: 8.200000,
                    AustralianResidentForTaxPurposes: false,
                    EligibleToReceiveLeaveLoading: false,
                    EmployeeID: "eum",
                    EmploymentBasis: "LABOURHIRE",
                    HasHelpDebt: false,
                    HasSfssDebt: true,
                    HasStudentStartupLoan: true,
                    HasTradeSupportLoanDebt: false,
                    ResidencyStatus: "AUSTRALIANRESIDENT",
                    TfnExemptionType: "PENDING",
                    TaxFileNumber: "optio",
                    TaxFreeThresholdClaimed: false,
                    TaxOffsetEstimatedAmount: 62.200001,
                    UpwardVariationTaxWithholdingAmount: 71.099998,
                },
                TerminationDate: "sunt",
                Title: "perspiciatis",
                TwitterUserName: "placeat",
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: "fugiat",
                    },
                    shared.ValidationError{
                        Message: "aut",
                    },
                },
            },
        },
    }
    
    res, err := s.PayrollAu.CreateEmployee(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Employees != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### PayrollAu

* `CreateEmployee` - Creates a payroll employee
* `CreateLeaveApplication` - Creates a leave application
* `CreatePayItem` - Creates a pay item
* `CreatePayRun` - Creates a pay run
* `CreatePayrollCalendar` - Creates a Payroll Calendar
* `CreateSuperfund` - Creates a superfund
* `CreateTimesheet` - Creates a timesheet
* `GetEmployee` - Retrieves an employee's detail by unique employee id
* `GetEmployees` - Searches payroll employees
* `GetLeaveApplication` - Retrieves a leave application by a unique leave application id
* `GetLeaveApplications` - Retrieves leave applications
* `GetPayItems` - Retrieves pay items
* `GetPayRun` - Retrieves a pay run by using a unique pay run id
* `GetPayRuns` - Retrieves pay runs
* `GetPayrollCalendar` - Retrieves payroll calendar by using a unique payroll calendar ID
* `GetPayrollCalendars` - Retrieves payroll calendars
* `GetPayslip` - Retrieves for a payslip by a unique payslip id
* `GetSettings` - Retrieves payroll settings
* `GetSuperfund` - Retrieves a superfund by using a unique superfund ID
* `GetSuperfundProducts` - Retrieves superfund products
* `GetSuperfunds` - Retrieves superfunds
* `GetTimesheet` - Retrieves a timesheet by using a unique timesheet id
* `GetTimesheets` - Retrieves timesheets
* `UpdateEmployee` - Updates an employee's detail
* `UpdateLeaveApplication` - Updates a specific leave application
* `UpdatePayRun` - Updates a pay run
* `UpdatePayslip` - Updates a payslip
* `UpdateSuperfund` - Updates a superfund
* `UpdateTimesheet` - Updates a timesheet

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
