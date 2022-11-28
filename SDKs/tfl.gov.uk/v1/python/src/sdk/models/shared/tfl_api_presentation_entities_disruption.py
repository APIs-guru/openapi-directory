from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""TflAPIPresentationEntitiesDisruption
    Represents a disruption to a route within the transport network.
    """
    
    additional_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInfo') }})
    affected_routes: Optional[List[TflAPIPresentationEntitiesRouteSection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedRoutes') }})
    affected_stops: Optional[List[TflAPIPresentationEntitiesStopPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedStops') }})
    category: Optional[TflAPIPresentationEntitiesDisruptionCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    category_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryDescription') }})
    closure_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closureText') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
