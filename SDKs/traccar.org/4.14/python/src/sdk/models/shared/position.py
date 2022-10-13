from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Position:
    accuracy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accuracy' }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    altitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altitude' }})
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    course: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'course' }})
    device_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    device_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fix_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    network: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    outdated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outdated' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    server_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speed' }})
    valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    
