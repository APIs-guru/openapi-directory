from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import payrollcalendar


@dataclass_json
@dataclass
class PayrollCalendars:
    payroll_calendars: Optional[List[payrollcalendar.PayrollCalendar]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayrollCalendars' }})
    
