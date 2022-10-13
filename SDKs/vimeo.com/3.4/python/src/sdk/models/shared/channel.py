from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import category
from . import picture
from . import picture
from . import tag
from . import user


@dataclass_json
@dataclass
class ChannelMetadataConnectionsPrivacyUsers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class ChannelMetadataConnectionsUsers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class ChannelMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class ChannelMetadataConnections:
    privacy_users: ChannelMetadataConnectionsPrivacyUsers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy_users' }})
    users: ChannelMetadataConnectionsUsers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    videos: ChannelMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class ChannelMetadataInteractionsAddModerators:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class ChannelMetadataInteractionsAddTo:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
class ChannelMetadataInteractionsFollowTypeEnum(str, Enum):
    MODERATOR = "moderator"
    SUBSCRIBER = "subscriber"


@dataclass_json
@dataclass
class ChannelMetadataInteractionsFollow:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    type: ChannelMetadataInteractionsFollowTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class ChannelMetadataInteractionsModerateVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class ChannelMetadataInteractions:
    add_moderators: ChannelMetadataInteractionsAddModerators = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_moderators' }})
    add_to: ChannelMetadataInteractionsAddTo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_to' }})
    follow: ChannelMetadataInteractionsFollow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'follow' }})
    moderate_videos: ChannelMetadataInteractionsModerateVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderate_videos' }})
    

@dataclass_json
@dataclass
class ChannelMetadata:
    connections: ChannelMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: ChannelMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    
class ChannelPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    MODERATORS = "moderators"
    USERS = "users"


@dataclass_json
@dataclass
class ChannelPrivacy:
    view: ChannelPrivacyViewEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class Channel:
    categories: List[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    header: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    metadata: ChannelMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_time' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    privacy: ChannelPrivacy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    tags: List[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: user.User = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
