from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_servicefrequency
from . import tfl_api_presentation_entities_twentyfourhourclocktime
from . import tfl_api_presentation_entities_twentyfourhourclocktime

class TflAPIPresentationEntitiesPeriodTypeEnum(str, Enum):
    NORMAL = "Normal"
    FREQUENCY_HOURS = "FrequencyHours"
    FREQUENCY_MINUTES = "FrequencyMinutes"
    UNKNOWN = "Unknown"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesPeriod:
    frequency: Optional[tfl_api_presentation_entities_servicefrequency.TflAPIPresentationEntitiesServiceFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    from_time: Optional[tfl_api_presentation_entities_twentyfourhourclocktime.TflAPIPresentationEntitiesTwentyFourHourClockTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromTime' }})
    to_time: Optional[tfl_api_presentation_entities_twentyfourhourclocktime.TflAPIPresentationEntitiesTwentyFourHourClockTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toTime' }})
    type: Optional[TflAPIPresentationEntitiesPeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
