from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnDemandPagePictureSizes:
    height: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    width: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    link_with_play_button: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_with_play_button') }})
    
class OnDemandPagePictureTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclass
class OnDemandPagePicture:
    r"""OnDemandPagePicture
    The background image for the On Demand page on Vimeo.
    """
    
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    sizes: List[OnDemandPagePictureSizes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    type: OnDemandPagePictureTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclass_json
@dataclass
class OnDemandPageColors:
    r"""OnDemandPageColors
    The primary and secondary colors used for rendering this On Demand page.
    """
    
    primary: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    secondary: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary') }})
    

@dataclass_json
@dataclass
class OnDemandPageEpisodesBuy:
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    price: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
class OnDemandPageEpisodesRentPeriodEnum(str, Enum):
    ONE_DAY = "1 day"
    ONE_MONTH = "1 month"
    ONE_WEEK = "1 week"
    ONE_YEAR = "1 year"
    TWO_DAY = "2 day"
    TWENTY_FOUR_HOUR = "24 hour"
    THREE_DAY = "3 day"
    THREE_MONTH = "3 month"
    THIRTY_DAY = "30 day"
    FORTY_EIGHT_HOUR = "48 hour"
    SIX_MONTH = "6 month"
    SIXTY_DAY = "60 day"
    SEVEN_DAY = "7 day"
    SEVENTY_TWO_HOUR = "72 hour"


@dataclass_json
@dataclass
class OnDemandPageEpisodesRent:
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    period: OnDemandPageEpisodesRentPeriodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    price: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclass
class OnDemandPageEpisodes:
    r"""OnDemandPageEpisodes
    Information about this On Demand page's episodes, if the page is for a series.
    """
    
    buy: OnDemandPageEpisodesBuy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    rent: OnDemandPageEpisodesRent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsComments:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsComments
    Information about the comments associated with this page.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsGenres:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsGenres
    Information about the genres associated with this page.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsLikes:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsLikes
    Information about the likes associated with this page.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsPictures:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsPictures
    Information about the pictures associated with this page.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsSeasons:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsSeasons
    Information about the seasons associated with this page.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsVideos:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsVideos
    Information about the videos associated with this page.
    """
    
    extra_total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra_total') }})
    main_total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('main_total') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    viewable_total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewable_total') }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnections:
    comments: OnDemandPageMetadataConnectionsMetadataConnectionsComments = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    genres: OnDemandPageMetadataConnectionsMetadataConnectionsGenres = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    likes: OnDemandPageMetadataConnectionsMetadataConnectionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    pictures: OnDemandPageMetadataConnectionsMetadataConnectionsPictures = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    seasons: OnDemandPageMetadataConnectionsMetadataConnectionsSeasons = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasons') }})
    videos: OnDemandPageMetadataConnectionsMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadata:
    connections: OnDemandPageMetadataConnectionsMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnections:
    r"""OnDemandPageMetadataConnections
    A collection of information that is connected to this resource, including videos, genres, and pictures connections.
    """
    
    metadata: OnDemandPageMetadataConnectionsMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadata:
    r"""OnDemandPageMetadata
    Metadata about the On Demand page.
    """
    
    connections: OnDemandPageMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: PurchaseInteraction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    

@dataclass_json
@dataclass
class OnDemandPagePreorder:
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    cancel_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_time') }})
    publish_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publish_time') }})
    time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass_json
@dataclass
class OnDemandPagePublished:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass_json
@dataclass
class OnDemandPageSubscription:
    r"""OnDemandPageSubscription
    Information about subscribing to this On Demand page, if enabled.
    """
    
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    price: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    
class OnDemandPageVideoContextActionEnum(str, Enum):
    ADDED_TO = "Added to"
    APPEARANCE_BY = "Appearance by"
    LIKED_BY = "Liked by"
    UPLOADED_BY = "Uploaded by"


@dataclass_json
@dataclass
class OnDemandPageVideoContext:
    r"""OnDemandPageVideoContext
    The context of the video's subscription, if this video is part of a subscription.
    """
    
    action: OnDemandPageVideoContextActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    resource: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class OnDemandPageVideoLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"


@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsComments:
    r"""OnDemandPageVideoMetadataConnectionsComments
    Information about the comments on this video.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsCredits:
    r"""OnDemandPageVideoMetadataConnectionsCredits
    Information about the users credited in this video.
    """
    
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsLikes:
    r"""OnDemandPageVideoMetadataConnectionsLikes
    Information about the users who have liked this video.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsOndemand:
    r"""OnDemandPageVideoMetadataConnectionsOndemand
    Information about this video's ondemand data.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsPictures:
    r"""OnDemandPageVideoMetadataConnectionsPictures
    Information about this video's thumbnails.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsPlayback:
    r"""OnDemandPageVideoMetadataConnectionsPlayback
    The DRM playback status connection for this video.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsRecommendations:
    r"""OnDemandPageVideoMetadataConnectionsRecommendations
    The recommendations for this video.
    """
    
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsRelated:
    r"""OnDemandPageVideoMetadataConnectionsRelated
    Related content for this video.
    """
    
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsSeason:
    r"""OnDemandPageVideoMetadataConnectionsSeason
    Information about the video's season.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsTexttracks:
    r"""OnDemandPageVideoMetadataConnectionsTexttracks
    Information about this video's text tracks.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsTrailer:
    r"""OnDemandPageVideoMetadataConnectionsTrailer
    Information about this video's VOD trailer.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsUsersWithAccess:
    r"""OnDemandPageVideoMetadataConnectionsUsersWithAccess
    Information about the user privacy of this video, if the video privacy is `users`.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnectionsVersions:
    r"""OnDemandPageVideoMetadataConnectionsVersions
    Information about the versions of this video.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    current_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataConnections:
    r"""OnDemandPageVideoMetadataConnections
    A list of resource URIs related to the video.
    """
    
    comments: OnDemandPageVideoMetadataConnectionsComments = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    credits: OnDemandPageVideoMetadataConnectionsCredits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits') }})
    likes: OnDemandPageVideoMetadataConnectionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    ondemand: OnDemandPageVideoMetadataConnectionsOndemand = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ondemand') }})
    pictures: OnDemandPageVideoMetadataConnectionsPictures = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    playback: OnDemandPageVideoMetadataConnectionsPlayback = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback') }})
    recommendations: OnDemandPageVideoMetadataConnectionsRecommendations = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    related: OnDemandPageVideoMetadataConnectionsRelated = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    season: OnDemandPageVideoMetadataConnectionsSeason = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    texttracks: OnDemandPageVideoMetadataConnectionsTexttracks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('texttracks') }})
    trailer: OnDemandPageVideoMetadataConnectionsTrailer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailer') }})
    users_with_access: OnDemandPageVideoMetadataConnectionsUsersWithAccess = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_with_access') }})
    versions: OnDemandPageVideoMetadataConnectionsVersions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
class OnDemandPageVideoMetadataInteractionsBuyDownloadEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"

class OnDemandPageVideoMetadataInteractionsBuyStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class OnDemandPageVideoMetadataInteractionsBuy:
    r"""OnDemandPageVideoMetadataInteractionsBuy
    The Buy interaction for a On Demand video.
    """
    
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_price: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_price') }})
    download: OnDemandPageVideoMetadataInteractionsBuyDownloadEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    drm: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    price: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchase_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: OnDemandPageVideoMetadataInteractionsBuyStreamEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataInteractionsChannel:
    r"""OnDemandPageVideoMetadataInteractionsChannel
    When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataInteractionsLike:
    r"""OnDemandPageVideoMetadataInteractionsLike
    Information about whether the authenticated user has liked this video.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
class OnDemandPageVideoMetadataInteractionsRentStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class OnDemandPageVideoMetadataInteractionsRent:
    r"""OnDemandPageVideoMetadataInteractionsRent
    The Rent interaction for an On Demand video.
    """
    
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_price: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_price') }})
    drm: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    expires_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_time') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    price: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchase_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: OnDemandPageVideoMetadataInteractionsRentStreamEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataInteractionsReport:
    r"""OnDemandPageVideoMetadataInteractionsReport
    Information about where and how to report a video.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataInteractionsSubscribe:
    r"""OnDemandPageVideoMetadataInteractionsSubscribe
    Subscription information for an On Demand video.
    """
    
    drm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    expires_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_time') }})
    purchase_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataInteractionsWatched:
    r"""OnDemandPageVideoMetadataInteractionsWatched
    Information about removing this video from the user's list of watched videos.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataInteractionsWatchlater:
    r"""OnDemandPageVideoMetadataInteractionsWatchlater
    Information about whether this video appears on the authenticated user's Watch Later list.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadataInteractions:
    r"""OnDemandPageVideoMetadataInteractions
    A list of resource URIs related to the video.
    """
    
    buy: OnDemandPageVideoMetadataInteractionsBuy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    channel: OnDemandPageVideoMetadataInteractionsChannel = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    like: OnDemandPageVideoMetadataInteractionsLike = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    rent: OnDemandPageVideoMetadataInteractionsRent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    report: OnDemandPageVideoMetadataInteractionsReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    watched: OnDemandPageVideoMetadataInteractionsWatched = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched') }})
    watchlater: OnDemandPageVideoMetadataInteractionsWatchlater = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    subscribe: Optional[OnDemandPageVideoMetadataInteractionsSubscribe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribe') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoMetadata:
    r"""OnDemandPageVideoMetadata
    The video's metadata.
    """
    
    connections: OnDemandPageVideoMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: OnDemandPageVideoMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoProjectMetadataConnectionsVideos:
    r"""OnDemandPageVideoProjectMetadataConnectionsVideos
    A standard connection object indicating how to get all the videos in this project.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoProjectMetadataConnections:
    r"""OnDemandPageVideoProjectMetadataConnections
    A list of resource URIs related to the project.
    """
    
    videos: OnDemandPageVideoProjectMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoProjectMetadata:
    r"""OnDemandPageVideoProjectMetadata
    The project's metadata.
    """
    
    connections: OnDemandPageVideoProjectMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoProject:
    r"""OnDemandPageVideoProject
    Information about the folder that contains this video.
    """
    
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    metadata: OnDemandPageVideoProjectMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: User = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
class OnDemandPageVideoPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class OnDemandPageVideoPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"

class OnDemandPageVideoPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class OnDemandPageVideoPrivacy:
    r"""OnDemandPageVideoPrivacy
    The video's privacy setting.
    """
    
    add: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: OnDemandPageVideoPrivacyCommentsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: OnDemandPageVideoPrivacyEmbedEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: OnDemandPageVideoPrivacyViewEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoSpatialDirectorTimeline:
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roll') }})
    time_code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    yaw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaw') }})
    
class OnDemandPageVideoSpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class OnDemandPageVideoSpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclass
class OnDemandPageVideoSpatial:
    r"""OnDemandPageVideoSpatial
    360 spatial data.
    """
    
    director_timeline: List[OnDemandPageVideoSpatialDirectorTimeline] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('director_timeline') }})
    field_of_view: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_of_view') }})
    projection: OnDemandPageVideoSpatialProjectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    stereo_format: OnDemandPageVideoSpatialStereoFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_format') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoStats:
    r"""OnDemandPageVideoStats
    A collection of stats associated with this video.
    """
    
    plays: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    
class OnDemandPageVideoStatusEnum(str, Enum):
    AVAILABLE = "available"
    QUOTA_EXCEEDED = "quota_exceeded"
    TOTAL_CAP_EXCEEDED = "total_cap_exceeded"
    TRANSCODE_STARTING = "transcode_starting"
    TRANSCODING = "transcoding"
    TRANSCODING_ERROR = "transcoding_error"
    UNAVAILABLE = "unavailable"
    UPLOADING = "uploading"
    UPLOADING_ERROR = "uploading_error"

class OnDemandPageVideoTranscodeStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclass
class OnDemandPageVideoTranscode:
    r"""OnDemandPageVideoTranscode
    The transcode information for a video upload.
    """
    
    status: Optional[OnDemandPageVideoTranscodeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class OnDemandPageVideoUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"

class OnDemandPageVideoUploadStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclass
class OnDemandPageVideoUpload:
    r"""OnDemandPageVideoUpload
    The upload information for this video.
    """
    
    status: OnDemandPageVideoUploadStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    approach: Optional[OnDemandPageVideoUploadApproachEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    complete_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complete_uri') }})
    form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    upload_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_link') }})
    
class OnDemandPageVideoUserAccountEnum(str, Enum):
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
class OnDemandPageVideoUserMetadataConnectionsAlbums:
    r"""OnDemandPageVideoUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsAppearances:
    r"""OnDemandPageVideoUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsBlock:
    r"""OnDemandPageVideoUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsCategories:
    r"""OnDemandPageVideoUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsChannels:
    r"""OnDemandPageVideoUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsFeed:
    r"""OnDemandPageVideoUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsFolders:
    r"""OnDemandPageVideoUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsFollowers:
    r"""OnDemandPageVideoUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsFollowing:
    r"""OnDemandPageVideoUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsGroups:
    r"""OnDemandPageVideoUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsLikes:
    r"""OnDemandPageVideoUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsModeratedChannels:
    r"""OnDemandPageVideoUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsPictures:
    r"""OnDemandPageVideoUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsPortfolios:
    r"""OnDemandPageVideoUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsRecommendedChannels:
    r"""OnDemandPageVideoUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsRecommendedUsers:
    r"""OnDemandPageVideoUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsShared:
    r"""OnDemandPageVideoUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsVideos:
    r"""OnDemandPageVideoUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsWatchedVideos:
    r"""OnDemandPageVideoUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnectionsWatchlater:
    r"""OnDemandPageVideoUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataConnections:
    r"""OnDemandPageVideoUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: OnDemandPageVideoUserMetadataConnectionsAlbums = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: OnDemandPageVideoUserMetadataConnectionsAppearances = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: OnDemandPageVideoUserMetadataConnectionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: OnDemandPageVideoUserMetadataConnectionsCategories = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: OnDemandPageVideoUserMetadataConnectionsChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: OnDemandPageVideoUserMetadataConnectionsFeed = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: OnDemandPageVideoUserMetadataConnectionsFolders = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: OnDemandPageVideoUserMetadataConnectionsFollowers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: OnDemandPageVideoUserMetadataConnectionsFollowing = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: OnDemandPageVideoUserMetadataConnectionsGroups = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: OnDemandPageVideoUserMetadataConnectionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: OnDemandPageVideoUserMetadataConnectionsModeratedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: OnDemandPageVideoUserMetadataConnectionsPictures = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: OnDemandPageVideoUserMetadataConnectionsPortfolios = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: OnDemandPageVideoUserMetadataConnectionsRecommendedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: OnDemandPageVideoUserMetadataConnectionsRecommendedUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: OnDemandPageVideoUserMetadataConnectionsShared = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: OnDemandPageVideoUserMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: OnDemandPageVideoUserMetadataConnectionsWatchedVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: OnDemandPageVideoUserMetadataConnectionsWatchlater = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataInteractionsBlock:
    r"""OnDemandPageVideoUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataInteractionsFollow:
    r"""OnDemandPageVideoUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataInteractionsReport:
    r"""OnDemandPageVideoUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadataInteractions:
    block: OnDemandPageVideoUserMetadataInteractionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: OnDemandPageVideoUserMetadataInteractionsFollow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: OnDemandPageVideoUserMetadataInteractionsReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserMetadata:
    r"""OnDemandPageVideoUserMetadata
    The user's metadata.
    """
    
    connections: OnDemandPageVideoUserMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: OnDemandPageVideoUserMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class OnDemandPageVideoUserPreferencesVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserPreferencesVideos:
    privacy: Optional[OnDemandPageVideoUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserPreferences:
    videos: Optional[OnDemandPageVideoUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserUploadQuotaLifetime:
    r"""OnDemandPageVideoUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserUploadQuotaPeriodic:
    r"""OnDemandPageVideoUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class OnDemandPageVideoUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class OnDemandPageVideoUserUploadQuotaSpace:
    r"""OnDemandPageVideoUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: OnDemandPageVideoUserUploadQuotaSpaceShowingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserUploadQuota:
    r"""OnDemandPageVideoUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: OnDemandPageVideoUserUploadQuotaLifetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: OnDemandPageVideoUserUploadQuotaPeriodic = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: OnDemandPageVideoUserUploadQuotaSpace = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUserWebsites:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideoUser:
    r"""OnDemandPageVideoUser
    The video owner.
    """
    
    account: OnDemandPageVideoUserAccountEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: OnDemandPageVideoUserMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: OnDemandPageVideoUserUploadQuota = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: List[OnDemandPageVideoUserWebsites] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[OnDemandPageVideoUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclass
class OnDemandPageVideo:
    r"""OnDemandPageVideo
    The trailer for this On Demand page.
    """
    
    categories: List[Category] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    content_rating: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    context: OnDemandPageVideoContext = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    embed: EmbedSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    height: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    language: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    license: OnDemandPageVideoLicenseEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: OnDemandPageVideoMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    privacy: OnDemandPageVideoPrivacy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    release_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_time') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    spatial: OnDemandPageVideoSpatial = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatial') }})
    stats: OnDemandPageVideoStats = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    status: OnDemandPageVideoStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: List[Tag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    transcode: OnDemandPageVideoTranscode = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcode') }})
    upload: OnDemandPageVideoUpload = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: OnDemandPageVideoUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    width: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    last_user_action_event_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_user_action_event_date') }})
    parent_folder: Optional[OnDemandPageVideoProject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
class OnDemandPageTypeEnum(str, Enum):
    FILM = "film"
    SERIES = "series"

class OnDemandPageUserAccountEnum(str, Enum):
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
class OnDemandPageUserMetadataConnectionsAlbums:
    r"""OnDemandPageUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsAppearances:
    r"""OnDemandPageUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsBlock:
    r"""OnDemandPageUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsCategories:
    r"""OnDemandPageUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsChannels:
    r"""OnDemandPageUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsFeed:
    r"""OnDemandPageUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsFolders:
    r"""OnDemandPageUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsFollowers:
    r"""OnDemandPageUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsFollowing:
    r"""OnDemandPageUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsGroups:
    r"""OnDemandPageUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsLikes:
    r"""OnDemandPageUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsModeratedChannels:
    r"""OnDemandPageUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsPictures:
    r"""OnDemandPageUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsPortfolios:
    r"""OnDemandPageUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsRecommendedChannels:
    r"""OnDemandPageUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsRecommendedUsers:
    r"""OnDemandPageUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsShared:
    r"""OnDemandPageUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsVideos:
    r"""OnDemandPageUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsWatchedVideos:
    r"""OnDemandPageUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsWatchlater:
    r"""OnDemandPageUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnections:
    r"""OnDemandPageUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: OnDemandPageUserMetadataConnectionsAlbums = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: OnDemandPageUserMetadataConnectionsAppearances = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: OnDemandPageUserMetadataConnectionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: OnDemandPageUserMetadataConnectionsCategories = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: OnDemandPageUserMetadataConnectionsChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: OnDemandPageUserMetadataConnectionsFeed = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: OnDemandPageUserMetadataConnectionsFolders = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: OnDemandPageUserMetadataConnectionsFollowers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: OnDemandPageUserMetadataConnectionsFollowing = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: OnDemandPageUserMetadataConnectionsGroups = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: OnDemandPageUserMetadataConnectionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: OnDemandPageUserMetadataConnectionsModeratedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: OnDemandPageUserMetadataConnectionsPictures = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: OnDemandPageUserMetadataConnectionsPortfolios = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: OnDemandPageUserMetadataConnectionsRecommendedChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: OnDemandPageUserMetadataConnectionsRecommendedUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: OnDemandPageUserMetadataConnectionsShared = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: OnDemandPageUserMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: OnDemandPageUserMetadataConnectionsWatchedVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: OnDemandPageUserMetadataConnectionsWatchlater = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataInteractionsBlock:
    r"""OnDemandPageUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataInteractionsFollow:
    r"""OnDemandPageUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataInteractionsReport:
    r"""OnDemandPageUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataInteractions:
    block: OnDemandPageUserMetadataInteractionsBlock = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: OnDemandPageUserMetadataInteractionsFollow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: OnDemandPageUserMetadataInteractionsReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[OnDemandPageUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadata:
    r"""OnDemandPageUserMetadata
    The user's metadata.
    """
    
    connections: OnDemandPageUserMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: OnDemandPageUserMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class OnDemandPageUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class OnDemandPageUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class OnDemandPageUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class OnDemandPageUserPreferencesVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[OnDemandPageUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[OnDemandPageUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[OnDemandPageUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserPreferencesVideos:
    privacy: Optional[OnDemandPageUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserPreferences:
    videos: Optional[OnDemandPageUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserUploadQuotaLifetime:
    r"""OnDemandPageUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserUploadQuotaPeriodic:
    r"""OnDemandPageUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class OnDemandPageUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class OnDemandPageUserUploadQuotaSpace:
    r"""OnDemandPageUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: OnDemandPageUserUploadQuotaSpaceShowingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserUploadQuota:
    r"""OnDemandPageUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: OnDemandPageUserUploadQuotaLifetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: OnDemandPageUserUploadQuotaPeriodic = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: OnDemandPageUserUploadQuotaSpace = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclass
class OnDemandPageUserWebsites:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class OnDemandPageUser:
    r"""OnDemandPageUser
    The user who created this On Demand page.
    """
    
    account: OnDemandPageUserAccountEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: OnDemandPageUserMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: OnDemandPageUserUploadQuota = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: List[OnDemandPageUserWebsites] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[OnDemandPageUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclass
class OnDemandPage:
    background: OnDemandPagePicture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    colors: OnDemandPageColors = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    content_rating: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    domain_link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_link') }})
    episodes: OnDemandPageEpisodes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodes') }})
    genres: List[OnDemandGenre] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: OnDemandPageMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: OnDemandPagePicture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    preorder: OnDemandPagePreorder = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preorder') }})
    published: OnDemandPagePublished = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    rating: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    subscription: OnDemandPageSubscription = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    theme: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    thumbnail: OnDemandPagePicture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    trailer: OnDemandPageVideo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailer') }})
    type: OnDemandPageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: OnDemandPageUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    film: Optional[Video] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('film') }})
    modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    
