from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import crop


@dataclass_json
@dataclass
class ImageAsset:
    crop: Optional[crop.Crop] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crop' }})
    src: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
