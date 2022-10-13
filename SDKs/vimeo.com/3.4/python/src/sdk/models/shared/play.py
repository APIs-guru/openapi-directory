from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class PlayProgressiveTypeEnum(str, Enum):
    SOURCE = "source"
    VIDEO_MP4 = "video/mp4"
    VIDEO_WEBM = "video/webm"
    VP6_X_VIDEO = "vp6/x-video"


@dataclass_json
@dataclass
class PlayProgressive:
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    fps: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fps' }})
    height: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_expiration_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_expiration_time' }})
    log: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'log' }})
    md5: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5' }})
    size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: PlayProgressiveTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    width: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
class PlayStatusEnum(str, Enum):
    PLAYABLE = "playable"
    PURCHASE_REQUIRED = "purchase_required"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class Play:
    progressive: Optional[List[PlayProgressive]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progressive' }})
    status: PlayStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
