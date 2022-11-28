from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Hours:
    r"""Hours
    Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
    """
    
    friday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friday') }})
    monday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monday') }})
    saturday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturday') }})
    sunday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday') }})
    thursday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thursday') }})
    tuesday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tuesday') }})
    wednesday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wednesday') }})
    
