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
class TflAPIPresentationEntitiesLine:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    crowding: Optional[TflAPIPresentationEntitiesCrowding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crowding') }})
    disruptions: Optional[List[TflAPIPresentationEntitiesDisruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptions') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    line_statuses: Optional[List[TflAPIPresentationEntitiesLineStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineStatuses') }})
    mode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modeName') }})
    modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    route_sections: Optional[List[TflAPIPresentationEntitiesMatchedRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeSections') }})
    service_types: Optional[List[TflAPIPresentationEntitiesLineServiceTypeInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceTypes') }})
    
