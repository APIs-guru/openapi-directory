from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LeaveLine:
    annual_number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnualNumberOfUnits') }})
    calculation_type: Optional[LeaveLineCalculationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationType') }})
    employment_termination_payment_type: Optional[EmploymentTerminationPaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmploymentTerminationPaymentType') }})
    entitlement_final_pay_payout_type: Optional[EntitlementFinalPayPayoutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntitlementFinalPayPayoutType') }})
    full_time_number_of_units_per_period: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullTimeNumberOfUnitsPerPeriod') }})
    include_superannuation_guarantee_contribution: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeSuperannuationGuaranteeContribution') }})
    leave_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveTypeID') }})
    number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfUnits') }})
    
