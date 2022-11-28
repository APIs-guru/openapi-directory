from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3StopAccessibility:
    audio_customer_information: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_customer_information') }})
    escalator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('escalator') }})
    hearing_loop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hearing_loop') }})
    lift: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lift') }})
    lighting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lighting') }})
    platform_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform_number') }})
    stairs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stairs') }})
    stop_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_accessible') }})
    tactile_ground_surface_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tactile_ground_surface_indicator') }})
    waiting_room: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    wheelchair: Optional[V3StopAccessibilityWheelchair] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wheelchair') }})
    
