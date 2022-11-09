import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmployerEmployerAddress
/** 
 * The employers' address
**/
export class EmployerEmployerAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address1" })
  address1?: string;

  @Metadata({ data: "json, name=Address2" })
  address2?: string;

  @Metadata({ data: "json, name=Address3" })
  address3?: string;

  @Metadata({ data: "json, name=Address4" })
  address4?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=Postcode" })
  postcode?: string;
}


// EmployerEmployerAutoEnrolmentPension
/** 
 * The employer auto enrolments' pension
**/
export class EmployerEmployerAutoEnrolmentPension extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


// EmployerEmployerAutoEnrolment
/** 
 * The employers' auto enrolment
**/
export class EmployerEmployerAutoEnrolment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Pension" })
  pension?: EmployerEmployerAutoEnrolmentPension;

  @Metadata({ data: "json, name=PostponementDate" })
  postponementDate?: Date;

  @Metadata({ data: "json, name=PrimaryEmail" })
  primaryEmail?: string;

  @Metadata({ data: "json, name=PrimaryFirstName" })
  primaryFirstName?: string;

  @Metadata({ data: "json, name=PrimaryJobTitle" })
  primaryJobTitle?: string;

  @Metadata({ data: "json, name=PrimaryLastName" })
  primaryLastName?: string;

  @Metadata({ data: "json, name=PrimaryTelephone" })
  primaryTelephone?: string;

  @Metadata({ data: "json, name=ReEnrolmentDayOffset" })
  reEnrolmentDayOffset?: number;

  @Metadata({ data: "json, name=ReEnrolmentMonthOffset" })
  reEnrolmentMonthOffset?: number;

  @Metadata({ data: "json, name=SecondaryEmail" })
  secondaryEmail?: string;

  @Metadata({ data: "json, name=SecondaryFirstName" })
  secondaryFirstName?: string;

  @Metadata({ data: "json, name=SecondaryJobTitle" })
  secondaryJobTitle?: string;

  @Metadata({ data: "json, name=SecondaryLastName" })
  secondaryLastName?: string;

  @Metadata({ data: "json, name=SecondaryTelephone" })
  secondaryTelephone?: string;

  @Metadata({ data: "json, name=StagingDate" })
  stagingDate?: Date;
}


// EmployerEmployerBankAccount
/** 
 * The employers' bank account
**/
export class EmployerEmployerBankAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountName" })
  accountName?: string;

  @Metadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=SortCode" })
  sortCode?: string;
}

export enum EmployerEmployerHmrcSettingsSenderEnum {
    Employer = "Employer"
,    Individual = "Individual"
,    Company = "Company"
,    Agent = "Agent"
,    Bureau = "Bureau"
,    Partnership = "Partnership"
,    Trust = "Trust"
,    Government = "Government"
,    ActingInCapacity = "ActingInCapacity"
,    Other = "Other"
}

export enum EmployerEmployerHmrcSettingsStateAidSectorEnum {
    Agriculture = "Agriculture"
,    FisheriesAquaculture = "FisheriesAquaculture"
,    RoadTransport = "RoadTransport"
,    Industrial = "Industrial"
,    NotApplicable = "NotApplicable"
}


// EmployerEmployerHmrcSettings
/** 
 * The employers' hmrc settings
**/
export class EmployerEmployerHmrcSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountingOfficeRef" })
  accountingOfficeRef?: string;

  @Metadata({ data: "json, name=COTAXRef" })
  cotaxRef?: string;

  @Metadata({ data: "json, name=ContactEmail" })
  contactEmail?: string;

  @Metadata({ data: "json, name=ContactFax" })
  contactFax?: string;

  @Metadata({ data: "json, name=ContactFirstName" })
  contactFirstName?: string;

  @Metadata({ data: "json, name=ContactLastName" })
  contactLastName?: string;

  @Metadata({ data: "json, name=ContactTelephone" })
  contactTelephone?: string;

  @Metadata({ data: "json, name=EmploymentAllowanceOverride" })
  employmentAllowanceOverride?: number;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=SAUTR" })
  sautr?: string;

  @Metadata({ data: "json, name=Sender" })
  sender?: EmployerEmployerHmrcSettingsSenderEnum;

  @Metadata({ data: "json, name=SenderId" })
  senderId?: string;

  @Metadata({ data: "json, name=StateAidSector" })
  stateAidSector?: EmployerEmployerHmrcSettingsStateAidSectorEnum;

  @Metadata({ data: "json, name=TaxOfficeNumber" })
  taxOfficeNumber?: string;

  @Metadata({ data: "json, name=TaxOfficeReference" })
  taxOfficeReference?: string;
}

export enum EmployerEmployerRegionEnum {
    NotSet = "NotSet"
,    England = "England"
,    Scotland = "Scotland"
,    Wales = "Wales"
}

export enum EmployerEmployerRuleExclusionsEnum {
    None = "None"
,    NiMissingPayInstructionRule = "NiMissingPayInstructionRule"
,    TaxMissingPayInstructionRule = "TaxMissingPayInstructionRule"
,    TaxCodeUpliftRule = "TaxCodeUpliftRule"
,    NiSetExpectedLetterRule = "NiSetExpectedLetterRule"
,    NiDateOfBirthChangeRetrospectiveCRule = "NiDateOfBirthChangeRetrospectiveCRule"
,    NiDefermentStatusChangeRule = "NiDefermentStatusChangeRule"
,    NiEndContractedOutTransferRule = "NiEndContractedOutTransferRule"
,    PaymentAfterLeavingRule = "PaymentAfterLeavingRule"
,    LeaverEndInstructionsRule = "LeaverEndInstructionsRule"
,    P45StudentLoanInstructionRule = "P45StudentLoanInstructionRule"
,    P45TaxInstructionRule = "P45TaxInstructionRule"
,    P45YtdTaxRule = "P45YtdTaxRule"
,    YtdInstructionRule = "YtdInstructionRule"
,    TaxCodeRegionChangeRule = "TaxCodeRegionChangeRule"
,    AutoEnrolmentStatusChangeRule = "AutoEnrolmentStatusChangeRule"
,    EmployeeDeceasedRule = "EmployeeDeceasedRule"
,    BenefitInstructionAutoEndRule = "BenefitInstructionAutoEndRule"
}

export enum EmployerEmployerTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}


export class EmployerEmployer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: EmployerEmployerAddress;

  @Metadata({ data: "json, name=ApprenticeshipLevyAllowance" })
  apprenticeshipLevyAllowance?: number;

  @Metadata({ data: "json, name=AutoEnrolment" })
  autoEnrolment?: EmployerEmployerAutoEnrolment;

  @Metadata({ data: "json, name=BacsServiceUserNumber" })
  bacsServiceUserNumber?: string;

  @Metadata({ data: "json, name=BankAccount" })
  bankAccount?: EmployerEmployerBankAccount;

  @Metadata({ data: "json, name=CalculateApprenticeshipLevy" })
  calculateApprenticeshipLevy?: boolean;

  @Metadata({ data: "json, name=ClaimEmploymentAllowance" })
  claimEmploymentAllowance?: boolean;

  @Metadata({ data: "json, name=ClaimSmallEmployerRelief" })
  claimSmallEmployerRelief?: boolean;

  @Metadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=HmrcSettings" })
  hmrcSettings?: EmployerEmployerHmrcSettings;

  @Metadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Region" })
  region?: EmployerEmployerRegionEnum;

  @Metadata({ data: "json, name=Revision" })
  revision?: number;

  @Metadata({ data: "json, name=RuleExclusions" })
  ruleExclusions?: EmployerEmployerRuleExclusionsEnum;

  @Metadata({ data: "json, name=Territory" })
  territory?: EmployerEmployerTerritoryEnum;
}


export class Employer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Employer" })
  employer?: EmployerEmployer;
}
