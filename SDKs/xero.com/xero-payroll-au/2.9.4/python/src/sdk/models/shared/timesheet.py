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
class TimesheetInput:
    employee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    end_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    start_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hours') }})
    status: Optional[TimesheetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    timesheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetID') }})
    timesheet_lines: Optional[List[TimesheetLineInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetLines') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    

@dataclass_json
@dataclass
class Timesheet:
    employee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    end_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    start_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hours') }})
    status: Optional[TimesheetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    timesheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetID') }})
    timesheet_lines: Optional[List[TimesheetLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetLines') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    
