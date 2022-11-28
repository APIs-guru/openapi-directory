from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerLeg:
    arrival_point: Optional[TflAPIPresentationEntitiesPoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrivalPoint') }})
    arrival_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrivalTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    departure_point: Optional[TflAPIPresentationEntitiesPoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departurePoint') }})
    departure_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departureTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disruptions: Optional[List[TflAPIPresentationEntitiesDisruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptions') }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    has_fixed_locations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasFixedLocations') }})
    instruction: Optional[TflAPIPresentationEntitiesInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instruction') }})
    is_disrupted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDisrupted') }})
    mode: Optional[TflAPIPresentationEntitiesIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    obstacles: Optional[List[TflAPIPresentationEntitiesJourneyPlannerObstacle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obstacles') }})
    path: Optional[TflAPIPresentationEntitiesJourneyPlannerPath] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    planned_works: Optional[List[TflAPIPresentationEntitiesJourneyPlannerPlannedWork]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plannedWorks') }})
    route_options: Optional[List[TflAPIPresentationEntitiesJourneyPlannerRouteOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeOptions') }})
    speed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    
