from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OutputAspectRatioEnum(str, Enum):
    SIXTEEN_9 = "16:9"
    NINE_16 = "9:16"
    ONE_1 = "1:1"
    FOUR_5 = "4:5"
    FOUR_3 = "4:3"

class OutputFormatEnum(str, Enum):
    MP4 = "mp4"
    GIF = "gif"
    MP3 = "mp3"
    JPG = "jpg"
    PNG = "png"
    BMP = "bmp"

class OutputQualityEnum(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"

class OutputResolutionEnum(str, Enum):
    PREVIEW = "preview"
    MOBILE = "mobile"
    SD = "sd"
    HD = "hd"
    ONE_THOUSAND_AND_EIGHTY = "1080"

class OutputScaleToEnum(str, Enum):
    PREVIEW = "preview"
    MOBILE = "mobile"
    SD = "sd"
    HD = "hd"
    ONE_THOUSAND_AND_EIGHTY = "1080"


@dataclass_json
@dataclass
class Output:
    r"""Output
    The output format, render range and type of media to generate.
    """
    
    format: OutputFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    aspect_ratio: Optional[OutputAspectRatioEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectRatio') }})
    destinations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    fps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fps') }})
    poster: Optional[Poster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poster') }})
    quality: Optional[OutputQualityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    resolution: Optional[OutputResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    scale_to: Optional[OutputScaleToEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleTo') }})
    size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    thumbnail: Optional[Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    
