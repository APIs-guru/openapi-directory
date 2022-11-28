from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlayProgressiveTypeEnum(str, Enum):
    SOURCE = "source"
    VIDEO_MP4 = "video/mp4"
    VIDEO_WEBM = "video/webm"
    VP6_X_VIDEO = "vp6/x-video"


@dataclass_json
@dataclass
class PlayProgressive:
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    fps: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fps') }})
    height: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_expiration_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_expiration_time') }})
    md5: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5') }})
    size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: PlayProgressiveTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    width: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    log: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log') }})
    
class PlayStatusEnum(str, Enum):
    PLAYABLE = "playable"
    PURCHASE_REQUIRED = "purchase_required"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class Play:
    status: PlayStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    progressive: Optional[List[PlayProgressive]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressive') }})
    
