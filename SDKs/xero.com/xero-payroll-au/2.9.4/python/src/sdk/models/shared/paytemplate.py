from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayTemplate:
    deduction_lines: Optional[List[DeductionLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionLines') }})
    earnings_lines: Optional[List[EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsLines') }})
    leave_lines: Optional[List[LeaveLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveLines') }})
    reimbursement_lines: Optional[List[ReimbursementLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementLines') }})
    super_lines: Optional[List[SuperLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperLines') }})
    
