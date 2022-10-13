from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import videoasset
from . import imageasset
from . import titleasset
from . import htmlasset
from . import audioasset
from . import lumaasset
from . import offset
from . import transition

class ClipEffectEnum(str, Enum):
    ZOOM_IN = "zoomIn"
    ZOOM_OUT = "zoomOut"
    SLIDE_LEFT = "slideLeft"
    SLIDE_RIGHT = "slideRight"
    SLIDE_UP = "slideUp"
    SLIDE_DOWN = "slideDown"

class ClipFilterEnum(str, Enum):
    BOOST = "boost"
    CONTRAST = "contrast"
    DARKEN = "darken"
    GREYSCALE = "greyscale"
    LIGHTEN = "lighten"
    MUTED = "muted"
    NEGATIVE = "negative"

class ClipFitEnum(str, Enum):
    COVER = "cover"
    CONTAIN = "contain"
    CROP = "crop"
    NONE = "none"

class ClipPositionEnum(str, Enum):
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
class Clip:
    asset: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    effect: Optional[ClipEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effect' }})
    filter: Optional[ClipFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    fit: Optional[ClipFitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fit' }})
    length: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    offset: Optional[offset.Offset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    opacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opacity' }})
    position: Optional[ClipPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    start: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    transition: Optional[transition.Transition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transition' }})
    
