from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import payrunstatus_enum
from . import payslipsummary
from . import validationerror


@dataclass_json
@dataclass
class PayRun:
    deductions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deductions' }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetPay' }})
    pay_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayRunID' }})
    pay_run_period_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayRunPeriodEndDate' }})
    pay_run_period_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayRunPeriodStartDate' }})
    pay_run_status: Optional[payrunstatus_enum.PayRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayRunStatus' }})
    payment_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentDate' }})
    payroll_calendar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayrollCalendarID' }})
    payslip_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayslipMessage' }})
    payslips: Optional[List[payslipsummary.PayslipSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Payslips' }})
    reimbursement: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reimbursement' }})
    super: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Super' }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tax' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    validation_errors: Optional[List[validationerror.ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationErrors' }})
    wages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Wages' }})
    
