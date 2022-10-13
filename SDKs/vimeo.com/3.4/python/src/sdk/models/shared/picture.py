from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PictureSizes:
    height: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_with_play_button: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_with_play_button' }})
    width: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
class PictureTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclass
class Picture:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    sizes: List[PictureSizes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    type: PictureTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
