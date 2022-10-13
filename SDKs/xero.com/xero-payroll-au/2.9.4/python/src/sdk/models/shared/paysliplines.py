from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deductionline
from . import earningsline
from . import leaveaccrualline
from . import leaveearningsline
from . import reimbursementline
from . import superannuationline
from . import taxline
from . import earningsline


@dataclass_json
@dataclass
class PayslipLines:
    deduction_lines: Optional[List[deductionline.DeductionLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeductionLines' }})
    earnings_lines: Optional[List[earningsline.EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarningsLines' }})
    leave_accrual_lines: Optional[List[leaveaccrualline.LeaveAccrualLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveAccrualLines' }})
    leave_earnings_lines: Optional[List[leaveearningsline.LeaveEarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveEarningsLines' }})
    reimbursement_lines: Optional[List[reimbursementline.ReimbursementLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReimbursementLines' }})
    superannuation_lines: Optional[List[superannuationline.SuperannuationLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuperannuationLines' }})
    tax_lines: Optional[List[taxline.TaxLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxLines' }})
    timesheet_earnings_lines: Optional[List[earningsline.EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimesheetEarningsLines' }})
    
