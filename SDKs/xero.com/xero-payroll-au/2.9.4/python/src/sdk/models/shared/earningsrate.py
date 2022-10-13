from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import allowancetype_enum
from . import earningstype_enum
from . import employmentterminationpaymenttype_enum
from . import ratetype_enum


@dataclass_json
@dataclass
class EarningsRate:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountCode' }})
    accrue_leave: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccrueLeave' }})
    allowance_type: Optional[allowancetype_enum.AllowanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowanceType' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    current_record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentRecord' }})
    earnings_rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarningsRateID' }})
    earnings_type: Optional[earningstype_enum.EarningsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarningsType' }})
    employment_termination_payment_type: Optional[employmentterminationpaymenttype_enum.EmploymentTerminationPaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmploymentTerminationPaymentType' }})
    is_exempt_from_super: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsExemptFromSuper' }})
    is_exempt_from_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsExemptFromTax' }})
    is_reportable_as_w1: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsReportableAsW1' }})
    multiplier: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Multiplier' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rate_per_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RatePerUnit' }})
    rate_type: Optional[ratetype_enum.RateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateType' }})
    type_of_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeOfUnits' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    
