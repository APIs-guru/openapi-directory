from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OpeningBalances:
    deduction_lines: Optional[List[DeductionLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionLines') }})
    earnings_lines: Optional[List[EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsLines') }})
    leave_lines: Optional[List[LeaveLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveLines') }})
    opening_balance_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningBalanceDate') }})
    reimbursement_lines: Optional[List[ReimbursementLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementLines') }})
    super_lines: Optional[List[SuperLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperLines') }})
    tax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tax') }})
    
