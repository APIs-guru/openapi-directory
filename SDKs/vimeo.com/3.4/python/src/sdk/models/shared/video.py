from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VideoContextActionEnum(str, Enum):
    ADDED_TO = "Added to"
    APPEARANCE_BY = "Appearance by"
    LIKED_BY = "Liked by"
    UPLOADED_BY = "Uploaded by"


@dataclass_json
@dataclass
class VideoContext:
    r"""VideoContext
    The context of the video's subscription, if this video is part of a subscription.
    """
    
    action: VideoContextActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    resource: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
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
    r"""VideoMetadataConnectionsComments
    Information about the comments on this video.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsCredits:
    r"""VideoMetadataConnectionsCredits
    Information about the users credited in this video.
    """
    
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsLikes:
    r"""VideoMetadataConnectionsLikes
    Information about the users who have liked this video.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsOndemand:
    r"""VideoMetadataConnectionsOndemand
    Information about this video's ondemand data.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsPictures:
    r"""VideoMetadataConnectionsPictures
    Information about this video's thumbnails.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsPlayback:
    r"""VideoMetadataConnectionsPlayback
    The DRM playback status connection for this video.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsRecommendations:
    r"""VideoMetadataConnectionsRecommendations
    The recommendations for this video.
    """
    
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsRelated:
    r"""VideoMetadataConnectionsRelated
    Related content for this video.
    """
    
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsSeason:
    r"""VideoMetadataConnectionsSeason
    Information about the video's season.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsTexttracks:
    r"""VideoMetadataConnectionsTexttracks
    Information about this video's text tracks.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsTrailer:
    r"""VideoMetadataConnectionsTrailer
    Information about this video's VOD trailer.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsUsersWithAccess:
    r"""VideoMetadataConnectionsUsersWithAccess
    Information about the user privacy of this video, if the video privacy is `users`.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnectionsVersions:
    r"""VideoMetadataConnectionsVersions
    Information about the versions of this video.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    current_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataConnections:
    r"""VideoMetadataConnections
    A list of resource URIs related to the video.
    """
    
    comments: VideoMetadataConnectionsComments = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    credits: VideoMetadataConnectionsCredits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits') }})
    likes: VideoMetadataConnectionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    ondemand: VideoMetadataConnectionsOndemand = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ondemand') }})
    pictures: VideoMetadataConnectionsPictures = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    playback: VideoMetadataConnectionsPlayback = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback') }})
    recommendations: VideoMetadataConnectionsRecommendations = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    related: VideoMetadataConnectionsRelated = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    season: VideoMetadataConnectionsSeason = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    texttracks: VideoMetadataConnectionsTexttracks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('texttracks') }})
    trailer: VideoMetadataConnectionsTrailer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailer') }})
    users_with_access: VideoMetadataConnectionsUsersWithAccess = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_with_access') }})
    versions: VideoMetadataConnectionsVersions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
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
    r"""VideoMetadataInteractionsBuy
    The Buy interaction for a On Demand video.
    """
    
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_price: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_price') }})
    download: VideoMetadataInteractionsBuyDownloadEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    drm: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    price: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchase_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: VideoMetadataInteractionsBuyStreamEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsChannel:
    r"""VideoMetadataInteractionsChannel
    When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsLike:
    r"""VideoMetadataInteractionsLike
    Information about whether the authenticated user has liked this video.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
class VideoMetadataInteractionsRentStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class VideoMetadataInteractionsRent:
    r"""VideoMetadataInteractionsRent
    The Rent interaction for an On Demand video.
    """
    
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_price: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_price') }})
    drm: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    expires_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_time') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    price: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchase_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: VideoMetadataInteractionsRentStreamEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsReport:
    r"""VideoMetadataInteractionsReport
    Information about where and how to report a video.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsSubscribe:
    r"""VideoMetadataInteractionsSubscribe
    Subscription information for an On Demand video.
    """
    
    drm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    expires_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_time') }})
    purchase_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsWatched:
    r"""VideoMetadataInteractionsWatched
    Information about removing this video from the user's list of watched videos.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractionsWatchlater:
    r"""VideoMetadataInteractionsWatchlater
    Information about whether this video appears on the authenticated user's Watch Later list.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoMetadataInteractions:
    r"""VideoMetadataInteractions
    A list of resource URIs related to the video.
    """
    
    buy: VideoMetadataInteractionsBuy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    channel: VideoMetadataInteractionsChannel = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    like: VideoMetadataInteractionsLike = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    rent: VideoMetadataInteractionsRent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    report: VideoMetadataInteractionsReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    watched: VideoMetadataInteractionsWatched = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched') }})
    watchlater: VideoMetadataInteractionsWatchlater = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    subscribe: Optional[VideoMetadataInteractionsSubscribe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribe') }})
    

@dataclass_json
@dataclass
class VideoMetadata:
    r"""VideoMetadata
    The video's metadata.
    """
    
    connections: VideoMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: VideoMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    

@dataclass_json
@dataclass
class VideoProjectMetadataConnectionsVideos:
    r"""VideoProjectMetadataConnectionsVideos
    A standard connection object indicating how to get all the videos in this project.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoProjectMetadataConnections:
    r"""VideoProjectMetadataConnections
    A list of resource URIs related to the project.
    """
    
    videos: VideoProjectMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class VideoProjectMetadata:
    r"""VideoProjectMetadata
    The project's metadata.
    """
    
    connections: VideoProjectMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclass
class VideoProject:
    r"""VideoProject
    Information about the folder that contains this video.
    """
    
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    metadata: VideoProjectMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: User = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
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
    r"""VideoPrivacy
    The video's privacy setting.
    """
    
    add: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: VideoPrivacyCommentsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: VideoPrivacyEmbedEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: VideoPrivacyViewEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class VideoSpatialDirectorTimeline:
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roll') }})
    time_code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    yaw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaw') }})
    
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
    r"""VideoSpatial
    360 spatial data.
    """
    
    director_timeline: List[VideoSpatialDirectorTimeline] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('director_timeline') }})
    field_of_view: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_of_view') }})
    projection: VideoSpatialProjectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    stereo_format: VideoSpatialStereoFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_format') }})
    

@dataclass_json
@dataclass
class VideoStats:
    r"""VideoStats
    A collection of stats associated with this video.
    """
    
    plays: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    
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
    r"""VideoTranscode
    The transcode information for a video upload.
    """
    
    status: Optional[VideoTranscodeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
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
    r"""VideoUpload
    The upload information for this video.
    """
    
    status: VideoUploadStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    approach: Optional[VideoUploadApproachEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    complete_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complete_uri') }})
    form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    upload_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_link') }})
    
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
    r"""VideoUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsAppearances:
    r"""VideoUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsBlock:
    r"""VideoUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsCategories:
    r"""VideoUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsChannels:
    r"""VideoUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsFeed:
    r"""VideoUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsFolders:
    r"""VideoUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsFollowers:
    r"""VideoUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsFollowing:
    r"""VideoUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsGroups:
    r"""VideoUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsLikes:
    r"""VideoUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsModeratedChannels:
    r"""VideoUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsPictures:
    r"""VideoUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsPortfolios:
    r"""VideoUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsRecommendedChannels:
    r"""VideoUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsRecommendedUsers:
    r"""VideoUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsShared:
    r"""VideoUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsVideos:
    r"""VideoUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsWatchedVideos:
    r"""VideoUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnectionsWatchlater:
    r"""VideoUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataConnections:
    r"""VideoUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: VideoUserMetadataConnectionsAlbums = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: VideoUserMetadataConnectionsAppearances = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: VideoUserMetadataConnectionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: VideoUserMetadataConnectionsCategories = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: VideoUserMetadataConnectionsChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: VideoUserMetadataConnectionsFeed = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: VideoUserMetadataConnectionsFolders = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: VideoUserMetadataConnectionsFollowers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: VideoUserMetadataConnectionsFollowing = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: VideoUserMetadataConnectionsGroups = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: VideoUserMetadataConnectionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: VideoUserMetadataConnectionsModeratedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: VideoUserMetadataConnectionsPictures = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: VideoUserMetadataConnectionsPortfolios = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: VideoUserMetadataConnectionsRecommendedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: VideoUserMetadataConnectionsRecommendedUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: VideoUserMetadataConnectionsShared = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: VideoUserMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: VideoUserMetadataConnectionsWatchedVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: VideoUserMetadataConnectionsWatchlater = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataInteractionsBlock:
    r"""VideoUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataInteractionsFollow:
    r"""VideoUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataInteractionsReport:
    r"""VideoUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class VideoUserMetadataInteractions:
    block: VideoUserMetadataInteractionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: VideoUserMetadataInteractionsFollow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: VideoUserMetadataInteractionsReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[VideoUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclass
class VideoUserMetadata:
    r"""VideoUserMetadata
    The user's metadata.
    """
    
    connections: VideoUserMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: VideoUserMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
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
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[VideoUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[VideoUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[VideoUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class VideoUserPreferencesVideos:
    privacy: Optional[VideoUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclass
class VideoUserPreferences:
    videos: Optional[VideoUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class VideoUserUploadQuotaLifetime:
    r"""VideoUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class VideoUserUploadQuotaPeriodic:
    r"""VideoUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class VideoUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class VideoUserUploadQuotaSpace:
    r"""VideoUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: VideoUserUploadQuotaSpaceShowingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class VideoUserUploadQuota:
    r"""VideoUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: VideoUserUploadQuotaLifetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: VideoUserUploadQuotaPeriodic = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: VideoUserUploadQuotaSpace = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclass
class VideoUserWebsites:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class VideoUser:
    r"""VideoUser
    The video owner.
    """
    
    account: VideoUserAccountEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: VideoUserMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: VideoUserUploadQuota = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: List[VideoUserWebsites] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[VideoUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclass
class Video:
    categories: List[Category] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    content_rating: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    context: VideoContext = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    embed: EmbedSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    height: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    language: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    license: VideoLicenseEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: VideoMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    privacy: VideoPrivacy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    release_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_time') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    spatial: VideoSpatial = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatial') }})
    stats: VideoStats = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    status: VideoStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: List[Tag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    transcode: VideoTranscode = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcode') }})
    upload: VideoUpload = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: VideoUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    width: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    last_user_action_event_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_user_action_event_date') }})
    parent_folder: Optional[VideoProject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
