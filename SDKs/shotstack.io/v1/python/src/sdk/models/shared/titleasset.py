from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""TitleAsset
    The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning.
    """
    
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    offset: Optional[Offset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    position: Optional[TitleAssetPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    size: Optional[TitleAssetSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    style: Optional[TitleAssetStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    
