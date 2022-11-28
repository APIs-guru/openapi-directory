from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayRunInput:
    payroll_calendar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayrollCalendarID') }})
    deductions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deductions') }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetPay') }})
    pay_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRunID') }})
    pay_run_period_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRunPeriodEndDate') }})
    pay_run_period_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRunPeriodStartDate') }})
    pay_run_status: Optional[PayRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRunStatus') }})
    payment_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDate') }})
    payslip_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayslipMessage') }})
    payslips: Optional[List[PayslipSummaryInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Payslips') }})
    reimbursement: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reimbursement') }})
    super: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Super') }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tax') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    wages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Wages') }})
    

@dataclass_json
@dataclass
class PayRun:
    payroll_calendar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayrollCalendarID') }})
    deductions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deductions') }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetPay') }})
    pay_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRunID') }})
    pay_run_period_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRunPeriodEndDate') }})
    pay_run_period_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRunPeriodStartDate') }})
    pay_run_status: Optional[PayRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRunStatus') }})
    payment_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDate') }})
    payslip_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayslipMessage') }})
    payslips: Optional[List[PayslipSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Payslips') }})
    reimbursement: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reimbursement') }})
    super: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Super') }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tax') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    wages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Wages') }})
    
