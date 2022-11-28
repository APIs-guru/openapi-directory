from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PicoLoadmanagementGroupDto:
    r"""PicoLoadmanagementGroupDto
    DTO for the pico loadmanagement group
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    max_current: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCurrent') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    number_of_stations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfStations') }})
    
