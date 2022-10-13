from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import picture

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
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsAppearances:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsBlock:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsCategories:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsFeed:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsFolders:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsFollowers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsFollowing:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsGroups:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsLikes:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsModeratedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsPictures:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsPortfolios:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsRecommendedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsRecommendedUsers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsShared:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsWatchedVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnectionsWatchlater:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataConnections:
    albums: UserMetadataConnectionsAlbums = field(default=None, metadata={'dataclasses_json': { 'field_name': 'albums' }})
    appearances: UserMetadataConnectionsAppearances = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appearances' }})
    block: UserMetadataConnectionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    categories: UserMetadataConnectionsCategories = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    channels: UserMetadataConnectionsChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    feed: UserMetadataConnectionsFeed = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feed' }})
    folders: UserMetadataConnectionsFolders = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    followers: UserMetadataConnectionsFollowers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    following: UserMetadataConnectionsFollowing = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following' }})
    groups: UserMetadataConnectionsGroups = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    likes: UserMetadataConnectionsLikes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    moderated_channels: UserMetadataConnectionsModeratedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderated_channels' }})
    pictures: UserMetadataConnectionsPictures = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    portfolios: UserMetadataConnectionsPortfolios = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    recommended_channels: UserMetadataConnectionsRecommendedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_channels' }})
    recommended_users: UserMetadataConnectionsRecommendedUsers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_users' }})
    shared: UserMetadataConnectionsShared = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shared' }})
    videos: UserMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    watched_videos: UserMetadataConnectionsWatchedVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched_videos' }})
    watchlater: UserMetadataConnectionsWatchlater = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class UserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataInteractionsBlock:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataInteractionsFollow:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataInteractionsReport:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    reason: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UserMetadataInteractions:
    add_privacy_user: Optional[UserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_privacy_user' }})
    block: UserMetadataInteractionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    follow: UserMetadataInteractionsFollow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'follow' }})
    report: UserMetadataInteractionsReport = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    

@dataclass_json
@dataclass
class UserMetadata:
    connections: UserMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: UserMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    
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
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: Optional[UserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: Optional[UserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: Optional[UserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class UserPreferencesVideos:
    privacy: Optional[UserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass_json
@dataclass
class UserPreferences:
    videos: Optional[UserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class UserUploadQuotaLifetime:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class UserUploadQuotaPeriodic:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    reset_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset_date' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    
class UserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class UserUploadQuotaSpace:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    showing: UserUploadQuotaSpaceShowingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showing' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class UserUploadQuota:
    lifetime: UserUploadQuotaLifetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    periodic: UserUploadQuotaPeriodic = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodic' }})
    space: UserUploadQuotaSpace = field(default=None, metadata={'dataclasses_json': { 'field_name': 'space' }})
    

@dataclass_json
@dataclass
class UserWebsites:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class User:
    account: UserAccountEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    bio: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio' }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_filter' }})
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    metadata: UserMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    preferences: Optional[UserPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferences' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    upload_quota: UserUploadQuota = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_quota' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    websites: List[UserWebsites] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    
