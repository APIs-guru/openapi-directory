from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_stopmodel


@dataclass_json
@dataclass
class V3PatternDeparture:
    at_platform: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'at_platform' }})
    departure_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departure_sequence' }})
    direction_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction_id' }})
    disruption_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruption_ids' }})
    estimated_departure_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_departure_utc', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    platform_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform_number' }})
    route_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_id' }})
    run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_id' }})
    run_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_ref' }})
    scheduled_departure_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduled_departure_utc', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    skipped_stops: Optional[List[v3_stopmodel.V3StopModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipped_stops' }})
    stop_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_id' }})
    
