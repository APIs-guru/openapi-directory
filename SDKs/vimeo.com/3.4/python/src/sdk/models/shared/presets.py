from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import picture


@dataclass_json
@dataclass
class PresetsMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsMetadataConnections:
    videos: PresetsMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class PresetsMetadata:
    connections: PresetsMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    

@dataclass_json
@dataclass
class PresetsSettingsButtons:
    embed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    hd: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hd' }})
    like: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like' }})
    share: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'share' }})
    vote: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vote' }})
    watchlater: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class PresetsSettingsLogos:
    custom: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    sticky_custom: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_custom' }})
    vimeo: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vimeo' }})
    

@dataclass_json
@dataclass
class PresetsSettingsOutroLink:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class PresetsSettingsOutroTypeEnum(str, Enum):
    LINK = "link"
    NO_IDEA = "no idea"
    TEXT = "text"
    UPLOADED_CLIPS = "uploaded_clips"
    UPLOADED_VIDEOS = "uploaded_videos"


@dataclass_json
@dataclass
class PresetsSettingsOutro:
    clips: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clips' }})
    link: Optional[PresetsSettingsOutroLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: PresetsSettingsOutroTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    videos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class PresetsSettings:
    buttons: PresetsSettingsButtons = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    logos: PresetsSettingsLogos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logos' }})
    outro: PresetsSettingsOutro = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outro' }})
    
class PresetsUserAccountEnum(str, Enum):
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
class PresetsUserMetadataConnectionsAlbums:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsAppearances:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsBlock:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsCategories:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsFeed:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsFolders:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsFollowers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsFollowing:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsGroups:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsLikes:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsModeratedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsPictures:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsPortfolios:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsRecommendedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsRecommendedUsers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsShared:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsWatchedVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnectionsWatchlater:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataConnections:
    albums: PresetsUserMetadataConnectionsAlbums = field(default=None, metadata={'dataclasses_json': { 'field_name': 'albums' }})
    appearances: PresetsUserMetadataConnectionsAppearances = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appearances' }})
    block: PresetsUserMetadataConnectionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    categories: PresetsUserMetadataConnectionsCategories = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    channels: PresetsUserMetadataConnectionsChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    feed: PresetsUserMetadataConnectionsFeed = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feed' }})
    folders: PresetsUserMetadataConnectionsFolders = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    followers: PresetsUserMetadataConnectionsFollowers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    following: PresetsUserMetadataConnectionsFollowing = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following' }})
    groups: PresetsUserMetadataConnectionsGroups = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    likes: PresetsUserMetadataConnectionsLikes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    moderated_channels: PresetsUserMetadataConnectionsModeratedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderated_channels' }})
    pictures: PresetsUserMetadataConnectionsPictures = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    portfolios: PresetsUserMetadataConnectionsPortfolios = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    recommended_channels: PresetsUserMetadataConnectionsRecommendedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_channels' }})
    recommended_users: PresetsUserMetadataConnectionsRecommendedUsers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_users' }})
    shared: PresetsUserMetadataConnectionsShared = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shared' }})
    videos: PresetsUserMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    watched_videos: PresetsUserMetadataConnectionsWatchedVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched_videos' }})
    watchlater: PresetsUserMetadataConnectionsWatchlater = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataInteractionsBlock:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataInteractionsFollow:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataInteractionsReport:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    reason: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadataInteractions:
    add_privacy_user: Optional[PresetsUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_privacy_user' }})
    block: PresetsUserMetadataInteractionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    follow: PresetsUserMetadataInteractionsFollow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'follow' }})
    report: PresetsUserMetadataInteractionsReport = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    

@dataclass_json
@dataclass
class PresetsUserMetadata:
    connections: PresetsUserMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: PresetsUserMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    
class PresetsUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class PresetsUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class PresetsUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class PresetsUserPreferencesVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: Optional[PresetsUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: Optional[PresetsUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: Optional[PresetsUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class PresetsUserPreferencesVideos:
    privacy: Optional[PresetsUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass_json
@dataclass
class PresetsUserPreferences:
    videos: Optional[PresetsUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class PresetsUserUploadQuotaLifetime:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class PresetsUserUploadQuotaPeriodic:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    reset_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset_date' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    
class PresetsUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class PresetsUserUploadQuotaSpace:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    showing: PresetsUserUploadQuotaSpaceShowingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showing' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class PresetsUserUploadQuota:
    lifetime: PresetsUserUploadQuotaLifetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    periodic: PresetsUserUploadQuotaPeriodic = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodic' }})
    space: PresetsUserUploadQuotaSpace = field(default=None, metadata={'dataclasses_json': { 'field_name': 'space' }})
    

@dataclass_json
@dataclass
class PresetsUserWebsites:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PresetsUserUser:
    account: PresetsUserAccountEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    bio: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio' }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_filter' }})
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    metadata: PresetsUserMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    preferences: Optional[PresetsUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferences' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    upload_quota: PresetsUserUploadQuota = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_quota' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    websites: List[PresetsUserWebsites] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    

@dataclass_json
@dataclass
class Presets:
    metadata: PresetsMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    settings: PresetsSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: PresetsUserUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
