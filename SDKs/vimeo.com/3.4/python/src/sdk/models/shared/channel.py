from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelMetadataConnectionsPrivacyUsers:
    r"""ChannelMetadataConnectionsPrivacyUsers
    Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class ChannelMetadataConnectionsUsers:
    r"""ChannelMetadataConnectionsUsers
    Information about the users following or moderating this channel.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class ChannelMetadataConnectionsVideos:
    r"""ChannelMetadataConnectionsVideos
    Information about the videos that belong to this channel.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class ChannelMetadataConnections:
    r"""ChannelMetadataConnections
    A collection of information that is connected to this resource.
    """
    
    privacy_users: ChannelMetadataConnectionsPrivacyUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy_users') }})
    users: ChannelMetadataConnectionsUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    videos: ChannelMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class ChannelMetadataInteractionsAddModerators:
    r"""ChannelMetadataInteractionsAddModerators
    An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class ChannelMetadataInteractionsAddTo:
    r"""ChannelMetadataInteractionsAddTo
    When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
class ChannelMetadataInteractionsFollowTypeEnum(str, Enum):
    MODERATOR = "moderator"
    SUBSCRIBER = "subscriber"


@dataclass_json
@dataclass
class ChannelMetadataInteractionsFollow:
    r"""ChannelMetadataInteractionsFollow
    An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    type: ChannelMetadataInteractionsFollowTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class ChannelMetadataInteractionsModerateVideos:
    r"""ChannelMetadataInteractionsModerateVideos
    An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class ChannelMetadataInteractions:
    r"""ChannelMetadataInteractions
    A list of resource URIs related to the channel.
    """
    
    add_moderators: ChannelMetadataInteractionsAddModerators = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_moderators') }})
    add_to: ChannelMetadataInteractionsAddTo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_to') }})
    follow: ChannelMetadataInteractionsFollow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    moderate_videos: ChannelMetadataInteractionsModerateVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderate_videos') }})
    

@dataclass_json
@dataclass
class ChannelMetadata:
    r"""ChannelMetadata
    Metadata about the channel.
    """
    
    connections: ChannelMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: ChannelMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class ChannelPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    MODERATORS = "moderators"
    USERS = "users"


@dataclass_json
@dataclass
class ChannelPrivacy:
    r"""ChannelPrivacy
    The privacy settings of the channel.
    """
    
    view: ChannelPrivacyViewEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class Channel:
    categories: List[Category] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    header: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: ChannelMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    privacy: ChannelPrivacy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    tags: List[Tag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: User = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
