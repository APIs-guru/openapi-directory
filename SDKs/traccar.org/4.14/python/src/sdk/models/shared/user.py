from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class User:
    administrator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administrator' }})
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    coordinate_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinateFormat' }})
    device_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceLimit' }})
    device_readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceReadonly' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    expiration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    limit_commands: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitCommands' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    map: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'map' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    poi_layer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poiLayer' }})
    readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readonly' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    twelve_hour_format: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twelveHourFormat' }})
    user_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLimit' }})
    zoom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zoom' }})
    
