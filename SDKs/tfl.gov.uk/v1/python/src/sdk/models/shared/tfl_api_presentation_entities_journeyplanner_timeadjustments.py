from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_journeyplanner_timeadjustment
from . import tfl_api_presentation_entities_journeyplanner_timeadjustment
from . import tfl_api_presentation_entities_journeyplanner_timeadjustment
from . import tfl_api_presentation_entities_journeyplanner_timeadjustment


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerTimeAdjustments:
    earlier: Optional[tfl_api_presentation_entities_journeyplanner_timeadjustment.TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earlier' }})
    earliest: Optional[tfl_api_presentation_entities_journeyplanner_timeadjustment.TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earliest' }})
    later: Optional[tfl_api_presentation_entities_journeyplanner_timeadjustment.TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'later' }})
    latest: Optional[tfl_api_presentation_entities_journeyplanner_timeadjustment.TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest' }})
    
