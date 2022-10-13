from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import v3_status


@dataclass_json
@dataclass
class V3RouteResponse:
    route: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
