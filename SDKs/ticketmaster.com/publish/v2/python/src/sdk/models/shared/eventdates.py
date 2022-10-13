from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accessdates
from . import enddates
from . import startdates
from . import eventstatus


@dataclass_json
@dataclass
class EventDates:
    access: Optional[accessdates.AccessDates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    end: Optional[enddates.EndDates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: Optional[startdates.StartDates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    status: Optional[eventstatus.EventStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
