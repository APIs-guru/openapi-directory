from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import shotstackdestination
from . import poster
from . import range
from . import size
from . import thumbnail

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
    aspect_ratio: Optional[OutputAspectRatioEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspectRatio' }})
    destinations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    format: OutputFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    fps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fps' }})
    poster: Optional[poster.Poster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poster' }})
    quality: Optional[OutputQualityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    resolution: Optional[OutputResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    scale_to: Optional[OutputScaleToEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleTo' }})
    size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    thumbnail: Optional[thumbnail.Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    
