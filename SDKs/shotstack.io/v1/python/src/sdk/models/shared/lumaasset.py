from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LumaAsset:
    src: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    trim: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trim' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
