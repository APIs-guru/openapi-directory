from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceDetails:
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_id' }})
    device_installation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_installation_id' }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_name' }})
    
