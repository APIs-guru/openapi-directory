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
import { CreateEmployeeRequest, CreateEmployeeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateEmployeeRequest = {
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  headers: {
    xeroTenantId: "et",
  },
  request: [
    {
      bankAccounts: [
        {
          accountName: "eligendi",
          accountNumber: "consequatur",
          amount: 62.200001,
          bsb: "rerum",
          remainder: true,
          statementText: "ut",
        },
      ],
      classification: "dolorum",
      dateOfBirth: "facere",
      email: "sunt",
      employeeGroupName: "accusantium",
      employeeId: "cum",
      firstName: "delectus",
      gender: "I",
      homeAddress: {
        addressLine1: "et",
        addressLine2: "dolor",
        city: "velit",
        country: "alias",
        postalCode: "hic",
        region: "ACT",
      },
      isAuthorisedToApproveLeave: false,
      isAuthorisedToApproveTimesheets: true,
      jobTitle: "quis",
      lastName: "blanditiis",
      leaveBalances: [
        {
          leaveName: "quos",
          leaveTypeId: "accusamus",
          numberOfUnits: 64.199997,
          typeOfUnits: "ut",
        },
        {
          leaveName: "harum",
          leaveTypeId: "soluta",
          numberOfUnits: 39.099998,
          typeOfUnits: "consequatur",
        },
      ],
      leaveLines: [
        {
          annualNumberOfUnits: 78.099998,
          calculationType: "FIXEDAMOUNTEACHPERIOD",
          employmentTerminationPaymentType: "R",
          entitlementFinalPayPayoutType: "PAIDOUT",
          fullTimeNumberOfUnitsPerPeriod: 11.200000,
          includeSuperannuationGuaranteeContribution: false,
          leaveTypeId: "perferendis",
          numberOfUnits: 70.099998,
        },
      ],
      middleNames: "minus",
      mobile: "possimus",
      openingBalances: {
        deductionLines: [
          {
            amount: 70.099998,
            calculationType: "FIXEDAMOUNT",
            deductionTypeId: "nemo",
            numberOfUnits: 48.099998,
            percentage: 1.100000,
          },
          {
            amount: 7.100000,
            calculationType: "POSTTAX",
            deductionTypeId: "aut",
            numberOfUnits: 99.199997,
            percentage: 35.099998,
          },
          {
            amount: 7.100000,
            calculationType: "PRETAX",
            deductionTypeId: "dicta",
            numberOfUnits: 3.100000,
            percentage: 23.200001,
          },
        ],
        earningsLines: [
          {
            amount: 5.200000,
            annualSalary: 12.100000,
            calculationType: "USEEARNINGSRATE",
            earningsRateId: "nemo",
            fixedAmount: 71.099998,
            normalNumberOfUnits: 17.200001,
            numberOfUnits: 51.099998,
            numberOfUnitsPerWeek: 49.099998,
            ratePerUnit: 86.199997,
          },
          {
            amount: 89.199997,
            annualSalary: 70.199997,
            calculationType: "ENTEREARNINGSRATE",
            earningsRateId: "repudiandae",
            fixedAmount: 42.200001,
            normalNumberOfUnits: 92.099998,
            numberOfUnits: 52.200001,
            numberOfUnitsPerWeek: 77.199997,
            ratePerUnit: 94.099998,
          },
        ],
        leaveLines: [
          {
            annualNumberOfUnits: 15.100000,
            calculationType: "FIXEDAMOUNTEACHPERIOD",
            employmentTerminationPaymentType: "R",
            entitlementFinalPayPayoutType: "PAIDOUT",
            fullTimeNumberOfUnitsPerPeriod: 77.199997,
            includeSuperannuationGuaranteeContribution: false,
            leaveTypeId: "aperiam",
            numberOfUnits: 60.200001,
          },
          {
            annualNumberOfUnits: 0.200000,
            calculationType: "",
            employmentTerminationPaymentType: "O",
            entitlementFinalPayPayoutType: "PAIDOUT",
            fullTimeNumberOfUnitsPerPeriod: 78.199997,
            includeSuperannuationGuaranteeContribution: false,
            leaveTypeId: "pariatur",
            numberOfUnits: 86.199997,
          },
          {
            annualNumberOfUnits: 54.099998,
            calculationType: "FIXEDAMOUNTEACHPERIOD",
            employmentTerminationPaymentType: "O",
            entitlementFinalPayPayoutType: "PAIDOUT",
            fullTimeNumberOfUnitsPerPeriod: 49.099998,
            includeSuperannuationGuaranteeContribution: false,
            leaveTypeId: "iure",
            numberOfUnits: 36.099998,
          },
        ],
        openingBalanceDate: "nemo",
        reimbursementLines: [
          {
            amount: 15.100000,
            description: "cum",
            expenseAccount: "est",
            reimbursementTypeId: "minima",
          },
          {
            amount: 69.099998,
            description: "consequatur",
            expenseAccount: "nemo",
            reimbursementTypeId: "dicta",
          },
        ],
        superLines: [
          {
            amount: 32.099998,
            calculationType: "FIXEDAMOUNT",
            contributionType: "EMPLOYERADDITIONAL",
            expenseAccountCode: "officiis",
            liabilityAccountCode: "ut",
            minimumMonthlyEarnings: 6.200000,
            percentage: 5.100000,
            superMembershipId: "porro",
          },
          {
            amount: 1.200000,
            calculationType: "FIXEDAMOUNT",
            contributionType: "SALARYSACRIFICE",
            expenseAccountCode: "autem",
            liabilityAccountCode: "a",
            minimumMonthlyEarnings: 77.199997,
            percentage: 40.099998,
            superMembershipId: "explicabo",
          },
          {
            amount: 85.199997,
            calculationType: "PERCENTAGEOFEARNINGS",
            contributionType: "SGC",
            expenseAccountCode: "et",
            liabilityAccountCode: "voluptas",
            minimumMonthlyEarnings: 19.100000,
            percentage: 72.099998,
            superMembershipId: "quia",
          },
        ],
        tax: "et",
      },
      ordinaryEarningsRateId: "blanditiis",
      payTemplate: {
        deductionLines: [
          {
            amount: 62.200001,
            calculationType: "FIXEDAMOUNT",
            deductionTypeId: "ex",
            numberOfUnits: 53.200001,
            percentage: 3.100000,
          },
        ],
        earningsLines: [
          {
            amount: 45.099998,
            annualSalary: 42.200001,
            calculationType: "ANNUALSALARY",
            earningsRateId: "et",
            fixedAmount: 89.199997,
            normalNumberOfUnits: 27.100000,
            numberOfUnits: 90.199997,
            numberOfUnitsPerWeek: 82.199997,
            ratePerUnit: 64.199997,
          },
        ],
        leaveLines: [
          {
            annualNumberOfUnits: 44.099998,
            calculationType: "",
            employmentTerminationPaymentType: "O",
            entitlementFinalPayPayoutType: "NOTPAIDOUT",
            fullTimeNumberOfUnitsPerPeriod: 68.099998,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeId: "qui",
            numberOfUnits: 92.099998,
          },
        ],
        reimbursementLines: [
          {
            amount: 17.100000,
            description: "tenetur",
            expenseAccount: "quia",
            reimbursementTypeId: "rerum",
          },
          {
            amount: 32.099998,
            description: "a",
            expenseAccount: "nam",
            reimbursementTypeId: "perspiciatis",
          },
        ],
        superLines: [
          {
            amount: 33.099998,
            calculationType: "PERCENTAGEOFEARNINGS",
            contributionType: "EMPLOYEE",
            expenseAccountCode: "et",
            liabilityAccountCode: "aperiam",
            minimumMonthlyEarnings: 35.099998,
            percentage: 35.099998,
            superMembershipId: "aut",
          },
          {
            amount: 47.200001,
            calculationType: "STATUTORY",
            contributionType: "SALARYSACRIFICE",
            expenseAccountCode: "at",
            liabilityAccountCode: "voluptatum",
            minimumMonthlyEarnings: 62.099998,
            percentage: 6.200000,
            superMembershipId: "magnam",
          },
          {
            amount: 34.200001,
            calculationType: "STATUTORY",
            contributionType: "SALARYSACRIFICE",
            expenseAccountCode: "ex",
            liabilityAccountCode: "id",
            minimumMonthlyEarnings: 29.100000,
            percentage: 44.200001,
            superMembershipId: "harum",
          },
        ],
      },
      payrollCalendarId: "aut",
      phone: "enim",
      startDate: "possimus",
      status: "ACTIVE",
      superMemberships: [
        {
          employeeNumber: "sequi",
          superFundId: "praesentium",
          superMembershipId: "temporibus",
        },
      ],
      taxDeclaration: {
        approvedWithholdingVariationPercentage: 8.200000,
        australianResidentForTaxPurposes: false,
        eligibleToReceiveLeaveLoading: false,
        employeeId: "eum",
        employmentBasis: "LABOURHIRE",
        hasHelpDebt: false,
        hasSfssDebt: true,
        hasStudentStartupLoan: true,
        hasTradeSupportLoanDebt: false,
        residencyStatus: "AUSTRALIANRESIDENT",
        tfnExemptionType: "PENDING",
        taxFileNumber: "optio",
        taxFreeThresholdClaimed: false,
        taxOffsetEstimatedAmount: 62.200001,
        upwardVariationTaxWithholdingAmount: 71.099998,
      },
      terminationDate: "sunt",
      title: "perspiciatis",
      twitterUserName: "placeat",
      validationErrors: [
        {
          message: "fugiat",
        },
        {
          message: "aut",
        },
      ],
    },
  ],
};

sdk.payrollAu.createEmployee(req).then((res: CreateEmployeeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### PayrollAu

* `createEmployee` - Creates a payroll employee
* `createLeaveApplication` - Creates a leave application
* `createPayItem` - Creates a pay item
* `createPayRun` - Creates a pay run
* `createPayrollCalendar` - Creates a Payroll Calendar
* `createSuperfund` - Creates a superfund
* `createTimesheet` - Creates a timesheet
* `getEmployee` - Retrieves an employee's detail by unique employee id
* `getEmployees` - Searches payroll employees
* `getLeaveApplication` - Retrieves a leave application by a unique leave application id
* `getLeaveApplications` - Retrieves leave applications
* `getPayItems` - Retrieves pay items
* `getPayRun` - Retrieves a pay run by using a unique pay run id
* `getPayRuns` - Retrieves pay runs
* `getPayrollCalendar` - Retrieves payroll calendar by using a unique payroll calendar ID
* `getPayrollCalendars` - Retrieves payroll calendars
* `getPayslip` - Retrieves for a payslip by a unique payslip id
* `getSettings` - Retrieves payroll settings
* `getSuperfund` - Retrieves a superfund by using a unique superfund ID
* `getSuperfundProducts` - Retrieves superfund products
* `getSuperfunds` - Retrieves superfunds
* `getTimesheet` - Retrieves a timesheet by using a unique timesheet id
* `getTimesheets` - Retrieves timesheets
* `updateEmployee` - Updates an employee's detail
* `updateLeaveApplication` - Updates a specific leave application
* `updatePayRun` - Updates a pay run
* `updatePayslip` - Updates a payslip
* `updateSuperfund` - Updates a superfund
* `updateTimesheet` - Updates a timesheet

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
