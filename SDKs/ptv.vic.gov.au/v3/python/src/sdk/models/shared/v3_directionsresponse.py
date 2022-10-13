from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_directionwithdescription
from . import v3_status


@dataclass_json
@dataclass
class V3DirectionsResponse:
    directions: Optional[List[v3_directionwithdescription.V3DirectionWithDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directions' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
