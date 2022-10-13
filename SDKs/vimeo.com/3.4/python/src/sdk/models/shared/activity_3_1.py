from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import category
from . import channel
from . import video
from . import group
from . import tag
from . import user


@dataclass_json
@dataclass
class Activity31MetadataConnectionsRelated:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class Activity31MetadataConnections:
    related: Activity31MetadataConnectionsRelated = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class Activity31Metadata:
    connections: Activity31MetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    
class Activity31TypeEnum(str, Enum):
    APPEARANCE = "appearance"
    CATEGORY = "category"
    CHANNEL = "channel"
    FACEBOOK_FEED = "facebook_feed"
    GROUP = "group"
    LIKE = "like"
    ONDEMAND = "ondemand"
    SHARE = "share"
    TAG = "tag"
    TWITTER_TIMELINE = "twitter_timeline"
    UPLOAD = "upload"


@dataclass_json
@dataclass
class Activity31:
    category: Optional[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    channel: Optional[channel.Channel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    clip: video.Video = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clip' }})
    group: Optional[group.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    metadata: Activity31Metadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    tag: Optional[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    type: Activity31TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
