from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DetailedServiceHours:
    r"""DetailedServiceHours
    Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
    """
    
    friday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Friday') }})
    monday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Monday') }})
    saturday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Saturday') }})
    sunday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sunday') }})
    thursday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Thursday') }})
    tuesday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tuesday') }})
    wednesday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Wednesday') }})
    
