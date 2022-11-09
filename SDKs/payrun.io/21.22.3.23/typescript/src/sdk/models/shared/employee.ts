import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EmployeeEmployeeAeAssessmentOverrideEnum {
    None = "None"
,    OptOut = "OptOut"
,    OptIn = "OptIn"
,    VoluntaryJoiner = "VoluntaryJoiner"
,    ContractualPension = "ContractualPension"
,    CeasedMembership = "CeasedMembership"
,    Leaver = "Leaver"
,    Excluded = "Excluded"
}

export enum EmployeeEmployeeAeExclusionReasonCodeEnum {
    OtherNotKnown = "OtherNotKnown"
,    NotAWorker = "NotAWorker"
,    NotUkWorker = "NotUKWorker"
,    TemporaryUkWorker = "TemporaryUKWorker"
,    OutsideAgeRange = "OutsideAgeRange"
,    SingleEmployeeDirector = "SingleEmployeeDirector"
,    CeasedMembershipWithin12Months = "CeasedMembershipWithin12Months"
,    CeasedMembershipBeyond12Months = "CeasedMembershipBeyond12Months"
,    WorkerWulsWithin12Month = "WorkerWULSWithin12Month"
,    WorkerWulsBeyond12Month = "WorkerWULSBeyond12Month"
,    WorkerInNoticePeriod = "WorkerInNoticePeriod"
,    WorkerTaxProtection = "WorkerTaxProtection"
}


// EmployeeEmployeeAddress
/** 
 * The employees' address
**/
export class EmployeeEmployeeAddress extends SpeakeasyBase {
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


// EmployeeEmployeeBankAccount
/** 
 * The employees' bank account
**/
export class EmployeeEmployeeBankAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountName" })
  accountName?: string;

  @Metadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=SortCode" })
  sortCode?: string;
}


// EmployeeEmployeeEmployeePartner
/** 
 * The employees' employee partner
**/
export class EmployeeEmployeeEmployeePartner extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=Initials" })
  initials?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @Metadata({ data: "json, name=NiNumber" })
  niNumber?: string;
}

export enum EmployeeEmployeeGenderEnum {
    Unknown = "Unknown"
,    Male = "Male"
,    Female = "Female"
}

export enum EmployeeEmployeeLeaverReasonEnum {
    Resigned = "Resigned"
,    Dismissed = "Dismissed"
,    Redundant = "Redundant"
,    Retired = "Retired"
,    Deceased = "Deceased"
,    LegalCustody = "LegalCustody"
,    Other = "Other"
}

export enum EmployeeEmployeeMaritalStatusEnum {
    NotSet = "NotSet"
,    Single = "Single"
,    Married = "Married"
,    Divorced = "Divorced"
,    Widowed = "Widowed"
}

export enum EmployeeEmployeeNicLiabilityEnum {
    HasOtherJob = "HasOtherJob"
,    IsFemaleEntitledToReducedRate = "IsFemaleEntitledToReducedRate"
,    IsNotLiable = "IsNotLiable"
,    IsContractedOut = "IsContractedOut"
,    IsFullyLiable = "IsFullyLiable"
,    IsApprentice = "IsApprentice"
,    LeaverBeyond6Weeks = "LeaverBeyond6Weeks"
,    PaymentAfterLeaving = "PaymentAfterLeaving"
}


// EmployeeEmployeePaySchedule
/** 
 * The employees' pay schedule
**/
export class EmployeeEmployeePaySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum EmployeeEmployeePaymentMethodEnum {
    NotSet = "NotSet"
,    Cash = "Cash"
,    Cheque = "Cheque"
,    Bacs = "BACS"
,    FasterPayments = "FasterPayments"
,    Other = "Other"
}

export enum EmployeeEmployeeRegionEnum {
    NotSet = "NotSet"
,    England = "England"
,    Scotland = "Scotland"
,    Wales = "Wales"
}

export enum EmployeeEmployeeRuleExclusionsEnum {
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

export enum EmployeeEmployeeSecondedEnum {
    NotSet = "NotSet"
,    Stay183DaysOrMore = "Stay183DaysOrMore"
,    StayLessThan183Days = "StayLessThan183Days"
,    InOutUk = "InOutUk"
}

export enum EmployeeEmployeeStarterDeclarationEnum {
    PreviouslyReported = "PreviouslyReported"
,    A = "A"
,    B = "B"
,    C = "C"
}

export enum EmployeeEmployeeTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}

export enum EmployeeEmployeeWorkingWeekEnum {
    None = "None"
,    Monday = "Monday"
,    Tuesday = "Tuesday"
,    Wednesday = "Wednesday"
,    Thursday = "Thursday"
,    Friday = "Friday"
,    AllWeekDays = "AllWeekDays"
,    Saturday = "Saturday"
,    Sunday = "Sunday"
,    AllDays = "AllDays"
}


export class EmployeeEmployee extends SpeakeasyBase {
  @Metadata({ data: "json, name=AEAssessmentOverride" })
  aeAssessmentOverride?: EmployeeEmployeeAeAssessmentOverrideEnum;

  @Metadata({ data: "json, name=AEAssessmentOverrideDate" })
  aeAssessmentOverrideDate?: Date;

  @Metadata({ data: "json, name=AEExclusionReasonCode" })
  aeExclusionReasonCode?: EmployeeEmployeeAeExclusionReasonCodeEnum;

  @Metadata({ data: "json, name=AEPostponementDate" })
  aePostponementDate?: Date;

  @Metadata({ data: "json, name=Address" })
  address?: EmployeeEmployeeAddress;

  @Metadata({ data: "json, name=BankAccount" })
  bankAccount?: EmployeeEmployeeBankAccount;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=DateOfBirth" })
  dateOfBirth?: Date;

  @Metadata({ data: "json, name=Deactivated" })
  deactivated?: boolean;

  @Metadata({ data: "json, name=DirectorshipAppointmentDate" })
  directorshipAppointmentDate?: Date;

  @Metadata({ data: "json, name=EEACitizen" })
  eeaCitizen?: boolean;

  @Metadata({ data: "json, name=EPM6" })
  epm6?: boolean;

  @Metadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=EmployeePartner" })
  employeePartner?: EmployeeEmployeeEmployeePartner;

  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=Gender" })
  gender?: EmployeeEmployeeGenderEnum;

  @Metadata({ data: "json, name=HoursPerWeek" })
  hoursPerWeek?: number;

  @Metadata({ data: "json, name=Initials" })
  initials?: string;

  @Metadata({ data: "json, name=IrregularEmployment" })
  irregularEmployment?: boolean;

  @Metadata({ data: "json, name=IsAgencyWorker" })
  isAgencyWorker?: boolean;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=LeaverReason" })
  leaverReason?: EmployeeEmployeeLeaverReasonEnum;

  @Metadata({ data: "json, name=LeavingDate" })
  leavingDate?: Date;

  @Metadata({ data: "json, name=MaritalStatus" })
  maritalStatus?: EmployeeEmployeeMaritalStatusEnum;

  @Metadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @Metadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @Metadata({ data: "json, name=NiNumber" })
  niNumber?: string;

  @Metadata({ data: "json, name=NicLiability" })
  nicLiability?: EmployeeEmployeeNicLiabilityEnum;

  @Metadata({ data: "json, name=OffPayrollWorker" })
  offPayrollWorker?: boolean;

  @Metadata({ data: "json, name=OnStrike" })
  onStrike?: boolean;

  @Metadata({ data: "json, name=PassportNumber" })
  passportNumber?: string;

  @Metadata({ data: "json, name=PaySchedule" })
  paySchedule?: EmployeeEmployeePaySchedule;

  @Metadata({ data: "json, name=PaymentMethod" })
  paymentMethod?: EmployeeEmployeePaymentMethodEnum;

  @Metadata({ data: "json, name=PaymentToANonIndividual" })
  paymentToANonIndividual?: boolean;

  @Metadata({ data: "json, name=Region" })
  region?: EmployeeEmployeeRegionEnum;

  @Metadata({ data: "json, name=Revision" })
  revision?: number;

  @Metadata({ data: "json, name=RuleExclusions" })
  ruleExclusions?: EmployeeEmployeeRuleExclusionsEnum;

  @Metadata({ data: "json, name=Seconded" })
  seconded?: EmployeeEmployeeSecondedEnum;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=StarterDeclaration" })
  starterDeclaration?: EmployeeEmployeeStarterDeclarationEnum;

  @Metadata({ data: "json, name=Territory" })
  territory?: EmployeeEmployeeTerritoryEnum;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=WorkingWeek" })
  workingWeek?: EmployeeEmployeeWorkingWeekEnum;
}


export class Employee extends SpeakeasyBase {
  @Metadata({ data: "json, name=Employee" })
  employee?: EmployeeEmployee;
}
