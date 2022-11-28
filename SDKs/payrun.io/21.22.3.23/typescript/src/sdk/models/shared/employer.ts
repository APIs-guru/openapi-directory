import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmployerEmployerAddress
/** 
 * The employers' address
**/
export class EmployerEmployerAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=Address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=Address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=Address4" })
  address4?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=Postcode" })
  postcode?: string;
}


// EmployerEmployerAutoEnrolmentPension
/** 
 * The employer auto enrolments' pension
**/
export class EmployerEmployerAutoEnrolmentPension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


// EmployerEmployerAutoEnrolment
/** 
 * The employers' auto enrolment
**/
export class EmployerEmployerAutoEnrolment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Pension" })
  pension?: EmployerEmployerAutoEnrolmentPension;

  @SpeakeasyMetadata({ data: "json, name=PostponementDate" })
  postponementDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=PrimaryEmail" })
  primaryEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryFirstName" })
  primaryFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryJobTitle" })
  primaryJobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryLastName" })
  primaryLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryTelephone" })
  primaryTelephone?: string;

  @SpeakeasyMetadata({ data: "json, name=ReEnrolmentDayOffset" })
  reEnrolmentDayOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=ReEnrolmentMonthOffset" })
  reEnrolmentMonthOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=SecondaryEmail" })
  secondaryEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryFirstName" })
  secondaryFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryJobTitle" })
  secondaryJobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryLastName" })
  secondaryLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryTelephone" })
  secondaryTelephone?: string;

  @SpeakeasyMetadata({ data: "json, name=StagingDate" })
  stagingDate?: Date;
}


// EmployerEmployerBankAccount
/** 
 * The employers' bank account
**/
export class EmployerEmployerBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=SortCode" })
  sortCode?: string;
}

export enum EmployerEmployerHmrcSettingsSenderEnum {
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

export enum EmployerEmployerHmrcSettingsStateAidSectorEnum {
    Agriculture = "Agriculture",
    FisheriesAquaculture = "FisheriesAquaculture",
    RoadTransport = "RoadTransport",
    Industrial = "Industrial",
    NotApplicable = "NotApplicable"
}


// EmployerEmployerHmrcSettings
/** 
 * The employers' hmrc settings
**/
export class EmployerEmployerHmrcSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountingOfficeRef" })
  accountingOfficeRef?: string;

  @SpeakeasyMetadata({ data: "json, name=COTAXRef" })
  cotaxRef?: string;

  @SpeakeasyMetadata({ data: "json, name=ContactEmail" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=ContactFax" })
  contactFax?: string;

  @SpeakeasyMetadata({ data: "json, name=ContactFirstName" })
  contactFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=ContactLastName" })
  contactLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=ContactTelephone" })
  contactTelephone?: string;

  @SpeakeasyMetadata({ data: "json, name=EmploymentAllowanceOverride" })
  employmentAllowanceOverride?: number;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=SAUTR" })
  sautr?: string;

  @SpeakeasyMetadata({ data: "json, name=Sender" })
  sender?: EmployerEmployerHmrcSettingsSenderEnum;

  @SpeakeasyMetadata({ data: "json, name=SenderId" })
  senderId?: string;

  @SpeakeasyMetadata({ data: "json, name=StateAidSector" })
  stateAidSector?: EmployerEmployerHmrcSettingsStateAidSectorEnum;

  @SpeakeasyMetadata({ data: "json, name=TaxOfficeNumber" })
  taxOfficeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxOfficeReference" })
  taxOfficeReference?: string;
}

export enum EmployerEmployerRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}

export enum EmployerEmployerRuleExclusionsEnum {
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

export enum EmployerEmployerTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}


export class EmployerEmployer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: EmployerEmployerAddress;

  @SpeakeasyMetadata({ data: "json, name=ApprenticeshipLevyAllowance" })
  apprenticeshipLevyAllowance?: number;

  @SpeakeasyMetadata({ data: "json, name=AutoEnrolment" })
  autoEnrolment?: EmployerEmployerAutoEnrolment;

  @SpeakeasyMetadata({ data: "json, name=BacsServiceUserNumber" })
  bacsServiceUserNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=BankAccount" })
  bankAccount?: EmployerEmployerBankAccount;

  @SpeakeasyMetadata({ data: "json, name=CalculateApprenticeshipLevy" })
  calculateApprenticeshipLevy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ClaimEmploymentAllowance" })
  claimEmploymentAllowance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ClaimSmallEmployerRelief" })
  claimSmallEmployerRelief?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=HmrcSettings" })
  hmrcSettings?: EmployerEmployerHmrcSettings;

  @SpeakeasyMetadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: EmployerEmployerRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=Revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=RuleExclusions" })
  ruleExclusions?: EmployerEmployerRuleExclusionsEnum;

  @SpeakeasyMetadata({ data: "json, name=Territory" })
  territory?: EmployerEmployerTerritoryEnum;
}


export class Employer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Employer" })
  employer?: EmployerEmployer;
}
