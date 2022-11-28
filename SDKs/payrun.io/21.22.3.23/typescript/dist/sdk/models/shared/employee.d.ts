import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EmployeeEmployeeAeAssessmentOverrideEnum {
    None = "None",
    OptOut = "OptOut",
    OptIn = "OptIn",
    VoluntaryJoiner = "VoluntaryJoiner",
    ContractualPension = "ContractualPension",
    CeasedMembership = "CeasedMembership",
    Leaver = "Leaver",
    Excluded = "Excluded"
}
export declare enum EmployeeEmployeeAeExclusionReasonCodeEnum {
    OtherNotKnown = "OtherNotKnown",
    NotAWorker = "NotAWorker",
    NotUkWorker = "NotUKWorker",
    TemporaryUkWorker = "TemporaryUKWorker",
    OutsideAgeRange = "OutsideAgeRange",
    SingleEmployeeDirector = "SingleEmployeeDirector",
    CeasedMembershipWithin12Months = "CeasedMembershipWithin12Months",
    CeasedMembershipBeyond12Months = "CeasedMembershipBeyond12Months",
    WorkerWulsWithin12Month = "WorkerWULSWithin12Month",
    WorkerWulsBeyond12Month = "WorkerWULSBeyond12Month",
    WorkerInNoticePeriod = "WorkerInNoticePeriod",
    WorkerTaxProtection = "WorkerTaxProtection"
}
/**
 * The employees' address
**/
export declare class EmployeeEmployeeAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    country?: string;
    postcode?: string;
}
/**
 * The employees' bank account
**/
export declare class EmployeeEmployeeBankAccount extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    reference?: string;
    sortCode?: string;
}
/**
 * The employees' employee partner
**/
export declare class EmployeeEmployeeEmployeePartner extends SpeakeasyBase {
    firstName?: string;
    initials?: string;
    lastName?: string;
    middleName?: string;
    niNumber?: string;
}
export declare enum EmployeeEmployeeGenderEnum {
    Unknown = "Unknown",
    Male = "Male",
    Female = "Female"
}
export declare enum EmployeeEmployeeLeaverReasonEnum {
    Resigned = "Resigned",
    Dismissed = "Dismissed",
    Redundant = "Redundant",
    Retired = "Retired",
    Deceased = "Deceased",
    LegalCustody = "LegalCustody",
    Other = "Other"
}
export declare enum EmployeeEmployeeMaritalStatusEnum {
    NotSet = "NotSet",
    Single = "Single",
    Married = "Married",
    Divorced = "Divorced",
    Widowed = "Widowed"
}
export declare enum EmployeeEmployeeNicLiabilityEnum {
    HasOtherJob = "HasOtherJob",
    IsFemaleEntitledToReducedRate = "IsFemaleEntitledToReducedRate",
    IsNotLiable = "IsNotLiable",
    IsContractedOut = "IsContractedOut",
    IsFullyLiable = "IsFullyLiable",
    IsApprentice = "IsApprentice",
    LeaverBeyond6Weeks = "LeaverBeyond6Weeks",
    PaymentAfterLeaving = "PaymentAfterLeaving"
}
/**
 * The employees' pay schedule
**/
export declare class EmployeeEmployeePaySchedule extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare enum EmployeeEmployeePaymentMethodEnum {
    NotSet = "NotSet",
    Cash = "Cash",
    Cheque = "Cheque",
    Bacs = "BACS",
    FasterPayments = "FasterPayments",
    Other = "Other"
}
export declare enum EmployeeEmployeeRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}
export declare enum EmployeeEmployeeRuleExclusionsEnum {
    None = "None",
    NiMissingPayInstructionRule = "NiMissingPayInstructionRule",
    TaxMissingPayInstructionRule = "TaxMissingPayInstructionRule",
    TaxCodeUpliftRule = "TaxCodeUpliftRule",
    NiSetExpectedLetterRule = "NiSetExpectedLetterRule",
    NiDateOfBirthChangeRetrospectiveCRule = "NiDateOfBirthChangeRetrospectiveCRule",
    NiDefermentStatusChangeRule = "NiDefermentStatusChangeRule",
    NiEndContractedOutTransferRule = "NiEndContractedOutTransferRule",
    PaymentAfterLeavingRule = "PaymentAfterLeavingRule",
    LeaverEndInstructionsRule = "LeaverEndInstructionsRule",
    P45StudentLoanInstructionRule = "P45StudentLoanInstructionRule",
    P45TaxInstructionRule = "P45TaxInstructionRule",
    P45YtdTaxRule = "P45YtdTaxRule",
    YtdInstructionRule = "YtdInstructionRule",
    TaxCodeRegionChangeRule = "TaxCodeRegionChangeRule",
    AutoEnrolmentStatusChangeRule = "AutoEnrolmentStatusChangeRule",
    EmployeeDeceasedRule = "EmployeeDeceasedRule",
    BenefitInstructionAutoEndRule = "BenefitInstructionAutoEndRule"
}
export declare enum EmployeeEmployeeSecondedEnum {
    NotSet = "NotSet",
    Stay183DaysOrMore = "Stay183DaysOrMore",
    StayLessThan183Days = "StayLessThan183Days",
    InOutUk = "InOutUk"
}
export declare enum EmployeeEmployeeStarterDeclarationEnum {
    PreviouslyReported = "PreviouslyReported",
    A = "A",
    B = "B",
    C = "C"
}
export declare enum EmployeeEmployeeTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}
export declare enum EmployeeEmployeeWorkingWeekEnum {
    None = "None",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    AllWeekDays = "AllWeekDays",
    Saturday = "Saturday",
    Sunday = "Sunday",
    AllDays = "AllDays"
}
export declare class EmployeeEmployee extends SpeakeasyBase {
    aeAssessmentOverride?: EmployeeEmployeeAeAssessmentOverrideEnum;
    aeAssessmentOverrideDate?: Date;
    aeExclusionReasonCode?: EmployeeEmployeeAeExclusionReasonCodeEnum;
    aePostponementDate?: Date;
    address?: EmployeeEmployeeAddress;
    bankAccount?: EmployeeEmployeeBankAccount;
    code?: string;
    dateOfBirth?: Date;
    deactivated?: boolean;
    directorshipAppointmentDate?: Date;
    eeaCitizen?: boolean;
    epm6?: boolean;
    effectiveDate?: Date;
    employeePartner?: EmployeeEmployeeEmployeePartner;
    firstName?: string;
    gender?: EmployeeEmployeeGenderEnum;
    hoursPerWeek?: number;
    initials?: string;
    irregularEmployment?: boolean;
    isAgencyWorker?: boolean;
    lastName?: string;
    leaverReason?: EmployeeEmployeeLeaverReasonEnum;
    leavingDate?: Date;
    maritalStatus?: EmployeeEmployeeMaritalStatusEnum;
    metaData?: Map<string, any>;
    middleName?: string;
    niNumber?: string;
    nicLiability?: EmployeeEmployeeNicLiabilityEnum;
    offPayrollWorker?: boolean;
    onStrike?: boolean;
    passportNumber?: string;
    paySchedule?: EmployeeEmployeePaySchedule;
    paymentMethod?: EmployeeEmployeePaymentMethodEnum;
    paymentToANonIndividual?: boolean;
    region?: EmployeeEmployeeRegionEnum;
    revision?: number;
    ruleExclusions?: EmployeeEmployeeRuleExclusionsEnum;
    seconded?: EmployeeEmployeeSecondedEnum;
    startDate?: Date;
    starterDeclaration?: EmployeeEmployeeStarterDeclarationEnum;
    territory?: EmployeeEmployeeTerritoryEnum;
    title?: string;
    workingWeek?: EmployeeEmployeeWorkingWeekEnum;
}
export declare class Employee extends SpeakeasyBase {
    employee?: EmployeeEmployee;
}
