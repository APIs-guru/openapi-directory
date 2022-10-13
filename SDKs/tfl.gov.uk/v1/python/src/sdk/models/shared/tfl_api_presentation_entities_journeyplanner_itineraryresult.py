from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_journeyplanner_journeyplannercyclehiredockingstationdata
from . import tfl_api_presentation_entities_journeyplanner_journeyvector
from . import tfl_api_presentation_entities_journeyplanner_journey
from . import tfl_api_presentation_entities_line
from . import tfl_api_presentation_entities_journeyplanner_searchcriteria


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerItineraryResult:
    cycle_hire_docking_station_data: Optional[tfl_api_presentation_entities_journeyplanner_journeyplannercyclehiredockingstationdata.TflAPIPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycleHireDockingStationData' }})
    journey_vector: Optional[tfl_api_presentation_entities_journeyplanner_journeyvector.TflAPIPresentationEntitiesJourneyPlannerJourneyVector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'journeyVector' }})
    journeys: Optional[List[tfl_api_presentation_entities_journeyplanner_journey.TflAPIPresentationEntitiesJourneyPlannerJourney]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'journeys' }})
    lines: Optional[List[tfl_api_presentation_entities_line.TflAPIPresentationEntitiesLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lines' }})
    recommended_max_age_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendedMaxAgeMinutes' }})
    search_criteria: Optional[tfl_api_presentation_entities_journeyplanner_searchcriteria.TflAPIPresentationEntitiesJourneyPlannerSearchCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchCriteria' }})
    stop_messages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopMessages' }})
    
