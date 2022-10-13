from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deductiontype
from . import earningsrate
from . import leavetype
from . import reimbursementtype


@dataclass_json
@dataclass
class PayItem:
    deduction_types: Optional[List[deductiontype.DeductionType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeductionTypes' }})
    earnings_rates: Optional[List[earningsrate.EarningsRate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarningsRates' }})
    leave_types: Optional[List[leavetype.LeaveType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveTypes' }})
    reimbursement_types: Optional[List[reimbursementtype.ReimbursementType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReimbursementTypes' }})
    
