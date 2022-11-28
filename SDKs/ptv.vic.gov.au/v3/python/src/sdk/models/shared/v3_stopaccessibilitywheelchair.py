from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class V3StopAccessibilityWheelchair:
    accessible_ramp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessible_ramp') }})
    low_ticket_counter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low_ticket_counter') }})
    manouvering: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manouvering') }})
    parking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parking') }})
    raised_platform: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raised_platform') }})
    raised_platform_shelther: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raised_platform_shelther') }})
    ramp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramp') }})
    secondary_path: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary_path') }})
    steep_ramp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steep_ramp') }})
    telephone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephone') }})
    toilet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toilet') }})
    
