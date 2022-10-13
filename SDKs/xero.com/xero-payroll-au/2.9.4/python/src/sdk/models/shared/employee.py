from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import bankaccount
from . import homeaddress
from . import leavebalance
from . import leaveline
from . import openingbalances
from . import paytemplate
from . import employeestatus_enum
from . import supermembership
from . import taxdeclaration
from . import validationerror

class EmployeeGenderEnum(str, Enum):
    N = "N"
    M = "M"
    F = "F"
    I = "I"


@dataclass_json
@dataclass
class Employee:
    bank_accounts: Optional[List[bankaccount.BankAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankAccounts' }})
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Classification' }})
    date_of_birth: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateOfBirth' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    employee_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployeeGroupName' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployeeID' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    gender: Optional[EmployeeGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gender' }})
    home_address: Optional[homeaddress.HomeAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeAddress' }})
    is_authorised_to_approve_leave: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsAuthorisedToApproveLeave' }})
    is_authorised_to_approve_timesheets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsAuthorisedToApproveTimesheets' }})
    job_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobTitle' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    leave_balances: Optional[List[leavebalance.LeaveBalance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveBalances' }})
    leave_lines: Optional[List[leaveline.LeaveLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveLines' }})
    middle_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MiddleNames' }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mobile' }})
    opening_balances: Optional[openingbalances.OpeningBalances] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningBalances' }})
    ordinary_earnings_rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrdinaryEarningsRateID' }})
    pay_template: Optional[paytemplate.PayTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayTemplate' }})
    payroll_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayrollCalendarID' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phone' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate' }})
    status: Optional[employeestatus_enum.EmployeeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    super_memberships: Optional[List[supermembership.SuperMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuperMemberships' }})
    tax_declaration: Optional[taxdeclaration.TaxDeclaration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxDeclaration' }})
    termination_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminationDate' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    twitter_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TwitterUserName' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    validation_errors: Optional[List[validationerror.ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationErrors' }})
    
