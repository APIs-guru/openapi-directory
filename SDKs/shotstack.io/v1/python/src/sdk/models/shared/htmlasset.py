from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""HTMLAsset
    The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box.
    """
    
    html: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('css') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    position: Optional[HTMLAssetPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
