from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import picture


@dataclass_json
@dataclass
class CommentMetadataConnectionsReplies:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentMetadataConnections:
    replies: CommentMetadataConnectionsReplies = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    

@dataclass_json
@dataclass
class CommentMetadata:
    connections: CommentMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    
class CommentTypeEnum(str, Enum):
    VIDEO = "video"

class CommentUserAccountEnum(str, Enum):
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
class CommentUserMetadataConnectionsAlbums:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsAppearances:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsBlock:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsCategories:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsFeed:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsFolders:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsFollowers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsFollowing:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsGroups:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsLikes:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsModeratedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsPictures:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsPortfolios:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsRecommendedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsRecommendedUsers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsShared:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsWatchedVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnectionsWatchlater:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataConnections:
    albums: CommentUserMetadataConnectionsAlbums = field(default=None, metadata={'dataclasses_json': { 'field_name': 'albums' }})
    appearances: CommentUserMetadataConnectionsAppearances = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appearances' }})
    block: CommentUserMetadataConnectionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    categories: CommentUserMetadataConnectionsCategories = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    channels: CommentUserMetadataConnectionsChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    feed: CommentUserMetadataConnectionsFeed = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feed' }})
    folders: CommentUserMetadataConnectionsFolders = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    followers: CommentUserMetadataConnectionsFollowers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    following: CommentUserMetadataConnectionsFollowing = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following' }})
    groups: CommentUserMetadataConnectionsGroups = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    likes: CommentUserMetadataConnectionsLikes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    moderated_channels: CommentUserMetadataConnectionsModeratedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderated_channels' }})
    pictures: CommentUserMetadataConnectionsPictures = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    portfolios: CommentUserMetadataConnectionsPortfolios = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    recommended_channels: CommentUserMetadataConnectionsRecommendedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_channels' }})
    recommended_users: CommentUserMetadataConnectionsRecommendedUsers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_users' }})
    shared: CommentUserMetadataConnectionsShared = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shared' }})
    videos: CommentUserMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    watched_videos: CommentUserMetadataConnectionsWatchedVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched_videos' }})
    watchlater: CommentUserMetadataConnectionsWatchlater = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataInteractionsBlock:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataInteractionsFollow:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataInteractionsReport:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    reason: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CommentUserMetadataInteractions:
    add_privacy_user: Optional[CommentUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_privacy_user' }})
    block: CommentUserMetadataInteractionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    follow: CommentUserMetadataInteractionsFollow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'follow' }})
    report: CommentUserMetadataInteractionsReport = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    

@dataclass_json
@dataclass
class CommentUserMetadata:
    connections: CommentUserMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: CommentUserMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    
class CommentUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class CommentUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class CommentUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class CommentUserPreferencesVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: Optional[CommentUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: Optional[CommentUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: Optional[CommentUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class CommentUserPreferencesVideos:
    privacy: Optional[CommentUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass_json
@dataclass
class CommentUserPreferences:
    videos: Optional[CommentUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class CommentUserUploadQuotaLifetime:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class CommentUserUploadQuotaPeriodic:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    reset_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset_date' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    
class CommentUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class CommentUserUploadQuotaSpace:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    showing: CommentUserUploadQuotaSpaceShowingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showing' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class CommentUserUploadQuota:
    lifetime: CommentUserUploadQuotaLifetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    periodic: CommentUserUploadQuotaPeriodic = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodic' }})
    space: CommentUserUploadQuotaSpace = field(default=None, metadata={'dataclasses_json': { 'field_name': 'space' }})
    

@dataclass_json
@dataclass
class CommentUserWebsites:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class CommentUser:
    account: CommentUserAccountEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    bio: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio' }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_filter' }})
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    metadata: CommentUserMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    preferences: Optional[CommentUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferences' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    upload_quota: CommentUserUploadQuota = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_quota' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    websites: List[CommentUserWebsites] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    

@dataclass_json
@dataclass
class Comment:
    created_on: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_on' }})
    metadata: CommentMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: CommentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: CommentUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
