from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v3_disruption
from . import v3_status
from . import v3_stopdetails


@dataclass_json
@dataclass
class V3StopResponse:
    disruptions: Optional[dict[str, v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruptions' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stop: Optional[v3_stopdetails.V3StopDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop' }})
    
