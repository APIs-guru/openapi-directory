from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import category
from . import embed_settings
from . import user
from . import picture
from . import tag
from . import picture

class VideoContextActionEnum(str, Enum):
    ADDED_TO = "Added to"
    APPEARANCE_BY = "Appearance by"
    LIKED_BY = "Liked by"
    UPLOADED_BY = "Uploaded by"


@dataclass_json
@dataclass
class VideoContext:
    action: VideoContextActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    resource: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    
class VideoLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"


@dataclass_json
@dataclass
class VideoMetadataConnectionsComments:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsCredits:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsLikes:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsOndemand:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsPictures:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsPlayback:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsRecommendations:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsRelated:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsSeason:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsTexttracks:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsTrailer:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsUsersWithAccess:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsVersions:
    current_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_uri' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataConnections:
    comments: VideoMetadataConnectionsComments = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    credits: VideoMetadataConnectionsCredits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credits' }})
    likes: VideoMetadataConnectionsLikes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    ondemand: VideoMetadataConnectionsOndemand = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ondemand' }})
    pictures: VideoMetadataConnectionsPictures = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    playback: VideoMetadataConnectionsPlayback = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playback' }})
    recommendations: VideoMetadataConnectionsRecommendations = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendations' }})
    related: VideoMetadataConnectionsRelated = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    season: VideoMetadataConnectionsSeason = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    texttracks: VideoMetadataConnectionsTexttracks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'texttracks' }})
    trailer: VideoMetadataConnectionsTrailer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trailer' }})
    users_with_access: VideoMetadataConnectionsUsersWithAccess = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users_with_access' }})
    versions: VideoMetadataConnectionsVersions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
class VideoMetadataInteractionsBuyDownloadEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"

class VideoMetadataInteractionsBuyStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class VideoMetadataInteractionsBuy:
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    display_price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_price' }})
    download: VideoMetadataInteractionsBuyDownloadEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    drm: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drm' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    purchase_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_time' }})
    stream: VideoMetadataInteractionsBuyStreamEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsChannel:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsLike:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
class VideoMetadataInteractionsRentStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class VideoMetadataInteractionsRent:
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    display_price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_price' }})
    drm: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drm' }})
    expires_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_time' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    purchase_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_time' }})
    stream: VideoMetadataInteractionsRentStreamEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsReport:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    reason: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsSubscribe:
    drm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drm' }})
    expires_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_time' }})
    purchase_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_time' }})
    stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream' }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsWatched:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsWatchlater:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractions:
    buy: VideoMetadataInteractionsBuy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buy' }})
    channel: VideoMetadataInteractionsChannel = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    like: VideoMetadataInteractionsLike = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like' }})
    rent: VideoMetadataInteractionsRent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rent' }})
    report: VideoMetadataInteractionsReport = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    subscribe: Optional[VideoMetadataInteractionsSubscribe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribe' }})
    watched: VideoMetadataInteractionsWatched = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched' }})
    watchlater: VideoMetadataInteractionsWatchlater = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class VideoMetadata:
    connections: VideoMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: VideoMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    

@dataclass_json
@dataclass
class VideoParentFolderMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoParentFolderMetadataConnections:
    videos: VideoParentFolderMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class VideoParentFolderMetadata:
    connections: VideoParentFolderMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    

@dataclass_json
@dataclass
class VideoParentFolderProject:
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    metadata: VideoParentFolderMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_time' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: user.User = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
class VideoPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class VideoPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"

class VideoPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class VideoPrivacy:
    add: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: VideoPrivacyCommentsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: VideoPrivacyEmbedEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: VideoPrivacyViewEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class VideoSpatialDirectorTimeline:
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitch' }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roll' }})
    time_code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_code' }})
    yaw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yaw' }})
    
class VideoSpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class VideoSpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclass
class VideoSpatial:
    director_timeline: List[VideoSpatialDirectorTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'director_timeline' }})
    field_of_view: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field_of_view' }})
    projection: VideoSpatialProjectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projection' }})
    stereo_format: VideoSpatialStereoFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stereo_format' }})
    

@dataclass_json
@dataclass
class VideoStats:
    plays: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plays' }})
    
class VideoStatusEnum(str, Enum):
    AVAILABLE = "available"
    QUOTA_EXCEEDED = "quota_exceeded"
    TOTAL_CAP_EXCEEDED = "total_cap_exceeded"
    TRANSCODE_STARTING = "transcode_starting"
    TRANSCODING = "transcoding"
    TRANSCODING_ERROR = "transcoding_error"
    UNAVAILABLE = "unavailable"
    UPLOADING = "uploading"
    UPLOADING_ERROR = "uploading_error"

class VideoTranscodeStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclass
class VideoTranscode:
    status: Optional[VideoTranscodeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class VideoUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"

class VideoUploadStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclass
class VideoUpload:
    approach: Optional[VideoUploadApproachEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approach' }})
    complete_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complete_uri' }})
    form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: VideoUploadStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    upload_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_link' }})
    
class VideoUserAccountEnum(str, Enum):
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
class VideoUserMetadataConnectionsAlbums:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsAppearances:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsBlock:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsCategories:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsFeed:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsFolders:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsFollowers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsFollowing:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsGroups:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsLikes:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsModeratedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsPictures:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsPortfolios:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsRecommendedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsRecommendedUsers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsShared:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsWatchedVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsWatchlater:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnections:
    albums: VideoUserMetadataConnectionsAlbums = field(default=None, metadata={'dataclasses_json': { 'field_name': 'albums' }})
    appearances: VideoUserMetadataConnectionsAppearances = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appearances' }})
    block: VideoUserMetadataConnectionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    categories: VideoUserMetadataConnectionsCategories = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    channels: VideoUserMetadataConnectionsChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    feed: VideoUserMetadataConnectionsFeed = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feed' }})
    folders: VideoUserMetadataConnectionsFolders = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    followers: VideoUserMetadataConnectionsFollowers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    following: VideoUserMetadataConnectionsFollowing = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following' }})
    groups: VideoUserMetadataConnectionsGroups = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    likes: VideoUserMetadataConnectionsLikes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    moderated_channels: VideoUserMetadataConnectionsModeratedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderated_channels' }})
    pictures: VideoUserMetadataConnectionsPictures = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    portfolios: VideoUserMetadataConnectionsPortfolios = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    recommended_channels: VideoUserMetadataConnectionsRecommendedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_channels' }})
    recommended_users: VideoUserMetadataConnectionsRecommendedUsers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_users' }})
    shared: VideoUserMetadataConnectionsShared = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shared' }})
    videos: VideoUserMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    watched_videos: VideoUserMetadataConnectionsWatchedVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched_videos' }})
    watchlater: VideoUserMetadataConnectionsWatchlater = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataInteractionsBlock:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataInteractionsFollow:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataInteractionsReport:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    reason: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class VideoUserMetadataInteractions:
    add_privacy_user: Optional[VideoUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_privacy_user' }})
    block: VideoUserMetadataInteractionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    follow: VideoUserMetadataInteractionsFollow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'follow' }})
    report: VideoUserMetadataInteractionsReport = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    

@dataclass_json
@dataclass
class VideoUserMetadata:
    connections: VideoUserMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: VideoUserMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    
class VideoUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class VideoUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class VideoUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class VideoUserPreferencesVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: Optional[VideoUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: Optional[VideoUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: Optional[VideoUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class VideoUserPreferencesVideos:
    privacy: Optional[VideoUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass_json
@dataclass
class VideoUserPreferences:
    videos: Optional[VideoUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class VideoUserUploadQuotaLifetime:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class VideoUserUploadQuotaPeriodic:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    reset_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset_date' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    
class VideoUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class VideoUserUploadQuotaSpace:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    showing: VideoUserUploadQuotaSpaceShowingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showing' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class VideoUserUploadQuota:
    lifetime: VideoUserUploadQuotaLifetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    periodic: VideoUserUploadQuotaPeriodic = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodic' }})
    space: VideoUserUploadQuotaSpace = field(default=None, metadata={'dataclasses_json': { 'field_name': 'space' }})
    

@dataclass_json
@dataclass
class VideoUserWebsites:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class VideoUserUser:
    account: VideoUserAccountEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    bio: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio' }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_filter' }})
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    metadata: VideoUserMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    preferences: Optional[VideoUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferences' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    upload_quota: VideoUserUploadQuota = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_quota' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    websites: List[VideoUserWebsites] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    

@dataclass_json
@dataclass
class Video:
    categories: List[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    content_rating: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_rating' }})
    context: VideoContext = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    embed: embed_settings.EmbedSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    height: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    last_user_action_event_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_user_action_event_date' }})
    license: VideoLicenseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    metadata: VideoMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_time' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder: Optional[VideoParentFolderProject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_folder' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    privacy: VideoPrivacy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    release_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_time' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    spatial: VideoSpatial = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spatial' }})
    stats: VideoStats = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    status: VideoStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: List[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    transcode: VideoTranscode = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcode' }})
    upload: VideoUpload = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: VideoUserUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    width: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
