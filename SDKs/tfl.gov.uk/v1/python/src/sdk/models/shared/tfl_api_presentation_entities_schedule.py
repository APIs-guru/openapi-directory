from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_knownjourney
from . import tfl_api_presentation_entities_knownjourney
from . import tfl_api_presentation_entities_knownjourney
from . import tfl_api_presentation_entities_period


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesSchedule:
    first_journey: Optional[tfl_api_presentation_entities_knownjourney.TflAPIPresentationEntitiesKnownJourney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstJourney' }})
    known_journeys: Optional[List[tfl_api_presentation_entities_knownjourney.TflAPIPresentationEntitiesKnownJourney]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knownJourneys' }})
    last_journey: Optional[tfl_api_presentation_entities_knownjourney.TflAPIPresentationEntitiesKnownJourney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastJourney' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    periods: Optional[List[tfl_api_presentation_entities_period.TflAPIPresentationEntitiesPeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periods' }})
    
