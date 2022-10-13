from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmployerEmployerAddressAddress:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address3' }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address4' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Postcode' }})
    

@dataclass_json
@dataclass
class EmployerEmployerAutoEnrolmentPensionPension:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class EmployerEmployerAutoEnrolmentAutoEnrolment:
    pension: Optional[EmployerEmployerAutoEnrolmentPensionPension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pension' }})
    postponement_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostponementDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    primary_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryEmail' }})
    primary_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryFirstName' }})
    primary_job_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryJobTitle' }})
    primary_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryLastName' }})
    primary_telephone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryTelephone' }})
    re_enrolment_day_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReEnrolmentDayOffset' }})
    re_enrolment_month_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReEnrolmentMonthOffset' }})
    secondary_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryEmail' }})
    secondary_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryFirstName' }})
    secondary_job_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryJobTitle' }})
    secondary_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryLastName' }})
    secondary_telephone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryTelephone' }})
    staging_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StagingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class EmployerEmployerBankAccountBankAccount:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountNumber' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    sort_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortCode' }})
    
class EmployerEmployerHmrcSettingsSenderSenderEnum(str, Enum):
    EMPLOYER = "Employer"
    INDIVIDUAL = "Individual"
    COMPANY = "Company"
    AGENT = "Agent"
    BUREAU = "Bureau"
    PARTNERSHIP = "Partnership"
    TRUST = "Trust"
    GOVERNMENT = "Government"
    ACTING_IN_CAPACITY = "ActingInCapacity"
    OTHER = "Other"

class EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnum(str, Enum):
    AGRICULTURE = "Agriculture"
    FISHERIES_AQUACULTURE = "FisheriesAquaculture"
    ROAD_TRANSPORT = "RoadTransport"
    INDUSTRIAL = "Industrial"
    NOT_APPLICABLE = "NotApplicable"


@dataclass_json
@dataclass
class EmployerEmployerHmrcSettingsHmrcSettings:
    accounting_office_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountingOfficeRef' }})
    cotax_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'COTAXRef' }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactEmail' }})
    contact_fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactFax' }})
    contact_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactFirstName' }})
    contact_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactLastName' }})
    contact_telephone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactTelephone' }})
    employment_allowance_override: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmploymentAllowanceOverride' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    sautr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SAUTR' }})
    sender: Optional[EmployerEmployerHmrcSettingsSenderSenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sender' }})
    sender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SenderId' }})
    state_aid_sector: Optional[EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateAidSector' }})
    tax_office_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxOfficeNumber' }})
    tax_office_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxOfficeReference' }})
    
class EmployerEmployerRegionRegionEnum(str, Enum):
    NOT_SET = "NotSet"
    ENGLAND = "England"
    SCOTLAND = "Scotland"
    WALES = "Wales"

class EmployerEmployerRuleExclusionsRuleExclusionsEnum(str, Enum):
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

class EmployerEmployerTerritoryTerritoryEnum(str, Enum):
    UNITED_KINGDOM = "UnitedKingdom"


@dataclass_json
@dataclass
class EmployerEmployerEmployer:
    address: Optional[EmployerEmployerAddressAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    apprenticeship_levy_allowance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprenticeshipLevyAllowance' }})
    auto_enrolment: Optional[EmployerEmployerAutoEnrolmentAutoEnrolment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoEnrolment' }})
    bacs_service_user_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BacsServiceUserNumber' }})
    bank_account: Optional[EmployerEmployerBankAccountBankAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankAccount' }})
    calculate_apprenticeship_levy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculateApprenticeshipLevy' }})
    claim_employment_allowance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClaimEmploymentAllowance' }})
    claim_small_employer_relief: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClaimSmallEmployerRelief' }})
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EffectiveDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hmrc_settings: Optional[EmployerEmployerHmrcSettingsHmrcSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HmrcSettings' }})
    meta_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetaData' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    region: Optional[EmployerEmployerRegionRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Revision' }})
    rule_exclusions: Optional[EmployerEmployerRuleExclusionsRuleExclusionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleExclusions' }})
    territory: Optional[EmployerEmployerTerritoryTerritoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Territory' }})
    

@dataclass_json
@dataclass
class Employer:
    employer: Optional[EmployerEmployerEmployer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employer' }})
    
