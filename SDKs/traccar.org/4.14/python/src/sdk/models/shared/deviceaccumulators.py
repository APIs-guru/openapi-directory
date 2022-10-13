from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceAccumulators:
    device_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hours' }})
    total_distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalDistance' }})
    
