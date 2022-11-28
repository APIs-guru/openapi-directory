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
class PayrollCalendar:
    calendar_type: Optional[CalendarTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalendarType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    payment_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDate') }})
    payroll_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayrollCalendarID') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    

@dataclass_json
@dataclass
class PayrollCalendarInput:
    calendar_type: Optional[CalendarTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalendarType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    payment_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDate') }})
    payroll_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayrollCalendarID') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    
