from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GroupMetadataConnectionsUsers:
    r"""GroupMetadataConnectionsUsers
    Information about the members or moderators of this group.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupMetadataConnectionsVideos:
    r"""GroupMetadataConnectionsVideos
    Information about the videos contained within this group.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupMetadataConnections:
    r"""GroupMetadataConnections
    A collection of information that is connected to this resource.
    """
    
    users: GroupMetadataConnectionsUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    videos: GroupMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    
class GroupMetadataInteractionsJoinTypeEnum(str, Enum):
    MEMBER = "member"
    MODERATOR = "moderator"


@dataclass_json
@dataclass
class GroupMetadataInteractionsJoin:
    r"""GroupMetadataInteractionsJoin
    An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: GroupMetadataInteractionsJoinTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupMetadataInteractions:
    r"""GroupMetadataInteractions
    User actions that have involved the group. This data requires a bearer token with the `private` scope.
    """
    
    join: GroupMetadataInteractionsJoin = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('join') }})
    

@dataclass_json
@dataclass
class GroupMetadata:
    r"""GroupMetadata
    Metadata about the group.
    """
    
    connections: GroupMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: GroupMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class GroupPrivacyCommentEnum(str, Enum):
    ALL = "all"
    MEMBERS = "members"

class GroupPrivacyInviteEnum(str, Enum):
    ALL = "all"
    MEMBERS = "members"

class GroupPrivacyJoinEnum(str, Enum):
    ANYBODY = "anybody"
    MEMBERS = "members"

class GroupPrivacyVideosEnum(str, Enum):
    ALL = "all"
    MEMBERS = "members"

class GroupPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    MEMBERS = "members"


@dataclass_json
@dataclass
class GroupPrivacy:
    r"""GroupPrivacy
    The group's privacy settings.
    """
    
    comment: GroupPrivacyCommentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    invite: GroupPrivacyInviteEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invite') }})
    join: GroupPrivacyJoinEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('join') }})
    videos: GroupPrivacyVideosEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    view: GroupPrivacyViewEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
class GroupUserAccountEnum(str, Enum):
    BASIC = "basic"
    BUSINESS = "business"
    LIVE_BUSINESS = "live_business"
    LIVE_PREMIUM = "live_premium"
    LIVE_PRO = "live_pro"
    PLUS = "plus"
    PRO = "pro"
    PRO_UNLIMITED = "pro_unlimited"
    PRODUCER = "producer"


@dataclass_json
@dataclass
class GroupUserMetadataConnectionsAlbums:
    r"""GroupUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsAppearances:
    r"""GroupUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsBlock:
    r"""GroupUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsCategories:
    r"""GroupUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsChannels:
    r"""GroupUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsFeed:
    r"""GroupUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsFolders:
    r"""GroupUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsFollowers:
    r"""GroupUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsFollowing:
    r"""GroupUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsGroups:
    r"""GroupUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsLikes:
    r"""GroupUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsModeratedChannels:
    r"""GroupUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsPictures:
    r"""GroupUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsPortfolios:
    r"""GroupUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsRecommendedChannels:
    r"""GroupUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsRecommendedUsers:
    r"""GroupUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsShared:
    r"""GroupUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsVideos:
    r"""GroupUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsWatchedVideos:
    r"""GroupUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnectionsWatchlater:
    r"""GroupUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataConnections:
    r"""GroupUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: GroupUserMetadataConnectionsAlbums = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: GroupUserMetadataConnectionsAppearances = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: GroupUserMetadataConnectionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: GroupUserMetadataConnectionsCategories = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: GroupUserMetadataConnectionsChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: GroupUserMetadataConnectionsFeed = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: GroupUserMetadataConnectionsFolders = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: GroupUserMetadataConnectionsFollowers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: GroupUserMetadataConnectionsFollowing = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: GroupUserMetadataConnectionsGroups = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: GroupUserMetadataConnectionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: GroupUserMetadataConnectionsModeratedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: GroupUserMetadataConnectionsPictures = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: GroupUserMetadataConnectionsPortfolios = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: GroupUserMetadataConnectionsRecommendedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: GroupUserMetadataConnectionsRecommendedUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: GroupUserMetadataConnectionsShared = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: GroupUserMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: GroupUserMetadataConnectionsWatchedVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: GroupUserMetadataConnectionsWatchlater = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataInteractionsBlock:
    r"""GroupUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataInteractionsFollow:
    r"""GroupUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataInteractionsReport:
    r"""GroupUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GroupUserMetadataInteractions:
    block: GroupUserMetadataInteractionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: GroupUserMetadataInteractionsFollow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: GroupUserMetadataInteractionsReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[GroupUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclass
class GroupUserMetadata:
    r"""GroupUserMetadata
    The user's metadata.
    """
    
    connections: GroupUserMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: GroupUserMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class GroupUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class GroupUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class GroupUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class GroupUserPreferencesVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[GroupUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[GroupUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[GroupUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class GroupUserPreferencesVideos:
    privacy: Optional[GroupUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclass
class GroupUserPreferences:
    videos: Optional[GroupUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class GroupUserUploadQuotaLifetime:
    r"""GroupUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class GroupUserUploadQuotaPeriodic:
    r"""GroupUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class GroupUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class GroupUserUploadQuotaSpace:
    r"""GroupUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: GroupUserUploadQuotaSpaceShowingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class GroupUserUploadQuota:
    r"""GroupUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: GroupUserUploadQuotaLifetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: GroupUserUploadQuotaPeriodic = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: GroupUserUploadQuotaSpace = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclass
class GroupUserWebsites:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GroupUser:
    r"""GroupUser
    The owner of the group.
    """
    
    account: GroupUserAccountEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: GroupUserMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: GroupUserUploadQuota = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: List[GroupUserWebsites] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[GroupUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclass
class Group:
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: GroupMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    privacy: GroupPrivacy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: Optional[GroupUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
