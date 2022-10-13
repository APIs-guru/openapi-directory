from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v3_disruptions
from . import v3_status


@dataclass_json
@dataclass
class V3DisruptionsResponse:
    disruptions: Optional[v3_disruptions.V3Disruptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruptions' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
