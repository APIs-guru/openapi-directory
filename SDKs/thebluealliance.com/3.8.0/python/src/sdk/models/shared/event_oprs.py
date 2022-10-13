from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventOpRs:
    ccwms: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ccwms' }})
    dprs: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dprs' }})
    oprs: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oprs' }})
    
