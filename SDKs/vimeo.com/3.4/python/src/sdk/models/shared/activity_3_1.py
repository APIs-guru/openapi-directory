from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Activity31MetadataConnectionsRelated:
    r"""Activity31MetadataConnectionsRelated
    Related content for this activity.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class Activity31MetadataConnections:
    r"""Activity31MetadataConnections
    A list of resource URIs related to the activity.
    """
    
    related: Activity31MetadataConnectionsRelated = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class Activity31Metadata:
    r"""Activity31Metadata
    The activity's metadata.
    """
    
    connections: Activity31MetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
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
    clip: Video = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clip') }})
    metadata: Activity31Metadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    type: Activity31TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    category: Optional[Category] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    channel: Optional[Channel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    group: Optional[Group] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    tag: Optional[Tag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
