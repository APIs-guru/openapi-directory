from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import calendartype_enum
from . import validationerror


@dataclass_json
@dataclass
class PayrollCalendar:
    calendar_type: Optional[calendartype_enum.CalendarTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalendarType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    payment_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentDate' }})
    payroll_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayrollCalendarID' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    validation_errors: Optional[List[validationerror.ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationErrors' }})
    
