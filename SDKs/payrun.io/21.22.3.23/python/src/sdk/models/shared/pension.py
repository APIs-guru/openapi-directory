from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PensionPensionPensionablePayCodes:
    pay_code: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayCode' }})
    
class PensionPensionProRataMethodEnum(str, Enum):
    NOT_SET = "NotSet"
    ANNUAL260_DAYS = "Annual260Days"
    ANNUAL365_DAYS = "Annual365Days"
    ANNUAL_QUALIFYING_DAYS = "AnnualQualifyingDays"
    DAYS_PER_CALENDAR_MONTH = "DaysPerCalendarMonth"
    DAYS_PER_TAX_PERIOD = "DaysPerTaxPeriod"
    WORKING_DAYS_PER_CALENDAR_MONTH = "WorkingDaysPerCalendarMonth"
    WEEK_DAYS_PER_CALENDAR_MONTH = "WeekDaysPerCalendarMonth"


@dataclass_json
@dataclass
class PensionPensionQualifyingPayCodes:
    pay_code: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayCode' }})
    
class PensionPensionRasRoundingOverrideEnum(str, Enum):
    NOT_SET = "NotSet"
    PENNY_UP = "PennyUp"
    PENNY_DOWN = "PennyDown"
    BANKERS = "Bankers"
    FIVE_UP = "FiveUp"
    FIVE_DOWN = "FiveDown"
    FLOOR = "Floor"
    CEILING = "Ceiling"

class PensionPensionRoundingOptionEnum(str, Enum):
    NOT_SET = "NotSet"
    PENNY_UP = "PennyUp"
    PENNY_DOWN = "PennyDown"
    BANKERS = "Bankers"
    FIVE_UP = "FiveUp"
    FIVE_DOWN = "FiveDown"
    FLOOR = "Floor"
    CEILING = "Ceiling"

class PensionPensionTaxationMethodEnum(str, Enum):
    NOT_SET = "NotSet"
    NET_BASED = "NetBased"
    RELIEF_AT_SOURCE = "ReliefAtSource"
    TAX_RELIEF_EXCLUDED = "TaxReliefExcluded"


@dataclass_json
@dataclass
class PensionPension:
    ae_compatible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AECompatible' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    contribution_deduction_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContributionDeductionDay' }})
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EffectiveDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employee_contribution_cash: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployeeContributionCash' }})
    employee_contribution_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployeeContributionPercent' }})
    employer_contribution_cash: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployerContributionCash' }})
    employer_contribution_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployerContributionPercent' }})
    employer_ni_saving: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployerNiSaving' }})
    employer_ni_saving_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployerNiSavingPercentage' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Group' }})
    lower_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LowerThreshold' }})
    meta_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetaData' }})
    pensionable_pay_codes: Optional[PensionPensionPensionablePayCodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PensionablePayCodes' }})
    pro_rata_method: Optional[PensionPensionProRataMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProRataMethod' }})
    provider_employer_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderEmployerRef' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderName' }})
    qualifying_pay_codes: Optional[PensionPensionQualifyingPayCodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualifyingPayCodes' }})
    ras_rounding_override: Optional[PensionPensionRasRoundingOverrideEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RasRoundingOverride' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Revision' }})
    rounding_option: Optional[PensionPensionRoundingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoundingOption' }})
    salary_sacrifice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SalarySacrifice' }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    sub_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubGroup' }})
    taxation_method: Optional[PensionPensionTaxationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxationMethod' }})
    upper_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpperThreshold' }})
    use_ae_thresholds: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseAEThresholds' }})
    

@dataclass_json
@dataclass
class Pension:
    pension: Optional[PensionPension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pension' }})
    
