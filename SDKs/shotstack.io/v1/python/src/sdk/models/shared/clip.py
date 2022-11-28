from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Clip
    A clip is a container for a specific type of asset, i.e. a title, image, video, audio or html. You use a Clip to define when an asset will display on the timeline, how long it will play for and transitions, filters and effects to apply to it.
    """
    
    asset: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    length: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    start: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    effect: Optional[ClipEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    filter: Optional[ClipFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    fit: Optional[ClipFitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fit') }})
    offset: Optional[Offset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    opacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opacity') }})
    position: Optional[ClipPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    transition: Optional[Transition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transition') }})
    
