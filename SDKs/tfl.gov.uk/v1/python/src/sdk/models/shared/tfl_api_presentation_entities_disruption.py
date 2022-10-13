from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_routesection
from . import tfl_api_presentation_entities_stoppoint

class TflAPIPresentationEntitiesDisruptionCategoryEnum(str, Enum):
    UNDEFINED = "Undefined"
    REAL_TIME = "RealTime"
    PLANNED_WORK = "PlannedWork"
    INFORMATION = "Information"
    EVENT = "Event"
    CROWDING = "Crowding"
    STATUS_ALERT = "StatusAlert"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesDisruption:
    additional_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInfo' }})
    affected_routes: Optional[List[tfl_api_presentation_entities_routesection.TflAPIPresentationEntitiesRouteSection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedRoutes' }})
    affected_stops: Optional[List[tfl_api_presentation_entities_stoppoint.TflAPIPresentationEntitiesStopPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedStops' }})
    category: Optional[TflAPIPresentationEntitiesDisruptionCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    category_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryDescription' }})
    closure_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closureText' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
