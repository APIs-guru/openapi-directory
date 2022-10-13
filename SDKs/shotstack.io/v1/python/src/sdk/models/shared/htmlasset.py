from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HTMLAssetPositionEnum(str, Enum):
    TOP = "top"
    TOP_RIGHT = "topRight"
    RIGHT = "right"
    BOTTOM_RIGHT = "bottomRight"
    BOTTOM = "bottom"
    BOTTOM_LEFT = "bottomLeft"
    LEFT = "left"
    TOP_LEFT = "topLeft"
    CENTER = "center"


@dataclass_json
@dataclass
class HTMLAsset:
    background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'background' }})
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'css' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    html: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    position: Optional[HTMLAssetPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
