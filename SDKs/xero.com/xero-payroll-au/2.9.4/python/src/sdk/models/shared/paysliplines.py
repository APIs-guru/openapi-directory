from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayslipLines:
    deduction_lines: Optional[List[DeductionLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionLines') }})
    earnings_lines: Optional[List[EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsLines') }})
    leave_accrual_lines: Optional[List[LeaveAccrualLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveAccrualLines') }})
    leave_earnings_lines: Optional[List[LeaveEarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveEarningsLines') }})
    reimbursement_lines: Optional[List[ReimbursementLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementLines') }})
    superannuation_lines: Optional[List[SuperannuationLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperannuationLines') }})
    tax_lines: Optional[List[TaxLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxLines') }})
    timesheet_earnings_lines: Optional[List[EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetEarningsLines') }})
    
