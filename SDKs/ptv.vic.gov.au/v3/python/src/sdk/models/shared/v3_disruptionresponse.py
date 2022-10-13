from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v3_disruption
from . import v3_status


@dataclass_json
@dataclass
class V3DisruptionResponse:
    disruption: Optional[v3_disruption.V3Disruption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruption' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
