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
class OnDemandSeasonMetadataConnectionsVideos:
    r"""OnDemandSeasonMetadataConnectionsVideos
    The Videos connection.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonMetadataConnections:
    videos: OnDemandSeasonMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonMetadata:
    connections: OnDemandSeasonMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
class OnDemandSeasonUserAccountEnum(str, Enum):
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
class OnDemandSeasonUserMetadataConnectionsAlbums:
    r"""OnDemandSeasonUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsAppearances:
    r"""OnDemandSeasonUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsBlock:
    r"""OnDemandSeasonUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsCategories:
    r"""OnDemandSeasonUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsChannels:
    r"""OnDemandSeasonUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsFeed:
    r"""OnDemandSeasonUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsFolders:
    r"""OnDemandSeasonUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsFollowers:
    r"""OnDemandSeasonUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsFollowing:
    r"""OnDemandSeasonUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsGroups:
    r"""OnDemandSeasonUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsLikes:
    r"""OnDemandSeasonUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsModeratedChannels:
    r"""OnDemandSeasonUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsPictures:
    r"""OnDemandSeasonUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsPortfolios:
    r"""OnDemandSeasonUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsRecommendedChannels:
    r"""OnDemandSeasonUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsRecommendedUsers:
    r"""OnDemandSeasonUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsShared:
    r"""OnDemandSeasonUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsVideos:
    r"""OnDemandSeasonUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsWatchedVideos:
    r"""OnDemandSeasonUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnectionsWatchlater:
    r"""OnDemandSeasonUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataConnections:
    r"""OnDemandSeasonUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: OnDemandSeasonUserMetadataConnectionsAlbums = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: OnDemandSeasonUserMetadataConnectionsAppearances = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: OnDemandSeasonUserMetadataConnectionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: OnDemandSeasonUserMetadataConnectionsCategories = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: OnDemandSeasonUserMetadataConnectionsChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: OnDemandSeasonUserMetadataConnectionsFeed = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: OnDemandSeasonUserMetadataConnectionsFolders = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: OnDemandSeasonUserMetadataConnectionsFollowers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: OnDemandSeasonUserMetadataConnectionsFollowing = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: OnDemandSeasonUserMetadataConnectionsGroups = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: OnDemandSeasonUserMetadataConnectionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: OnDemandSeasonUserMetadataConnectionsModeratedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: OnDemandSeasonUserMetadataConnectionsPictures = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: OnDemandSeasonUserMetadataConnectionsPortfolios = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: OnDemandSeasonUserMetadataConnectionsRecommendedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: OnDemandSeasonUserMetadataConnectionsRecommendedUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: OnDemandSeasonUserMetadataConnectionsShared = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: OnDemandSeasonUserMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: OnDemandSeasonUserMetadataConnectionsWatchedVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: OnDemandSeasonUserMetadataConnectionsWatchlater = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataInteractionsBlock:
    r"""OnDemandSeasonUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataInteractionsFollow:
    r"""OnDemandSeasonUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataInteractionsReport:
    r"""OnDemandSeasonUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadataInteractions:
    block: OnDemandSeasonUserMetadataInteractionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: OnDemandSeasonUserMetadataInteractionsFollow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: OnDemandSeasonUserMetadataInteractionsReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[OnDemandSeasonUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserMetadata:
    r"""OnDemandSeasonUserMetadata
    The user's metadata.
    """
    
    connections: OnDemandSeasonUserMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: OnDemandSeasonUserMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class OnDemandSeasonUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class OnDemandSeasonUserPreferencesVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[OnDemandSeasonUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserPreferencesVideos:
    privacy: Optional[OnDemandSeasonUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserPreferences:
    videos: Optional[OnDemandSeasonUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserUploadQuotaLifetime:
    r"""OnDemandSeasonUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserUploadQuotaPeriodic:
    r"""OnDemandSeasonUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class OnDemandSeasonUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class OnDemandSeasonUserUploadQuotaSpace:
    r"""OnDemandSeasonUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: OnDemandSeasonUserUploadQuotaSpaceShowingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserUploadQuota:
    r"""OnDemandSeasonUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: OnDemandSeasonUserUploadQuotaLifetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: OnDemandSeasonUserUploadQuotaPeriodic = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: OnDemandSeasonUserUploadQuotaSpace = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUserWebsites:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class OnDemandSeasonUser:
    r"""OnDemandSeasonUser
    The creator of this On Demand page.
    """
    
    account: OnDemandSeasonUserAccountEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: OnDemandSeasonUserMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: OnDemandSeasonUserUploadQuota = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: List[OnDemandSeasonUserWebsites] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[OnDemandSeasonUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclass
class OnDemandSeason:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    metadata: OnDemandSeasonMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    position: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: OnDemandSeasonUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
