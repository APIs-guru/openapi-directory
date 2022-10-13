from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import boundingbox


@dataclass_json
@dataclass
class DetectionResult:
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probability' }})
    
