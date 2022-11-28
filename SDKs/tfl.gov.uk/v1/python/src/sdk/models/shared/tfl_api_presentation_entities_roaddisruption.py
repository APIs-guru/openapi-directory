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
class TflAPIPresentationEntitiesRoadDisruption:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    corridor_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corridorIds') }})
    current_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentUpdate') }})
    current_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentUpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    geography: Optional[SystemDataSpatialDbGeography] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geography') }})
    geometry: Optional[SystemDataSpatialDbGeography] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometry') }})
    has_closures: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasClosures') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_provisional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProvisional') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    level_of_interest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('levelOfInterest') }})
    link_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkText') }})
    link_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkUrl') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    ordinal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ordinal') }})
    point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('point') }})
    publish_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishEndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    publish_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recurring_schedules: Optional[List[TflAPIPresentationEntitiesRoadDisruptionSchedule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringSchedules') }})
    road_disruption_impact_areas: Optional[List[TflAPIPresentationEntitiesRoadDisruptionImpactArea]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roadDisruptionImpactAreas') }})
    road_disruption_lines: Optional[List[TflAPIPresentationEntitiesRoadDisruptionLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roadDisruptionLines') }})
    road_project: Optional[TflAPIPresentationEntitiesRoadProject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roadProject') }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    streets: Optional[List[TflAPIPresentationEntitiesStreet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streets') }})
    sub_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subCategory') }})
    time_frame: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeFrame') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
