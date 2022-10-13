from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import v3_disruption
from . import v3_status
from . import v3_stoponroute


@dataclass_json
@dataclass
class V3StopsOnRouteResponse:
    disruptions: Optional[dict[str, v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruptions' }})
    geopath: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geopath' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stops: Optional[List[v3_stoponroute.V3StopOnRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stops' }})
    
