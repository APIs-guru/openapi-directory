from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Device:
    app_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appVersion' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    ringtone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ringtone' }})
    ringtone_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ringtoneDisabled' }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
