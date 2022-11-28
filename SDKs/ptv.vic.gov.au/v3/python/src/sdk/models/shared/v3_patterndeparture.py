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
class V3PatternDeparture:
    at_platform: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('at_platform') }})
    departure_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departure_sequence') }})
    direction_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction_id') }})
    disruption_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption_ids') }})
    estimated_departure_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_departure_utc'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flags') }})
    platform_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform_number') }})
    route_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_id') }})
    run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_id') }})
    run_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_ref') }})
    scheduled_departure_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_departure_utc'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    skipped_stops: Optional[List[V3StopModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipped_stops') }})
    stop_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_id') }})
    
