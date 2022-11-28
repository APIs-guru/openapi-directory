from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerItineraryResult:
    r"""TflAPIPresentationEntitiesJourneyPlannerItineraryResult
    A DTO representing a list of possible journeys.
    """
    
    cycle_hire_docking_station_data: Optional[TflAPIPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycleHireDockingStationData') }})
    journey_vector: Optional[TflAPIPresentationEntitiesJourneyPlannerJourneyVector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('journeyVector') }})
    journeys: Optional[List[TflAPIPresentationEntitiesJourneyPlannerJourney]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('journeys') }})
    lines: Optional[List[TflAPIPresentationEntitiesLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    recommended_max_age_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedMaxAgeMinutes') }})
    search_criteria: Optional[TflAPIPresentationEntitiesJourneyPlannerSearchCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchCriteria') }})
    stop_messages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopMessages') }})
    
