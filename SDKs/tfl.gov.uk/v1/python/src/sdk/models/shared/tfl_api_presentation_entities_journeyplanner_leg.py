from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_point
from . import tfl_api_presentation_entities_point
from . import tfl_api_presentation_entities_disruption
from . import tfl_api_presentation_entities_instruction
from . import tfl_api_presentation_entities_identifier
from . import tfl_api_presentation_entities_journeyplanner_obstacle
from . import tfl_api_presentation_entities_journeyplanner_path
from . import tfl_api_presentation_entities_journeyplanner_plannedwork
from . import tfl_api_presentation_entities_journeyplanner_routeoption


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerLeg:
    arrival_point: Optional[tfl_api_presentation_entities_point.TflAPIPresentationEntitiesPoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrivalPoint' }})
    arrival_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrivalTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    departure_point: Optional[tfl_api_presentation_entities_point.TflAPIPresentationEntitiesPoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departurePoint' }})
    departure_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departureTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disruptions: Optional[List[tfl_api_presentation_entities_disruption.TflAPIPresentationEntitiesDisruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruptions' }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    has_fixed_locations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasFixedLocations' }})
    instruction: Optional[tfl_api_presentation_entities_instruction.TflAPIPresentationEntitiesInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instruction' }})
    is_disrupted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDisrupted' }})
    mode: Optional[tfl_api_presentation_entities_identifier.TflAPIPresentationEntitiesIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    obstacles: Optional[List[tfl_api_presentation_entities_journeyplanner_obstacle.TflAPIPresentationEntitiesJourneyPlannerObstacle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obstacles' }})
    path: Optional[tfl_api_presentation_entities_journeyplanner_path.TflAPIPresentationEntitiesJourneyPlannerPath] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    planned_works: Optional[List[tfl_api_presentation_entities_journeyplanner_plannedwork.TflAPIPresentationEntitiesJourneyPlannerPlannedWork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plannedWorks' }})
    route_options: Optional[List[tfl_api_presentation_entities_journeyplanner_routeoption.TflAPIPresentationEntitiesJourneyPlannerRouteOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeOptions' }})
    speed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speed' }})
    
