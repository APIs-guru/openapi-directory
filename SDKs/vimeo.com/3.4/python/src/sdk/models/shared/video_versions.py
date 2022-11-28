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
class VideoVersionsMetadataConnectionsVideo:
    r"""VideoVersionsMetadataConnectionsVideo
    Data from video associated with version
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsMetadataConnections:
    video: VideoVersionsMetadataConnectionsVideo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    

@dataclass_json
@dataclass
class VideoVersionsMetadata:
    r"""VideoVersionsMetadata
    The video version's metadata.
    """
    
    connections: VideoVersionsMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
class VideoVersionsUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"

class VideoVersionsUploadStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclass
class VideoVersionsUpload:
    r"""VideoVersionsUpload
    The upload information for this version.
    """
    
    status: VideoVersionsUploadStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    approach: Optional[VideoVersionsUploadApproachEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    complete_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complete_uri') }})
    form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    upload_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_link') }})
    
class VideoVersionsUserAccountEnum(str, Enum):
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
class VideoVersionsUserMetadataConnectionsAlbums:
    r"""VideoVersionsUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsAppearances:
    r"""VideoVersionsUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsBlock:
    r"""VideoVersionsUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsCategories:
    r"""VideoVersionsUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsChannels:
    r"""VideoVersionsUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsFeed:
    r"""VideoVersionsUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsFolders:
    r"""VideoVersionsUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsFollowers:
    r"""VideoVersionsUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsFollowing:
    r"""VideoVersionsUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsGroups:
    r"""VideoVersionsUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsLikes:
    r"""VideoVersionsUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsModeratedChannels:
    r"""VideoVersionsUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsPictures:
    r"""VideoVersionsUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsPortfolios:
    r"""VideoVersionsUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsRecommendedChannels:
    r"""VideoVersionsUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsRecommendedUsers:
    r"""VideoVersionsUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsShared:
    r"""VideoVersionsUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsVideos:
    r"""VideoVersionsUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsWatchedVideos:
    r"""VideoVersionsUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnectionsWatchlater:
    r"""VideoVersionsUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataConnections:
    r"""VideoVersionsUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: VideoVersionsUserMetadataConnectionsAlbums = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: VideoVersionsUserMetadataConnectionsAppearances = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: VideoVersionsUserMetadataConnectionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: VideoVersionsUserMetadataConnectionsCategories = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: VideoVersionsUserMetadataConnectionsChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: VideoVersionsUserMetadataConnectionsFeed = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: VideoVersionsUserMetadataConnectionsFolders = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: VideoVersionsUserMetadataConnectionsFollowers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: VideoVersionsUserMetadataConnectionsFollowing = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: VideoVersionsUserMetadataConnectionsGroups = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: VideoVersionsUserMetadataConnectionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: VideoVersionsUserMetadataConnectionsModeratedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: VideoVersionsUserMetadataConnectionsPictures = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: VideoVersionsUserMetadataConnectionsPortfolios = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: VideoVersionsUserMetadataConnectionsRecommendedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: VideoVersionsUserMetadataConnectionsRecommendedUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: VideoVersionsUserMetadataConnectionsShared = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: VideoVersionsUserMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: VideoVersionsUserMetadataConnectionsWatchedVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: VideoVersionsUserMetadataConnectionsWatchlater = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataInteractionsBlock:
    r"""VideoVersionsUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataInteractionsFollow:
    r"""VideoVersionsUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataInteractionsReport:
    r"""VideoVersionsUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadataInteractions:
    block: VideoVersionsUserMetadataInteractionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: VideoVersionsUserMetadataInteractionsFollow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: VideoVersionsUserMetadataInteractionsReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[VideoVersionsUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserMetadata:
    r"""VideoVersionsUserMetadata
    The user's metadata.
    """
    
    connections: VideoVersionsUserMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: VideoVersionsUserMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class VideoVersionsUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class VideoVersionsUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class VideoVersionsUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class VideoVersionsUserPreferencesVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[VideoVersionsUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[VideoVersionsUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[VideoVersionsUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserPreferencesVideos:
    privacy: Optional[VideoVersionsUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserPreferences:
    videos: Optional[VideoVersionsUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserUploadQuotaLifetime:
    r"""VideoVersionsUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserUploadQuotaPeriodic:
    r"""VideoVersionsUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class VideoVersionsUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class VideoVersionsUserUploadQuotaSpace:
    r"""VideoVersionsUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: VideoVersionsUserUploadQuotaSpaceShowingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserUploadQuota:
    r"""VideoVersionsUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: VideoVersionsUserUploadQuotaLifetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: VideoVersionsUserUploadQuotaPeriodic = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: VideoVersionsUserUploadQuotaSpace = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclass
class VideoVersionsUserWebsites:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class VideoVersionsUser:
    r"""VideoVersionsUser
    The owner of the video version.
    """
    
    account: VideoVersionsUserAccountEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: VideoVersionsUserMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: VideoVersionsUserUploadQuota = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: List[VideoVersionsUserWebsites] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[VideoVersionsUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclass
class VideoVersions:
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    app: APIApp = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    duration: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    filename: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    filesize: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesize') }})
    metadata: VideoVersionsMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    play: Play = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('play') }})
    upload: VideoVersionsUpload = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    upload_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_date') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: VideoVersionsUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
