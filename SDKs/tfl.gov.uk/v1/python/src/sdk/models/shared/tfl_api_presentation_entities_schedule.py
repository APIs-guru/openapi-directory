from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesSchedule:
    first_journey: Optional[TflAPIPresentationEntitiesKnownJourney] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstJourney') }})
    known_journeys: Optional[List[TflAPIPresentationEntitiesKnownJourney]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownJourneys') }})
    last_journey: Optional[TflAPIPresentationEntitiesKnownJourney] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastJourney') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    periods: Optional[List[TflAPIPresentationEntitiesPeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    
