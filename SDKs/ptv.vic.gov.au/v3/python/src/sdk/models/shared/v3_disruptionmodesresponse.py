from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_disruptionmode
from . import v3_status


@dataclass_json
@dataclass
class V3DisruptionModesResponse:
    disruption_modes: Optional[List[v3_disruptionmode.V3DisruptionMode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruption_modes' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
