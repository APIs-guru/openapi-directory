from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_disruption
from . import v3_status
from . import v3_stopgeosearch


@dataclass_json
@dataclass
class V3StopsByDistanceResponse:
    disruptions: Optional[dict[str, v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruptions' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stops: Optional[List[v3_stopgeosearch.V3StopGeosearch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stops' }})
    
