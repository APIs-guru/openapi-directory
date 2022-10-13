from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import boundingbox
from . import boundingbox


@dataclass_json
@dataclass
class GeolocateBounds:
    default: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    limit: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    
