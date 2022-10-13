from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_common_journeyplanner_jpelevation
from . import tfl_api_presentation_entities_identifier


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerPath:
    elevation: Optional[List[tfl_api_common_journeyplanner_jpelevation.TflAPICommonJourneyPlannerJpElevation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elevation' }})
    line_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineString' }})
    stop_points: Optional[List[tfl_api_presentation_entities_identifier.TflAPIPresentationEntitiesIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopPoints' }})
    
