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
class Payslip:
    deduction_lines: Optional[List[DeductionLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionLines') }})
    deductions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deductions') }})
    earnings_lines: Optional[List[EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsLines') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    leave_accrual_lines: Optional[List[LeaveAccrualLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveAccrualLines') }})
    leave_earnings_lines: Optional[List[LeaveEarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveEarningsLines') }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetPay') }})
    payslip_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayslipID') }})
    reimbursement_lines: Optional[List[ReimbursementLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementLines') }})
    reimbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reimbursements') }})
    super: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Super') }})
    superannuation_lines: Optional[List[SuperannuationLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperannuationLines') }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tax') }})
    tax_lines: Optional[List[TaxLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxLines') }})
    timesheet_earnings_lines: Optional[List[EarningsLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetEarningsLines') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    wages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Wages') }})
    
