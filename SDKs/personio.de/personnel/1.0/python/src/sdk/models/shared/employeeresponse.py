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
class EmployeeResponseDataAttributes:
    absence_entitlement: Optional[AbsenceEntitlement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absence_entitlement') }})
    contract_end_date: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contract_end_date') }})
    cost_centers: Optional[CostCenters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost_centers') }})
    created_at: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    department: Optional[Department] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    email: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    employment_type: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_type') }})
    first_name: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    fix_salary: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fix_salary') }})
    gender: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    hire_date: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hire_date') }})
    holiday_calendar: Optional[HolidayCalendar] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holiday_calendar') }})
    hourly_salary: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourly_salary') }})
    id: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    office: Optional[Office] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('office') }})
    position: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    probation_period_end: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probation_period_end') }})
    status: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    supervisor: Optional[Supervisor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supervisor') }})
    termination_date: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_date') }})
    termination_reason: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_reason') }})
    termination_type: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_type') }})
    vacation_day_balance: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vacation_day_balance') }})
    weekly_working_hours: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_working_hours') }})
    work_schedule: Optional[WorkSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('work_schedule') }})
    

@dataclass_json
@dataclass
class EmployeeResponseData:
    attributes: List[EmployeeResponseDataAttributes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class EmployeeResponse:
    data: EmployeeResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
