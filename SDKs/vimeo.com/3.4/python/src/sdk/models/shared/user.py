from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UserAccountEnum(str, Enum):
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
class UserMetadataConnectionsAlbums:
    r"""UserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsAppearances:
    r"""UserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsBlock:
    r"""UserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsCategories:
    r"""UserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsChannels:
    r"""UserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsFeed:
    r"""UserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsFolders:
    r"""UserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsFollowers:
    r"""UserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsFollowing:
    r"""UserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsGroups:
    r"""UserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsLikes:
    r"""UserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsModeratedChannels:
    r"""UserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsPictures:
    r"""UserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsPortfolios:
    r"""UserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsRecommendedChannels:
    r"""UserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsRecommendedUsers:
    r"""UserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsShared:
    r"""UserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsVideos:
    r"""UserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsWatchedVideos:
    r"""UserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsWatchlater:
    r"""UserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataConnections:
    r"""UserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: UserMetadataConnectionsAlbums = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: UserMetadataConnectionsAppearances = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: UserMetadataConnectionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: UserMetadataConnectionsCategories = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: UserMetadataConnectionsChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: UserMetadataConnectionsFeed = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: UserMetadataConnectionsFolders = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: UserMetadataConnectionsFollowers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: UserMetadataConnectionsFollowing = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: UserMetadataConnectionsGroups = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: UserMetadataConnectionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: UserMetadataConnectionsModeratedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: UserMetadataConnectionsPictures = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: UserMetadataConnectionsPortfolios = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: UserMetadataConnectionsRecommendedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: UserMetadataConnectionsRecommendedUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: UserMetadataConnectionsShared = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: UserMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: UserMetadataConnectionsWatchedVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: UserMetadataConnectionsWatchlater = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclass
class UserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataInteractionsBlock:
    r"""UserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataInteractionsFollow:
    r"""UserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataInteractionsReport:
    r"""UserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class UserMetadataInteractions:
    block: UserMetadataInteractionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: UserMetadataInteractionsFollow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: UserMetadataInteractionsReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[UserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclass
class UserMetadata:
    r"""UserMetadata
    The user's metadata.
    """
    
    connections: UserMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: UserMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class UserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class UserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class UserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class UserPreferencesVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[UserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[UserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[UserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class UserPreferencesVideos:
    privacy: Optional[UserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclass
class UserPreferences:
    videos: Optional[UserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class UserUploadQuotaLifetime:
    r"""UserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class UserUploadQuotaPeriodic:
    r"""UserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class UserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class UserUploadQuotaSpace:
    r"""UserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: UserUploadQuotaSpaceShowingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class UserUploadQuota:
    r"""UserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: UserUploadQuotaLifetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: UserUploadQuotaPeriodic = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: UserUploadQuotaSpace = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclass
class UserWebsites:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class User:
    account: UserAccountEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: UserMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: UserUploadQuota = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: List[UserWebsites] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[UserPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    
