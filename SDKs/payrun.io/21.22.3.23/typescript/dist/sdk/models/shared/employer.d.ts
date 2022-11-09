import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The employers' address
**/
export declare class EmployerEmployerAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    country?: string;
    postcode?: string;
}
/**
 * The employer auto enrolments' pension
**/
export declare class EmployerEmployerAutoEnrolmentPension extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
/**
 * The employers' auto enrolment
**/
export declare class EmployerEmployerAutoEnrolment extends SpeakeasyBase {
    pension?: EmployerEmployerAutoEnrolmentPension;
    postponementDate?: Date;
    primaryEmail?: string;
    primaryFirstName?: string;
    primaryJobTitle?: string;
    primaryLastName?: string;
    primaryTelephone?: string;
    reEnrolmentDayOffset?: number;
    reEnrolmentMonthOffset?: number;
    secondaryEmail?: string;
    secondaryFirstName?: string;
    secondaryJobTitle?: string;
    secondaryLastName?: string;
    secondaryTelephone?: string;
    stagingDate?: Date;
}
/**
 * The employers' bank account
**/
export declare class EmployerEmployerBankAccount extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    reference?: string;
    sortCode?: string;
}
export declare enum EmployerEmployerHmrcSettingsSenderEnum {
    Employer = "Employer",
    Individual = "Individual",
    Company = "Company",
    Agent = "Agent",
    Bureau = "Bureau",
    Partnership = "Partnership",
    Trust = "Trust",
    Government = "Government",
    ActingInCapacity = "ActingInCapacity",
    Other = "Other"
}
export declare enum EmployerEmployerHmrcSettingsStateAidSectorEnum {
    Agriculture = "Agriculture",
    FisheriesAquaculture = "FisheriesAquaculture",
    RoadTransport = "RoadTransport",
    Industrial = "Industrial",
    NotApplicable = "NotApplicable"
}
/**
 * The employers' hmrc settings
**/
export declare class EmployerEmployerHmrcSettings extends SpeakeasyBase {
    accountingOfficeRef?: string;
    cotaxRef?: string;
    contactEmail?: string;
    contactFax?: string;
    contactFirstName?: string;
    contactLastName?: string;
    contactTelephone?: string;
    employmentAllowanceOverride?: number;
    password?: string;
    sautr?: string;
    sender?: EmployerEmployerHmrcSettingsSenderEnum;
    senderId?: string;
    stateAidSector?: EmployerEmployerHmrcSettingsStateAidSectorEnum;
    taxOfficeNumber?: string;
    taxOfficeReference?: string;
}
export declare enum EmployerEmployerRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}
export declare enum EmployerEmployerRuleExclusionsEnum {
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
export declare enum EmployerEmployerTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}
export declare class EmployerEmployer extends SpeakeasyBase {
    address?: EmployerEmployerAddress;
    apprenticeshipLevyAllowance?: number;
    autoEnrolment?: EmployerEmployerAutoEnrolment;
    bacsServiceUserNumber?: string;
    bankAccount?: EmployerEmployerBankAccount;
    calculateApprenticeshipLevy?: boolean;
    claimEmploymentAllowance?: boolean;
    claimSmallEmployerRelief?: boolean;
    effectiveDate?: Date;
    hmrcSettings?: EmployerEmployerHmrcSettings;
    metaData?: Map<string, any>;
    name?: string;
    region?: EmployerEmployerRegionEnum;
    revision?: number;
    ruleExclusions?: EmployerEmployerRuleExclusionsEnum;
    territory?: EmployerEmployerTerritoryEnum;
}
export declare class Employer extends SpeakeasyBase {
    employer?: EmployerEmployer;
}
