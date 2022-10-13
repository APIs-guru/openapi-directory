from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributes
from . import boundingbox


@dataclass_json
@dataclass
class OcrResult:
    attributes: Optional[attributes.Attributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probability' }})
    
