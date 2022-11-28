from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EmployeeGenderEnum(str, Enum):
    N = "N"
    M = "M"
    F = "F"
    I = "I"


@dataclass_json
@dataclass
class EmployeeInput:
    date_of_birth: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfBirth') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    bank_accounts: Optional[List[BankAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankAccounts') }})
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classification') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    employee_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeGroupName') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    gender: Optional[EmployeeGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    home_address: Optional[HomeAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeAddress') }})
    is_authorised_to_approve_leave: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAuthorisedToApproveLeave') }})
    is_authorised_to_approve_timesheets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAuthorisedToApproveTimesheets') }})
    job_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobTitle') }})
    leave_balances: Optional[List[LeaveBalance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveBalances') }})
    leave_lines: Optional[List[LeaveLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveLines') }})
    middle_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MiddleNames') }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mobile') }})
    opening_balances: Optional[OpeningBalances] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningBalances') }})
    ordinary_earnings_rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrdinaryEarningsRateID') }})
    pay_template: Optional[PayTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayTemplate') }})
    payroll_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayrollCalendarID') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Phone') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    status: Optional[EmployeeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    super_memberships: Optional[List[SuperMembership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperMemberships') }})
    tax_declaration: Optional[TaxDeclarationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxDeclaration') }})
    termination_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationDate') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    twitter_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TwitterUserName') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    

@dataclass_json
@dataclass
class Employee:
    date_of_birth: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfBirth') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    bank_accounts: Optional[List[BankAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankAccounts') }})
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classification') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    employee_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeGroupName') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    gender: Optional[EmployeeGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    home_address: Optional[HomeAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeAddress') }})
    is_authorised_to_approve_leave: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAuthorisedToApproveLeave') }})
    is_authorised_to_approve_timesheets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAuthorisedToApproveTimesheets') }})
    job_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobTitle') }})
    leave_balances: Optional[List[LeaveBalance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveBalances') }})
    leave_lines: Optional[List[LeaveLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveLines') }})
    middle_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MiddleNames') }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mobile') }})
    opening_balances: Optional[OpeningBalances] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningBalances') }})
    ordinary_earnings_rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrdinaryEarningsRateID') }})
    pay_template: Optional[PayTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayTemplate') }})
    payroll_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayrollCalendarID') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Phone') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    status: Optional[EmployeeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    super_memberships: Optional[List[SuperMembership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperMemberships') }})
    tax_declaration: Optional[TaxDeclaration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxDeclaration') }})
    termination_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationDate') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    twitter_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TwitterUserName') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    
