from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceObject:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_active' }})
    is_private_session: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_private_session' }})
    is_restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_restricted' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    volume_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume_percent' }})
    
