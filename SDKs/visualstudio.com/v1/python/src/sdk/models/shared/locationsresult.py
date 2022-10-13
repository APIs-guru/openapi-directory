from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LocationsResult:
    available: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    current: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current' }})
    hostnames: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostnames' }})
    
