from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportSummary:
    average_speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageSpeed') }})
    device_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    engine_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engineHours') }})
    max_speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSpeed') }})
    spent_fuel: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spentFuel') }})
    
