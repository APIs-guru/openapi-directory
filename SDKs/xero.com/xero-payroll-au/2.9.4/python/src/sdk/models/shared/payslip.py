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
class Payslip:
    deduction_lines: Optional[List[deductionline.DeductionLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeductionLines' }})
    deductions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deductions' }})
    earnings_lines: Optional[List[earningsline.EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarningsLines' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployeeID' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    leave_accrual_lines: Optional[List[leaveaccrualline.LeaveAccrualLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveAccrualLines' }})
    leave_earnings_lines: Optional[List[leaveearningsline.LeaveEarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveEarningsLines' }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetPay' }})
    payslip_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayslipID' }})
    reimbursement_lines: Optional[List[reimbursementline.ReimbursementLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReimbursementLines' }})
    reimbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reimbursements' }})
    super: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Super' }})
    superannuation_lines: Optional[List[superannuationline.SuperannuationLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuperannuationLines' }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tax' }})
    tax_lines: Optional[List[taxline.TaxLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxLines' }})
    timesheet_earnings_lines: Optional[List[earningsline.EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimesheetEarningsLines' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    wages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Wages' }})
    
