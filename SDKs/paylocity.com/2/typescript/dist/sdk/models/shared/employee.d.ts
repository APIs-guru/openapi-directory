import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The additional direct deposit model
**/
export declare class EmployeeAdditionalDirectDeposit extends SpeakeasyBase {
    accountNumber?: string;
    accountType?: string;
    amount?: number;
    amountType?: string;
    blockSpecial?: boolean;
    isSkipPreNote?: boolean;
    nameOnAccount?: string;
    preNoteDate?: string;
    routingNumber?: string;
}
/**
 * The additional pay rate model
**/
export declare class EmployeeAdditionalRate extends SpeakeasyBase {
    changeReason?: string;
    costCenter1?: string;
    costCenter2?: string;
    costCenter3?: string;
    effectiveDate?: string;
    endCheckDate?: string;
    job?: string;
    rate?: number;
    rateCode?: string;
    rateNotes?: string;
    ratePer?: string;
    shift?: string;
}
/**
 *  Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.
**/
export declare class EmployeeBenefitSetup extends SpeakeasyBase {
    benefitClass?: string;
    benefitClassEffectiveDate?: string;
    benefitSalary?: number;
    benefitSalaryEffectiveDate?: string;
    doNotApplyAdministrativePeriod?: boolean;
    isMeasureAcaEligibility?: boolean;
}
export declare enum EmployeeCustomBooleanFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}
export declare class EmployeeCustomBooleanFields extends SpeakeasyBase {
    category: EmployeeCustomBooleanFieldsCategoryEnum;
    label: string;
    value: boolean;
}
export declare enum EmployeeCustomDateFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}
export declare class EmployeeCustomDateFields extends SpeakeasyBase {
    category: EmployeeCustomDateFieldsCategoryEnum;
    label: string;
    value: string;
}
export declare enum EmployeeCustomDropDownFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}
export declare class EmployeeCustomDropDownFields extends SpeakeasyBase {
    category: EmployeeCustomDropDownFieldsCategoryEnum;
    label: string;
    value: string;
}
export declare enum EmployeeCustomNumberFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}
export declare class EmployeeCustomNumberFields extends SpeakeasyBase {
    category: EmployeeCustomNumberFieldsCategoryEnum;
    label: string;
    value: number;
}
export declare enum EmployeeCustomTextFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}
export declare class EmployeeCustomTextFields extends SpeakeasyBase {
    category: EmployeeCustomTextFieldsCategoryEnum;
    label: string;
    value: string;
}
/**
 * Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.
**/
export declare class EmployeeDepartmentPosition extends SpeakeasyBase {
    changeReason?: string;
    clockBadgeNumber?: string;
    costCenter1?: string;
    costCenter2?: string;
    costCenter3?: string;
    effectiveDate?: string;
    employeeType?: string;
    equalEmploymentOpportunityClass?: string;
    isMinimumWageExempt?: boolean;
    isOvertimeExempt?: boolean;
    isSupervisorReviewer?: boolean;
    isUnionDuesCollected?: boolean;
    isUnionInitiationCollected?: boolean;
    jobTitle?: string;
    payGroup?: string;
    positionCode?: string;
    reviewerCompanyNumber?: string;
    reviewerEmployeeId?: string;
    shift?: string;
    supervisorCompanyNumber?: string;
    supervisorEmployeeId?: string;
    tipped?: string;
    unionAffiliationDate?: string;
    unionCode?: string;
    unionPosition?: string;
    workersCompensation?: string;
}
/**
 * The emergency contact model
**/
export declare class EmployeeEmergencyContacts extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    county?: string;
    email?: string;
    firstName: string;
    homePhone?: string;
    lastName: string;
    mobilePhone?: string;
    notes?: string;
    pager?: string;
    primaryPhone?: string;
    priority?: string;
    relationship?: string;
    state?: string;
    syncEmployeeInfo?: boolean;
    workExtension?: string;
    workPhone?: string;
    zip?: string;
}
/**
 * Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.
**/
export declare class EmployeeFederalTax extends SpeakeasyBase {
    amount?: number;
    deductionsAmount?: number;
    dependentsAmount?: number;
    exemptions?: number;
    filingStatus?: string;
    higherRate?: boolean;
    otherIncomeAmount?: number;
    percentage?: number;
    taxCalculationCode?: string;
    w4FormYear?: number;
}
/**
 * Add or update employee's home address, personal phone numbers, and personal email.
**/
export declare class EmployeeHomeAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    county?: string;
    emailAddress?: string;
    mobilePhone?: string;
    phone?: string;
    postalCode?: string;
    state?: string;
}
/**
 * The Local Tax model
**/
export declare class EmployeeLocalTax extends SpeakeasyBase {
    exemptions?: number;
    exemptions2?: number;
    filingStatus?: string;
    residentPsd?: string;
    taxCode?: string;
    workPsd?: string;
}
/**
 * Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.
**/
export declare class EmployeeMainDirectDeposit extends SpeakeasyBase {
    accountNumber?: string;
    accountType?: string;
    blockSpecial?: boolean;
    isSkipPreNote?: boolean;
    nameOnAccount?: string;
    preNoteDate?: string;
    routingNumber?: string;
}
/**
 * Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.
**/
export declare class EmployeeNonPrimaryStateTax extends SpeakeasyBase {
    amount?: number;
    deductionsAmount?: number;
    dependentsAmount?: number;
    exemptions?: number;
    exemptions2?: number;
    filingStatus?: string;
    higherRate?: boolean;
    otherIncomeAmount?: number;
    percentage?: number;
    reciprocityCode?: string;
    specialCheckCalc?: string;
    taxCalculationCode?: string;
    taxCode?: string;
    w4FormYear?: number;
}
/**
 * Add or update hourly or salary pay rate, effective date, and pay frequency.
**/
export declare class EmployeePrimaryPayRate extends SpeakeasyBase {
    annualSalary?: number;
    baseRate?: number;
    beginCheckDate?: string;
    changeReason?: string;
    defaultHours?: number;
    effectiveDate?: string;
    isAutoPay?: boolean;
    payFrequency?: string;
    payGrade?: string;
    payRateNote?: string;
    payType?: string;
    ratePer?: string;
    salary?: number;
}
/**
 * Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.
**/
export declare class EmployeePrimaryStateTax extends SpeakeasyBase {
    amount?: number;
    deductionsAmount?: number;
    dependentsAmount?: number;
    exemptions?: number;
    exemptions2?: number;
    filingStatus?: string;
    higherRate?: boolean;
    otherIncomeAmount?: number;
    percentage?: number;
    specialCheckCalc?: string;
    taxCalculationCode?: string;
    taxCode?: string;
    w4FormYear?: number;
}
/**
 * Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.
**/
export declare class EmployeeStatus extends SpeakeasyBase {
    adjustedSeniorityDate?: string;
    changeReason?: string;
    effectiveDate?: string;
    employeeStatus?: string;
    hireDate?: string;
    isEligibleForRehire?: boolean;
    reHireDate?: string;
}
/**
 * Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.
**/
export declare class EmployeeTaxSetup extends SpeakeasyBase {
    fitwExemptNotes?: string;
    fitwExemptReason?: string;
    futaExemptNotes?: string;
    futaExemptReason?: string;
    isEmployee943?: boolean;
    isPension?: boolean;
    isStatutory?: boolean;
    medExemptNotes?: string;
    medExemptReason?: string;
    sitwExemptNotes?: string;
    sitwExemptReason?: string;
    ssExemptNotes?: string;
    ssExemptReason?: string;
    suiExemptNotes?: string;
    suiExemptReason?: string;
    suiState?: string;
    taxDistributionCode1099R?: string;
    taxForm?: string;
}
/**
 * Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
**/
export declare class EmployeeWebTime extends SpeakeasyBase {
    badgeNumber?: string;
    chargeRate?: number;
    isTimeLaborEnabled?: boolean;
}
/**
 * Add or update employee's work address, phone numbers, and email. Work Location drop down field is not included.
**/
export declare class EmployeeWorkAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    county?: string;
    emailAddress?: string;
    location?: string;
    mailStop?: string;
    mobilePhone?: string;
    pager?: string;
    phone?: string;
    phoneExtension?: string;
    postalCode?: string;
    state?: string;
}
/**
 * Add or update I-9 work authorization information.
**/
export declare class EmployeeWorkEligibility extends SpeakeasyBase {
    alienOrAdmissionDocumentNumber?: string;
    attestedDate?: string;
    countryOfIssuance?: string;
    foreignPassportNumber?: string;
    i94AdmissionNumber?: string;
    i9DateVerified?: string;
    i9Notes?: string;
    isI9Verified?: boolean;
    isSsnVerified?: boolean;
    ssnDateVerified?: string;
    ssnNotes?: string;
    visaType?: string;
    workAuthorization?: string;
    workUntil?: string;
}
/**
 * The employee model
**/
export declare class Employee extends SpeakeasyBase {
    additionalDirectDeposit?: EmployeeAdditionalDirectDeposit[];
    additionalRate?: EmployeeAdditionalRate[];
    benefitSetup?: EmployeeBenefitSetup;
    birthDate?: string;
    companyFein?: string;
    companyName?: string;
    currency?: string;
    customBooleanFields?: EmployeeCustomBooleanFields[];
    customDateFields?: EmployeeCustomDateFields[];
    customDropDownFields?: EmployeeCustomDropDownFields[];
    customNumberFields?: EmployeeCustomNumberFields[];
    customTextFields?: EmployeeCustomTextFields[];
    departmentPosition?: EmployeeDepartmentPosition;
    disabilityDescription?: string;
    emergencyContacts?: EmployeeEmergencyContacts[];
    employeeId?: string;
    ethnicity?: string;
    federalTax?: EmployeeFederalTax;
    firstName?: string;
    gender?: string;
    homeAddress?: EmployeeHomeAddress;
    isHighlyCompensated?: boolean;
    isSmoker?: boolean;
    lastName?: string;
    localTax?: EmployeeLocalTax[];
    mainDirectDeposit?: EmployeeMainDirectDeposit;
    maritalStatus?: string;
    middleName?: string;
    nonPrimaryStateTax?: EmployeeNonPrimaryStateTax;
    ownerPercent?: number;
    preferredName?: string;
    primaryPayRate?: EmployeePrimaryPayRate;
    primaryStateTax?: EmployeePrimaryStateTax;
    priorLastName?: string;
    salutation?: string;
    ssn?: string;
    status?: EmployeeStatus;
    suffix?: string;
    taxSetup?: EmployeeTaxSetup;
    veteranDescription?: string;
    webTime?: EmployeeWebTime;
    workAddress?: EmployeeWorkAddress;
    workEligibility?: EmployeeWorkEligibility;
}
