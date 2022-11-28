from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayslipSummaryInput:
    deductions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deductions') }})
    employee_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeGroup') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetPay') }})
    payslip_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayslipID') }})
    reimbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reimbursements') }})
    super: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Super') }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tax') }})
    wages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Wages') }})
    

@dataclass_json
@dataclass
class PayslipSummary:
    deductions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deductions') }})
    employee_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeGroup') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetPay') }})
    payslip_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayslipID') }})
    reimbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reimbursements') }})
    super: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Super') }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tax') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    wages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Wages') }})
    
