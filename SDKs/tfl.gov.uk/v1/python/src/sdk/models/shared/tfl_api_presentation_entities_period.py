from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TflAPIPresentationEntitiesPeriodTypeEnum(str, Enum):
    NORMAL = "Normal"
    FREQUENCY_HOURS = "FrequencyHours"
    FREQUENCY_MINUTES = "FrequencyMinutes"
    UNKNOWN = "Unknown"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesPeriod:
    frequency: Optional[TflAPIPresentationEntitiesServiceFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    from_time: Optional[TflAPIPresentationEntitiesTwentyFourHourClockTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromTime') }})
    to_time: Optional[TflAPIPresentationEntitiesTwentyFourHourClockTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toTime') }})
    type: Optional[TflAPIPresentationEntitiesPeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
