from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Server:
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    bing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bingKey' }})
    coordinate_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinateFormat' }})
    device_readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceReadonly' }})
    force_settings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceSettings' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    limit_commands: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitCommands' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    map: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'map' }})
    map_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapUrl' }})
    poi_layer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poiLayer' }})
    readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readonly' }})
    registration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration' }})
    twelve_hour_format: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twelveHourFormat' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    zoom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zoom' }})
    
