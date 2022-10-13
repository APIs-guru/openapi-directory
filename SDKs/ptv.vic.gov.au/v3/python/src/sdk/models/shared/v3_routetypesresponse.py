from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_routetype
from . import v3_status


@dataclass_json
@dataclass
class V3RouteTypesResponse:
    route_types: Optional[List[v3_routetype.V3RouteType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_types' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
