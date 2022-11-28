import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EmployeeEmployeeAeAssessmentOverrideEnum {
    None = "None",
    OptOut = "OptOut",
    OptIn = "OptIn",
    VoluntaryJoiner = "VoluntaryJoiner",
    ContractualPension = "ContractualPension",
    CeasedMembership = "CeasedMembership",
    Leaver = "Leaver",
    Excluded = "Excluded"
}

export enum EmployeeEmployeeAeExclusionReasonCodeEnum {
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


// EmployeeEmployeeAddress
/** 
 * The employees' address
**/
export class EmployeeEmployeeAddress extends SpeakeasyBase {
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


// EmployeeEmployeeBankAccount
/** 
 * The employees' bank account
**/
export class EmployeeEmployeeBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=SortCode" })
  sortCode?: string;
}


// EmployeeEmployeeEmployeePartner
/** 
 * The employees' employee partner
**/
export class EmployeeEmployeeEmployeePartner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=Initials" })
  initials?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=NiNumber" })
  niNumber?: string;
}

export enum EmployeeEmployeeGenderEnum {
    Unknown = "Unknown",
    Male = "Male",
    Female = "Female"
}

export enum EmployeeEmployeeLeaverReasonEnum {
    Resigned = "Resigned",
    Dismissed = "Dismissed",
    Redundant = "Redundant",
    Retired = "Retired",
    Deceased = "Deceased",
    LegalCustody = "LegalCustody",
    Other = "Other"
}

export enum EmployeeEmployeeMaritalStatusEnum {
    NotSet = "NotSet",
    Single = "Single",
    Married = "Married",
    Divorced = "Divorced",
    Widowed = "Widowed"
}

export enum EmployeeEmployeeNicLiabilityEnum {
    HasOtherJob = "HasOtherJob",
    IsFemaleEntitledToReducedRate = "IsFemaleEntitledToReducedRate",
    IsNotLiable = "IsNotLiable",
    IsContractedOut = "IsContractedOut",
    IsFullyLiable = "IsFullyLiable",
    IsApprentice = "IsApprentice",
    LeaverBeyond6Weeks = "LeaverBeyond6Weeks",
    PaymentAfterLeaving = "PaymentAfterLeaving"
}


// EmployeeEmployeePaySchedule
/** 
 * The employees' pay schedule
**/
export class EmployeeEmployeePaySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum EmployeeEmployeePaymentMethodEnum {
    NotSet = "NotSet",
    Cash = "Cash",
    Cheque = "Cheque",
    Bacs = "BACS",
    FasterPayments = "FasterPayments",
    Other = "Other"
}

export enum EmployeeEmployeeRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}

export enum EmployeeEmployeeRuleExclusionsEnum {
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

export enum EmployeeEmployeeSecondedEnum {
    NotSet = "NotSet",
    Stay183DaysOrMore = "Stay183DaysOrMore",
    StayLessThan183Days = "StayLessThan183Days",
    InOutUk = "InOutUk"
}

export enum EmployeeEmployeeStarterDeclarationEnum {
    PreviouslyReported = "PreviouslyReported",
    A = "A",
    B = "B",
    C = "C"
}

export enum EmployeeEmployeeTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}

export enum EmployeeEmployeeWorkingWeekEnum {
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


export class EmployeeEmployee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AEAssessmentOverride" })
  aeAssessmentOverride?: EmployeeEmployeeAeAssessmentOverrideEnum;

  @SpeakeasyMetadata({ data: "json, name=AEAssessmentOverrideDate" })
  aeAssessmentOverrideDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=AEExclusionReasonCode" })
  aeExclusionReasonCode?: EmployeeEmployeeAeExclusionReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=AEPostponementDate" })
  aePostponementDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: EmployeeEmployeeAddress;

  @SpeakeasyMetadata({ data: "json, name=BankAccount" })
  bankAccount?: EmployeeEmployeeBankAccount;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=DateOfBirth" })
  dateOfBirth?: Date;

  @SpeakeasyMetadata({ data: "json, name=Deactivated" })
  deactivated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DirectorshipAppointmentDate" })
  directorshipAppointmentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EEACitizen" })
  eeaCitizen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EPM6" })
  epm6?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EmployeePartner" })
  employeePartner?: EmployeeEmployeeEmployeePartner;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=Gender" })
  gender?: EmployeeEmployeeGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=HoursPerWeek" })
  hoursPerWeek?: number;

  @SpeakeasyMetadata({ data: "json, name=Initials" })
  initials?: string;

  @SpeakeasyMetadata({ data: "json, name=IrregularEmployment" })
  irregularEmployment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsAgencyWorker" })
  isAgencyWorker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=LeaverReason" })
  leaverReason?: EmployeeEmployeeLeaverReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=LeavingDate" })
  leavingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaritalStatus" })
  maritalStatus?: EmployeeEmployeeMaritalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=NiNumber" })
  niNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=NicLiability" })
  nicLiability?: EmployeeEmployeeNicLiabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=OffPayrollWorker" })
  offPayrollWorker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OnStrike" })
  onStrike?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PassportNumber" })
  passportNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=PaySchedule" })
  paySchedule?: EmployeeEmployeePaySchedule;

  @SpeakeasyMetadata({ data: "json, name=PaymentMethod" })
  paymentMethod?: EmployeeEmployeePaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=PaymentToANonIndividual" })
  paymentToANonIndividual?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: EmployeeEmployeeRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=Revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=RuleExclusions" })
  ruleExclusions?: EmployeeEmployeeRuleExclusionsEnum;

  @SpeakeasyMetadata({ data: "json, name=Seconded" })
  seconded?: EmployeeEmployeeSecondedEnum;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=StarterDeclaration" })
  starterDeclaration?: EmployeeEmployeeStarterDeclarationEnum;

  @SpeakeasyMetadata({ data: "json, name=Territory" })
  territory?: EmployeeEmployeeTerritoryEnum;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkingWeek" })
  workingWeek?: EmployeeEmployeeWorkingWeekEnum;
}


export class Employee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Employee" })
  employee?: EmployeeEmployee;
}
