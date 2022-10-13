from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V3DisruptionMode:
    disruption_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruption_mode' }})
    disruption_mode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruption_mode_name' }})
    
