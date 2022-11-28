from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayItem:
    deduction_types: Optional[List[DeductionType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionTypes') }})
    earnings_rates: Optional[List[EarningsRate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsRates') }})
    leave_types: Optional[List[LeaveType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveTypes') }})
    reimbursement_types: Optional[List[ReimbursementType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementTypes') }})
    

@dataclass_json
@dataclass
class PayItemInput:
    deduction_types: Optional[List[DeductionTypeInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionTypes') }})
    earnings_rates: Optional[List[EarningsRateInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsRates') }})
    leave_types: Optional[List[LeaveTypeInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveTypes') }})
    reimbursement_types: Optional[List[ReimbursementTypeInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementTypes') }})
    
