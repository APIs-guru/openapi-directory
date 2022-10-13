from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V3RouteType:
    route_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_type' }})
    route_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_type_name' }})
    
