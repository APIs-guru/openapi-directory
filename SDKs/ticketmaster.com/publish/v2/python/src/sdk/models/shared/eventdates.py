from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventDates:
    r"""EventDates
    Event's Dates
    """
    
    access: Optional[AccessDates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    end: Optional[EndDates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[StartDates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    status: Optional[EventStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
