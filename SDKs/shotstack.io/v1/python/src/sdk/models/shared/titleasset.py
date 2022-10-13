from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import offset

class TitleAssetPositionEnum(str, Enum):
    TOP = "top"
    TOP_RIGHT = "topRight"
    RIGHT = "right"
    BOTTOM_RIGHT = "bottomRight"
    BOTTOM = "bottom"
    BOTTOM_LEFT = "bottomLeft"
    LEFT = "left"
    TOP_LEFT = "topLeft"
    CENTER = "center"

class TitleAssetSizeEnum(str, Enum):
    XX_SMALL = "xx-small"
    X_SMALL = "x-small"
    SMALL = "small"
    MEDIUM = "medium"
    LARGE = "large"
    X_LARGE = "x-large"
    XX_LARGE = "xx-large"

class TitleAssetStyleEnum(str, Enum):
    MINIMAL = "minimal"
    BLOCKBUSTER = "blockbuster"
    VOGUE = "vogue"
    SKETCHY = "sketchy"
    SKINNY = "skinny"
    CHUNK = "chunk"
    CHUNK_LIGHT = "chunkLight"
    MARKER = "marker"
    FUTURE = "future"
    SUBTITLE = "subtitle"


@dataclass_json
@dataclass
class TitleAsset:
    background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'background' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    offset: Optional[offset.Offset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    position: Optional[TitleAssetPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    size: Optional[TitleAssetSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    style: Optional[TitleAssetStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'style' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
