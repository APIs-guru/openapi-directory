from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceobject


@dataclass_json
@dataclass
class DevicesObject:
    devices: Optional[List[deviceobject.DeviceObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    
