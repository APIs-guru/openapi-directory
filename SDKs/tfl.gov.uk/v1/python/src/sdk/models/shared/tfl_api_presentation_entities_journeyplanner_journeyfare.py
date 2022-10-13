from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_journeyplanner_farecaveat
from . import tfl_api_presentation_entities_journeyplanner_fare


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerJourneyFare:
    caveats: Optional[List[tfl_api_presentation_entities_journeyplanner_farecaveat.TflAPIPresentationEntitiesJourneyPlannerFareCaveat]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caveats' }})
    fares: Optional[List[tfl_api_presentation_entities_journeyplanner_fare.TflAPIPresentationEntitiesJourneyPlannerFare]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fares' }})
    total_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCost' }})
    
