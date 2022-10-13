from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BoundingBox:
    max_x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxX' }})
    max_y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxY' }})
    min_x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minX' }})
    min_y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minY' }})
    
