from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import boundingbox


@dataclass_json
@dataclass
class EntityObject:
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
