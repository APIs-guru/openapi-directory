from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EarningsRateInput:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountCode') }})
    accrue_leave: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccrueLeave') }})
    allowance_type: Optional[AllowanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowanceType') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    current_record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentRecord') }})
    earnings_rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsRateID') }})
    earnings_type: Optional[EarningsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsType') }})
    employment_termination_payment_type: Optional[EmploymentTerminationPaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmploymentTerminationPaymentType') }})
    is_exempt_from_super: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsExemptFromSuper') }})
    is_exempt_from_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsExemptFromTax') }})
    is_reportable_as_w1: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsReportableAsW1') }})
    multiplier: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Multiplier') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rate_per_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatePerUnit') }})
    rate_type: Optional[RateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    type_of_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeOfUnits') }})
    

@dataclass_json
@dataclass
class EarningsRate:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountCode') }})
    accrue_leave: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccrueLeave') }})
    allowance_type: Optional[AllowanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowanceType') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    current_record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentRecord') }})
    earnings_rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsRateID') }})
    earnings_type: Optional[EarningsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsType') }})
    employment_termination_payment_type: Optional[EmploymentTerminationPaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmploymentTerminationPaymentType') }})
    is_exempt_from_super: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsExemptFromSuper') }})
    is_exempt_from_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsExemptFromTax') }})
    is_reportable_as_w1: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsReportableAsW1') }})
    multiplier: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Multiplier') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rate_per_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatePerUnit') }})
    rate_type: Optional[RateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    type_of_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeOfUnits') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    
