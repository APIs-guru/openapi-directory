from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class MediaTypeEnum(str, Enum):
    YOUTUBE = "youtube"
    CDPHOTOTHREAD = "cdphotothread"
    IMGUR = "imgur"
    FACEBOOK_PROFILE = "facebook-profile"
    YOUTUBE_CHANNEL = "youtube-channel"
    TWITTER_PROFILE = "twitter-profile"
    GITHUB_PROFILE = "github-profile"
    INSTAGRAM_PROFILE = "instagram-profile"
    PERISCOPE_PROFILE = "periscope-profile"
    GRABCAD = "grabcad"
    INSTAGRAM_IMAGE = "instagram-image"
    EXTERNAL_LINK = "external-link"
    AVATAR = "avatar"


@dataclass_json
@dataclass
class Media:
    details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    direct_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct_url' }})
    foreign_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foreign_key' }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred' }})
    type: MediaTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    view_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view_url' }})
    
