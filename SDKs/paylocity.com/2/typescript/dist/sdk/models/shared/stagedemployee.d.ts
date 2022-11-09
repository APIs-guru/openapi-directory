import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The additional direct deposit model
**/
export declare class StagedEmployeeAdditionalDirectDeposit extends SpeakeasyBase {
    accountNumber?: string;
    accountType?: string;
    amount?: number;
    amountType?: string;
    isSkipPreNote?: boolean;
    preNoteDate?: string;
    routingNumber?: string;
}
/**
 * The benefit setup model
**/
export declare class StagedEmployeeBenefitSetup extends SpeakeasyBase {
    benefitClass?: string;
    benefitClassEffectiveDate?: string;
    benefitSalary?: number;
    benefitSalaryEffectiveDate?: string;
    doNotApplyAdministrativePeriod?: boolean;
    isMeasureAcaEligibility?: boolean;
}
export declare enum StagedEmployeeCustomBooleanFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}
export declare class StagedEmployeeCustomBooleanFields extends SpeakeasyBase {
    category: StagedEmployeeCustomBooleanFieldsCategoryEnum;
    label: string;
    value: boolean;
}
export declare enum StagedEmployeeCustomDateFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}
export declare class StagedEmployeeCustomDateFields extends SpeakeasyBase {
    category: StagedEmployeeCustomDateFieldsCategoryEnum;
    label: string;
    value: string;
}
export declare enum StagedEmployeeCustomDropDownFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}
export declare class StagedEmployeeCustomDropDownFields extends SpeakeasyBase {
    category: StagedEmployeeCustomDropDownFieldsCategoryEnum;
    label: string;
    value: string;
}
export declare enum StagedEmployeeCustomNumberFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}
export declare class StagedEmployeeCustomNumberFields extends SpeakeasyBase {
    category: StagedEmployeeCustomNumberFieldsCategoryEnum;
    label: string;
    value: number;
}
export declare enum StagedEmployeeCustomTextFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}
export declare class StagedEmployeeCustomTextFields extends SpeakeasyBase {
    category: StagedEmployeeCustomTextFieldsCategoryEnum;
    label: string;
    value: string;
}
/**
 * The Department Position model
**/
export declare class StagedEmployeeDepartmentPosition extends SpeakeasyBase {
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
 * The Federal Tax model
**/
export declare class StagedEmployeeFederalTax extends SpeakeasyBase {
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
 * The address model
**/
export declare class StagedEmployeeHomeAddress extends SpeakeasyBase {
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
export declare class StagedEmployeeLocalTax extends SpeakeasyBase {
    exemptions?: number;
    exemptions2?: number;
    filingStatus?: string;
    residentPsd?: string;
    taxCode?: string;
    workPsd?: string;
}
/**
 * The Main Direct Deposit model
**/
export declare class StagedEmployeeMainDirectDeposit extends SpeakeasyBase {
    accountNumber?: string;
    accountType?: string;
    isSkipPreNote?: boolean;
    preNoteDate?: string;
    routingNumber?: string;
}
/**
 * The Non-Primary State Tax model
**/
export declare class StagedEmployeeNonPrimaryStateTax extends SpeakeasyBase {
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
 * The Primary Pay Rate model
**/
export declare class StagedEmployeePrimaryPayRate extends SpeakeasyBase {
    baseRate?: number;
    changeReason?: string;
    defaultHours?: number;
    effectiveDate?: string;
    isAutoPay?: boolean;
    payFrequency?: string;
    payGrade?: string;
    payType?: string;
    ratePer?: string;
    salary?: number;
}
/**
 * The State Tax model
**/
export declare class StagedEmployeePrimaryStateTax extends SpeakeasyBase {
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
 * The employee status model
**/
export declare class StagedEmployeeStatus extends SpeakeasyBase {
    adjustedSeniorityDate?: string;
    changeReason?: string;
    effectiveDate?: string;
    employeeStatus?: string;
    hireDate?: string;
    isEligibleForRehire?: boolean;
}
/**
 * Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
**/
export declare class StagedEmployeeWebTime extends SpeakeasyBase {
    badgeNumber?: string;
    chargeRate?: number;
    isTimeLaborEnabled?: boolean;
}
/**
 * The address model
**/
export declare class StagedEmployeeWorkAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    county?: string;
    emailAddress?: string;
    mobilePhone?: string;
    pager?: string;
    phone?: string;
    phoneExtension?: string;
    postalCode?: string;
    state?: string;
}
/**
 * The Work Eligibility model
**/
export declare class StagedEmployeeWorkEligibility extends SpeakeasyBase {
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
 * The staged employee model
**/
export declare class StagedEmployee extends SpeakeasyBase {
    additionalDirectDeposit?: StagedEmployeeAdditionalDirectDeposit[];
    benefitSetup?: StagedEmployeeBenefitSetup[];
    birthDate?: string;
    customBooleanFields?: StagedEmployeeCustomBooleanFields[];
    customDateFields?: StagedEmployeeCustomDateFields[];
    customDropDownFields?: StagedEmployeeCustomDropDownFields[];
    customNumberFields?: StagedEmployeeCustomNumberFields[];
    customTextFields?: StagedEmployeeCustomTextFields[];
    departmentPosition?: StagedEmployeeDepartmentPosition[];
    disabilityDescription?: string;
    employeeId?: string;
    ethnicity?: string;
    federalTax?: StagedEmployeeFederalTax[];
    firstName?: string;
    fitwExemptReason?: string;
    futaExemptReason?: string;
    gender?: string;
    homeAddress?: StagedEmployeeHomeAddress[];
    isEmployee943?: boolean;
    isSmoker?: boolean;
    lastName?: string;
    localTax?: StagedEmployeeLocalTax[];
    mainDirectDeposit?: StagedEmployeeMainDirectDeposit[];
    maritalStatus?: string;
    medExemptReason?: string;
    middleName?: string;
    nonPrimaryStateTax?: StagedEmployeeNonPrimaryStateTax[];
    preferredName?: string;
    primaryPayRate?: StagedEmployeePrimaryPayRate[];
    primaryStateTax?: StagedEmployeePrimaryStateTax[];
    priorLastName?: string;
    salutation?: string;
    sitwExemptReason?: string;
    ssExemptReason?: string;
    ssn?: string;
    status?: StagedEmployeeStatus[];
    suffix?: string;
    suiExemptReason?: string;
    suiState?: string;
    taxDistributionCode1099R?: string;
    taxForm?: string;
    veteranDescription?: string;
    webTime?: StagedEmployeeWebTime;
    workAddress?: StagedEmployeeWorkAddress[];
    workEligibility?: StagedEmployeeWorkEligibility[];
}
