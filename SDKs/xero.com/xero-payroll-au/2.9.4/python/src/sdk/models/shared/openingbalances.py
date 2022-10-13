from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deductionline
from . import earningsline
from . import leaveline
from . import reimbursementline
from . import superline


@dataclass_json
@dataclass
class OpeningBalances:
    deduction_lines: Optional[List[deductionline.DeductionLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeductionLines' }})
    earnings_lines: Optional[List[earningsline.EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarningsLines' }})
    leave_lines: Optional[List[leaveline.LeaveLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveLines' }})
    opening_balance_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningBalanceDate' }})
    reimbursement_lines: Optional[List[reimbursementline.ReimbursementLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReimbursementLines' }})
    super_lines: Optional[List[superline.SuperLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuperLines' }})
    tax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tax' }})
    
