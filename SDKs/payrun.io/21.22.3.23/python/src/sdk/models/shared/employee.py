from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum(str, Enum):
    NONE = "None"
    OPT_OUT = "OptOut"
    OPT_IN = "OptIn"
    VOLUNTARY_JOINER = "VoluntaryJoiner"
    CONTRACTUAL_PENSION = "ContractualPension"
    CEASED_MEMBERSHIP = "CeasedMembership"
    LEAVER = "Leaver"
    EXCLUDED = "Excluded"

class EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum(str, Enum):
    OTHER_NOT_KNOWN = "OtherNotKnown"
    NOT_A_WORKER = "NotAWorker"
    NOT_UK_WORKER = "NotUKWorker"
    TEMPORARY_UK_WORKER = "TemporaryUKWorker"
    OUTSIDE_AGE_RANGE = "OutsideAgeRange"
    SINGLE_EMPLOYEE_DIRECTOR = "SingleEmployeeDirector"
    CEASED_MEMBERSHIP_WITHIN12_MONTHS = "CeasedMembershipWithin12Months"
    CEASED_MEMBERSHIP_BEYOND12_MONTHS = "CeasedMembershipBeyond12Months"
    WORKER_WULS_WITHIN12_MONTH = "WorkerWULSWithin12Month"
    WORKER_WULS_BEYOND12_MONTH = "WorkerWULSBeyond12Month"
    WORKER_IN_NOTICE_PERIOD = "WorkerInNoticePeriod"
    WORKER_TAX_PROTECTION = "WorkerTaxProtection"


@dataclass_json
@dataclass
class EmployeeEmployeeAddressAddress:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address3' }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address4' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Postcode' }})
    

@dataclass_json
@dataclass
class EmployeeEmployeeBankAccountBankAccount:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountNumber' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    sort_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortCode' }})
    

@dataclass_json
@dataclass
class EmployeeEmployeeEmployeePartnerEmployeePartner:
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initials' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MiddleName' }})
    ni_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NiNumber' }})
    
class EmployeeEmployeeGenderGenderEnum(str, Enum):
    UNKNOWN = "Unknown"
    MALE = "Male"
    FEMALE = "Female"

class EmployeeEmployeeLeaverReasonLeaverReasonEnum(str, Enum):
    RESIGNED = "Resigned"
    DISMISSED = "Dismissed"
    REDUNDANT = "Redundant"
    RETIRED = "Retired"
    DECEASED = "Deceased"
    LEGAL_CUSTODY = "LegalCustody"
    OTHER = "Other"

class EmployeeEmployeeMaritalStatusMaritalStatusEnum(str, Enum):
    NOT_SET = "NotSet"
    SINGLE = "Single"
    MARRIED = "Married"
    DIVORCED = "Divorced"
    WIDOWED = "Widowed"

class EmployeeEmployeeNicLiabilityNicLiabilityEnum(str, Enum):
    HAS_OTHER_JOB = "HasOtherJob"
    IS_FEMALE_ENTITLED_TO_REDUCED_RATE = "IsFemaleEntitledToReducedRate"
    IS_NOT_LIABLE = "IsNotLiable"
    IS_CONTRACTED_OUT = "IsContractedOut"
    IS_FULLY_LIABLE = "IsFullyLiable"
    IS_APPRENTICE = "IsApprentice"
    LEAVER_BEYOND6_WEEKS = "LeaverBeyond6Weeks"
    PAYMENT_AFTER_LEAVING = "PaymentAfterLeaving"


@dataclass_json
@dataclass
class EmployeeEmployeePaySchedulePaySchedule:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    
class EmployeeEmployeePaymentMethodPaymentMethodEnum(str, Enum):
    NOT_SET = "NotSet"
    CASH = "Cash"
    CHEQUE = "Cheque"
    BACS = "BACS"
    FASTER_PAYMENTS = "FasterPayments"
    OTHER = "Other"

class EmployeeEmployeeRegionRegionEnum(str, Enum):
    NOT_SET = "NotSet"
    ENGLAND = "England"
    SCOTLAND = "Scotland"
    WALES = "Wales"

class EmployeeEmployeeRuleExclusionsRuleExclusionsEnum(str, Enum):
    NONE = "None"
    NI_MISSING_PAY_INSTRUCTION_RULE = "NiMissingPayInstructionRule"
    TAX_MISSING_PAY_INSTRUCTION_RULE = "TaxMissingPayInstructionRule"
    TAX_CODE_UPLIFT_RULE = "TaxCodeUpliftRule"
    NI_SET_EXPECTED_LETTER_RULE = "NiSetExpectedLetterRule"
    NI_DATE_OF_BIRTH_CHANGE_RETROSPECTIVE_C_RULE = "NiDateOfBirthChangeRetrospectiveCRule"
    NI_DEFERMENT_STATUS_CHANGE_RULE = "NiDefermentStatusChangeRule"
    NI_END_CONTRACTED_OUT_TRANSFER_RULE = "NiEndContractedOutTransferRule"
    PAYMENT_AFTER_LEAVING_RULE = "PaymentAfterLeavingRule"
    LEAVER_END_INSTRUCTIONS_RULE = "LeaverEndInstructionsRule"
    P45_STUDENT_LOAN_INSTRUCTION_RULE = "P45StudentLoanInstructionRule"
    P45_TAX_INSTRUCTION_RULE = "P45TaxInstructionRule"
    P45_YTD_TAX_RULE = "P45YtdTaxRule"
    YTD_INSTRUCTION_RULE = "YtdInstructionRule"
    TAX_CODE_REGION_CHANGE_RULE = "TaxCodeRegionChangeRule"
    AUTO_ENROLMENT_STATUS_CHANGE_RULE = "AutoEnrolmentStatusChangeRule"
    EMPLOYEE_DECEASED_RULE = "EmployeeDeceasedRule"
    BENEFIT_INSTRUCTION_AUTO_END_RULE = "BenefitInstructionAutoEndRule"

class EmployeeEmployeeSecondedSecondedEnum(str, Enum):
    NOT_SET = "NotSet"
    STAY183_DAYS_OR_MORE = "Stay183DaysOrMore"
    STAY_LESS_THAN183_DAYS = "StayLessThan183Days"
    IN_OUT_UK = "InOutUk"

class EmployeeEmployeeStarterDeclarationStarterDeclarationEnum(str, Enum):
    PREVIOUSLY_REPORTED = "PreviouslyReported"
    A = "A"
    B = "B"
    C = "C"

class EmployeeEmployeeTerritoryTerritoryEnum(str, Enum):
    UNITED_KINGDOM = "UnitedKingdom"

class EmployeeEmployeeWorkingWeekWorkingWeekEnum(str, Enum):
    NONE = "None"
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    ALL_WEEK_DAYS = "AllWeekDays"
    SATURDAY = "Saturday"
    SUNDAY = "Sunday"
    ALL_DAYS = "AllDays"


@dataclass_json
@dataclass
class EmployeeEmployeeEmployee:
    ae_assessment_override: Optional[EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AEAssessmentOverride' }})
    ae_assessment_override_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AEAssessmentOverrideDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ae_exclusion_reason_code: Optional[EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AEExclusionReasonCode' }})
    ae_postponement_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AEPostponementDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    address: Optional[EmployeeEmployeeAddressAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    bank_account: Optional[EmployeeEmployeeBankAccountBankAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankAccount' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    date_of_birth: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateOfBirth', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deactivated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deactivated' }})
    directorship_appointment_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectorshipAppointmentDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    eea_citizen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EEACitizen' }})
    epm6: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EPM6' }})
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EffectiveDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employee_partner: Optional[EmployeeEmployeeEmployeePartnerEmployeePartner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployeePartner' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    gender: Optional[EmployeeEmployeeGenderGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gender' }})
    hours_per_week: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoursPerWeek' }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initials' }})
    irregular_employment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IrregularEmployment' }})
    is_agency_worker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsAgencyWorker' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    leaver_reason: Optional[EmployeeEmployeeLeaverReasonLeaverReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaverReason' }})
    leaving_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeavingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    marital_status: Optional[EmployeeEmployeeMaritalStatusMaritalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaritalStatus' }})
    meta_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetaData' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MiddleName' }})
    ni_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NiNumber' }})
    nic_liability: Optional[EmployeeEmployeeNicLiabilityNicLiabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NicLiability' }})
    off_payroll_worker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OffPayrollWorker' }})
    on_strike: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnStrike' }})
    passport_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PassportNumber' }})
    pay_schedule: Optional[EmployeeEmployeePaySchedulePaySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaySchedule' }})
    payment_method: Optional[EmployeeEmployeePaymentMethodPaymentMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentMethod' }})
    payment_to_a_non_individual: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentToANonIndividual' }})
    region: Optional[EmployeeEmployeeRegionRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Revision' }})
    rule_exclusions: Optional[EmployeeEmployeeRuleExclusionsRuleExclusionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleExclusions' }})
    seconded: Optional[EmployeeEmployeeSecondedSecondedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Seconded' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    starter_declaration: Optional[EmployeeEmployeeStarterDeclarationStarterDeclarationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StarterDeclaration' }})
    territory: Optional[EmployeeEmployeeTerritoryTerritoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Territory' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    working_week: Optional[EmployeeEmployeeWorkingWeekWorkingWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkingWeek' }})
    

@dataclass_json
@dataclass
class Employee:
    employee: Optional[EmployeeEmployeeEmployee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employee' }})
    
