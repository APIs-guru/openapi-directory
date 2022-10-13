from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v3_stopgps


@dataclass_json
@dataclass
class V3StopLocation:
    gps: Optional[v3_stopgps.V3StopGps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gps' }})
    
