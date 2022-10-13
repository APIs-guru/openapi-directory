from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Crop:
    bottom: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottom' }})
    left: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'left' }})
    right: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'right' }})
    top: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'top' }})
    
