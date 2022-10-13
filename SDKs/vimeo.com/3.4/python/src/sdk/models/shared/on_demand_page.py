from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import video
from . import on_demand_genre
from . import purchase_interaction
from . import category
from . import embed_settings
from . import user
from . import picture
from . import tag
from . import picture
from . import picture


@dataclass_json
@dataclass
class OnDemandPageBackgroundSizes:
    height: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_with_play_button: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_with_play_button' }})
    width: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
class OnDemandPageBackgroundTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclass
class OnDemandPageBackgroundPicture:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    sizes: List[OnDemandPageBackgroundSizes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    type: OnDemandPageBackgroundTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageColors:
    primary: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    secondary: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondary' }})
    

@dataclass_json
@dataclass
class OnDemandPageEpisodesBuy:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
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
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    period: OnDemandPageEpisodesRentPeriodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    

@dataclass_json
@dataclass
class OnDemandPageEpisodes:
    buy: OnDemandPageEpisodesBuy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buy' }})
    rent: OnDemandPageEpisodesRent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rent' }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsComments:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsGenres:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsLikes:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsPictures:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsSeasons:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsVideos:
    extra_total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra_total' }})
    main_total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'main_total' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    viewable_total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewable_total' }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadataConnections:
    comments: OnDemandPageMetadataConnectionsMetadataConnectionsComments = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    genres: OnDemandPageMetadataConnectionsMetadataConnectionsGenres = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genres' }})
    likes: OnDemandPageMetadataConnectionsMetadataConnectionsLikes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    pictures: OnDemandPageMetadataConnectionsMetadataConnectionsPictures = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    seasons: OnDemandPageMetadataConnectionsMetadataConnectionsSeasons = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seasons' }})
    videos: OnDemandPageMetadataConnectionsMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnectionsMetadata:
    connections: OnDemandPageMetadataConnectionsMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadataConnections:
    metadata: OnDemandPageMetadataConnectionsMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    

@dataclass_json
@dataclass
class OnDemandPageMetadata:
    connections: OnDemandPageMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: purchase_interaction.PurchaseInteraction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    

@dataclass_json
@dataclass
class OnDemandPagePicturesSizes:
    height: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_with_play_button: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_with_play_button' }})
    width: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
class OnDemandPagePicturesTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclass
class OnDemandPagePicturesPicture:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    sizes: List[OnDemandPagePicturesSizes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    type: OnDemandPagePicturesTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPagePreorder:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    cancel_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel_time' }})
    publish_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publish_time' }})
    time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    

@dataclass_json
@dataclass
class OnDemandPagePublished:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    

@dataclass_json
@dataclass
class OnDemandPageSubscription:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    price: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    

@dataclass_json
@dataclass
class OnDemandPageThumbnailSizes:
    height: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_with_play_button: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_with_play_button' }})
    width: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
class OnDemandPageThumbnailTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclass
class OnDemandPageThumbnailPicture:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    sizes: List[OnDemandPageThumbnailSizes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    type: OnDemandPageThumbnailTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
class OnDemandPageTrailerContextActionEnum(str, Enum):
    ADDED_TO = "Added to"
    APPEARANCE_BY = "Appearance by"
    LIKED_BY = "Liked by"
    UPLOADED_BY = "Uploaded by"


@dataclass_json
@dataclass
class OnDemandPageTrailerContext:
    action: OnDemandPageTrailerContextActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    resource: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    
class OnDemandPageTrailerLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"


@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsComments:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsCredits:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsLikes:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsOndemand:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsPictures:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsPlayback:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsRecommendations:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsRelated:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsSeason:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsTexttracks:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsTrailer:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsUsersWithAccess:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnectionsVersions:
    current_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_uri' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataConnections:
    comments: OnDemandPageTrailerMetadataConnectionsComments = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    credits: OnDemandPageTrailerMetadataConnectionsCredits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credits' }})
    likes: OnDemandPageTrailerMetadataConnectionsLikes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    ondemand: OnDemandPageTrailerMetadataConnectionsOndemand = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ondemand' }})
    pictures: OnDemandPageTrailerMetadataConnectionsPictures = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    playback: OnDemandPageTrailerMetadataConnectionsPlayback = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playback' }})
    recommendations: OnDemandPageTrailerMetadataConnectionsRecommendations = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendations' }})
    related: OnDemandPageTrailerMetadataConnectionsRelated = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    season: OnDemandPageTrailerMetadataConnectionsSeason = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    texttracks: OnDemandPageTrailerMetadataConnectionsTexttracks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'texttracks' }})
    trailer: OnDemandPageTrailerMetadataConnectionsTrailer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trailer' }})
    users_with_access: OnDemandPageTrailerMetadataConnectionsUsersWithAccess = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users_with_access' }})
    versions: OnDemandPageTrailerMetadataConnectionsVersions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
class OnDemandPageTrailerMetadataInteractionsBuyDownloadEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"

class OnDemandPageTrailerMetadataInteractionsBuyStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataInteractionsBuy:
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    display_price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_price' }})
    download: OnDemandPageTrailerMetadataInteractionsBuyDownloadEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    drm: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drm' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    purchase_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_time' }})
    stream: OnDemandPageTrailerMetadataInteractionsBuyStreamEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataInteractionsChannel:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataInteractionsLike:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
class OnDemandPageTrailerMetadataInteractionsRentStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataInteractionsRent:
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    display_price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_price' }})
    drm: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drm' }})
    expires_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_time' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    purchase_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_time' }})
    stream: OnDemandPageTrailerMetadataInteractionsRentStreamEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataInteractionsReport:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    reason: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataInteractionsSubscribe:
    drm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drm' }})
    expires_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_time' }})
    purchase_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_time' }})
    stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataInteractionsWatched:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataInteractionsWatchlater:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadataInteractions:
    buy: OnDemandPageTrailerMetadataInteractionsBuy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buy' }})
    channel: OnDemandPageTrailerMetadataInteractionsChannel = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    like: OnDemandPageTrailerMetadataInteractionsLike = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like' }})
    rent: OnDemandPageTrailerMetadataInteractionsRent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rent' }})
    report: OnDemandPageTrailerMetadataInteractionsReport = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    subscribe: Optional[OnDemandPageTrailerMetadataInteractionsSubscribe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribe' }})
    watched: OnDemandPageTrailerMetadataInteractionsWatched = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched' }})
    watchlater: OnDemandPageTrailerMetadataInteractionsWatchlater = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerMetadata:
    connections: OnDemandPageTrailerMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: OnDemandPageTrailerMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerParentFolderMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerParentFolderMetadataConnections:
    videos: OnDemandPageTrailerParentFolderMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerParentFolderMetadata:
    connections: OnDemandPageTrailerParentFolderMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerParentFolderProject:
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    metadata: OnDemandPageTrailerParentFolderMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_time' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: user.User = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
class OnDemandPageTrailerPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class OnDemandPageTrailerPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"

class OnDemandPageTrailerPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class OnDemandPageTrailerPrivacy:
    add: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: OnDemandPageTrailerPrivacyCommentsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: OnDemandPageTrailerPrivacyEmbedEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: OnDemandPageTrailerPrivacyViewEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerSpatialDirectorTimeline:
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitch' }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roll' }})
    time_code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_code' }})
    yaw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yaw' }})
    
class OnDemandPageTrailerSpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class OnDemandPageTrailerSpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclass
class OnDemandPageTrailerSpatial:
    director_timeline: List[OnDemandPageTrailerSpatialDirectorTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'director_timeline' }})
    field_of_view: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field_of_view' }})
    projection: OnDemandPageTrailerSpatialProjectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projection' }})
    stereo_format: OnDemandPageTrailerSpatialStereoFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stereo_format' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerStats:
    plays: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plays' }})
    
class OnDemandPageTrailerStatusEnum(str, Enum):
    AVAILABLE = "available"
    QUOTA_EXCEEDED = "quota_exceeded"
    TOTAL_CAP_EXCEEDED = "total_cap_exceeded"
    TRANSCODE_STARTING = "transcode_starting"
    TRANSCODING = "transcoding"
    TRANSCODING_ERROR = "transcoding_error"
    UNAVAILABLE = "unavailable"
    UPLOADING = "uploading"
    UPLOADING_ERROR = "uploading_error"

class OnDemandPageTrailerTranscodeStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclass
class OnDemandPageTrailerTranscode:
    status: Optional[OnDemandPageTrailerTranscodeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class OnDemandPageTrailerUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"

class OnDemandPageTrailerUploadStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclass
class OnDemandPageTrailerUpload:
    approach: Optional[OnDemandPageTrailerUploadApproachEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approach' }})
    complete_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complete_uri' }})
    form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: OnDemandPageTrailerUploadStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    upload_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_link' }})
    
class OnDemandPageTrailerUserAccountEnum(str, Enum):
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
class OnDemandPageTrailerUserMetadataConnectionsAlbums:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsAppearances:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsBlock:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsCategories:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsFeed:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsFolders:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsFollowers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsFollowing:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsGroups:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsLikes:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsModeratedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsPictures:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsPortfolios:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsRecommendedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsRecommendedUsers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsShared:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsWatchedVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnectionsWatchlater:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataConnections:
    albums: OnDemandPageTrailerUserMetadataConnectionsAlbums = field(default=None, metadata={'dataclasses_json': { 'field_name': 'albums' }})
    appearances: OnDemandPageTrailerUserMetadataConnectionsAppearances = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appearances' }})
    block: OnDemandPageTrailerUserMetadataConnectionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    categories: OnDemandPageTrailerUserMetadataConnectionsCategories = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    channels: OnDemandPageTrailerUserMetadataConnectionsChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    feed: OnDemandPageTrailerUserMetadataConnectionsFeed = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feed' }})
    folders: OnDemandPageTrailerUserMetadataConnectionsFolders = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    followers: OnDemandPageTrailerUserMetadataConnectionsFollowers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    following: OnDemandPageTrailerUserMetadataConnectionsFollowing = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following' }})
    groups: OnDemandPageTrailerUserMetadataConnectionsGroups = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    likes: OnDemandPageTrailerUserMetadataConnectionsLikes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    moderated_channels: OnDemandPageTrailerUserMetadataConnectionsModeratedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderated_channels' }})
    pictures: OnDemandPageTrailerUserMetadataConnectionsPictures = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    portfolios: OnDemandPageTrailerUserMetadataConnectionsPortfolios = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    recommended_channels: OnDemandPageTrailerUserMetadataConnectionsRecommendedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_channels' }})
    recommended_users: OnDemandPageTrailerUserMetadataConnectionsRecommendedUsers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_users' }})
    shared: OnDemandPageTrailerUserMetadataConnectionsShared = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shared' }})
    videos: OnDemandPageTrailerUserMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    watched_videos: OnDemandPageTrailerUserMetadataConnectionsWatchedVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched_videos' }})
    watchlater: OnDemandPageTrailerUserMetadataConnectionsWatchlater = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataInteractionsBlock:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataInteractionsFollow:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataInteractionsReport:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    reason: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadataInteractions:
    add_privacy_user: Optional[OnDemandPageTrailerUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_privacy_user' }})
    block: OnDemandPageTrailerUserMetadataInteractionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    follow: OnDemandPageTrailerUserMetadataInteractionsFollow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'follow' }})
    report: OnDemandPageTrailerUserMetadataInteractionsReport = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserMetadata:
    connections: OnDemandPageTrailerUserMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: OnDemandPageTrailerUserMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    
class OnDemandPageTrailerUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class OnDemandPageTrailerUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class OnDemandPageTrailerUserPreferencesVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: Optional[OnDemandPageTrailerUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: Optional[OnDemandPageTrailerUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: Optional[OnDemandPageTrailerUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserPreferencesVideos:
    privacy: Optional[OnDemandPageTrailerUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserPreferences:
    videos: Optional[OnDemandPageTrailerUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserUploadQuotaLifetime:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserUploadQuotaPeriodic:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    reset_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset_date' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    
class OnDemandPageTrailerUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class OnDemandPageTrailerUserUploadQuotaSpace:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    showing: OnDemandPageTrailerUserUploadQuotaSpaceShowingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showing' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserUploadQuota:
    lifetime: OnDemandPageTrailerUserUploadQuotaLifetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    periodic: OnDemandPageTrailerUserUploadQuotaPeriodic = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodic' }})
    space: OnDemandPageTrailerUserUploadQuotaSpace = field(default=None, metadata={'dataclasses_json': { 'field_name': 'space' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserWebsites:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerUserUser:
    account: OnDemandPageTrailerUserAccountEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    bio: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio' }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_filter' }})
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    metadata: OnDemandPageTrailerUserMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    preferences: Optional[OnDemandPageTrailerUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferences' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    upload_quota: OnDemandPageTrailerUserUploadQuota = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_quota' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    websites: List[OnDemandPageTrailerUserWebsites] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    

@dataclass_json
@dataclass
class OnDemandPageTrailerVideo:
    categories: List[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    content_rating: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_rating' }})
    context: OnDemandPageTrailerContext = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    embed: embed_settings.EmbedSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    height: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    last_user_action_event_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_user_action_event_date' }})
    license: OnDemandPageTrailerLicenseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    metadata: OnDemandPageTrailerMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_time' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder: Optional[OnDemandPageTrailerParentFolderProject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_folder' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    privacy: OnDemandPageTrailerPrivacy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    release_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_time' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    spatial: OnDemandPageTrailerSpatial = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spatial' }})
    stats: OnDemandPageTrailerStats = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    status: OnDemandPageTrailerStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: List[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    transcode: OnDemandPageTrailerTranscode = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcode' }})
    upload: OnDemandPageTrailerUpload = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: OnDemandPageTrailerUserUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    width: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
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
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsAppearances:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsBlock:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsCategories:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsFeed:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsFolders:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsFollowers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsFollowing:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsGroups:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsLikes:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsModeratedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsPictures:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsPortfolios:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsRecommendedChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsRecommendedUsers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsShared:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsWatchedVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnectionsWatchlater:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataConnections:
    albums: OnDemandPageUserMetadataConnectionsAlbums = field(default=None, metadata={'dataclasses_json': { 'field_name': 'albums' }})
    appearances: OnDemandPageUserMetadataConnectionsAppearances = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appearances' }})
    block: OnDemandPageUserMetadataConnectionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    categories: OnDemandPageUserMetadataConnectionsCategories = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    channels: OnDemandPageUserMetadataConnectionsChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    feed: OnDemandPageUserMetadataConnectionsFeed = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feed' }})
    folders: OnDemandPageUserMetadataConnectionsFolders = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    followers: OnDemandPageUserMetadataConnectionsFollowers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    following: OnDemandPageUserMetadataConnectionsFollowing = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following' }})
    groups: OnDemandPageUserMetadataConnectionsGroups = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    likes: OnDemandPageUserMetadataConnectionsLikes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    moderated_channels: OnDemandPageUserMetadataConnectionsModeratedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderated_channels' }})
    pictures: OnDemandPageUserMetadataConnectionsPictures = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    portfolios: OnDemandPageUserMetadataConnectionsPortfolios = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    recommended_channels: OnDemandPageUserMetadataConnectionsRecommendedChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_channels' }})
    recommended_users: OnDemandPageUserMetadataConnectionsRecommendedUsers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended_users' }})
    shared: OnDemandPageUserMetadataConnectionsShared = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shared' }})
    videos: OnDemandPageUserMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    watched_videos: OnDemandPageUserMetadataConnectionsWatchedVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched_videos' }})
    watchlater: OnDemandPageUserMetadataConnectionsWatchlater = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataInteractionsAddPrivacyUser:
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataInteractionsBlock:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataInteractionsFollow:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataInteractionsReport:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    reason: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadataInteractions:
    add_privacy_user: Optional[OnDemandPageUserMetadataInteractionsAddPrivacyUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_privacy_user' }})
    block: OnDemandPageUserMetadataInteractionsBlock = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block' }})
    follow: OnDemandPageUserMetadataInteractionsFollow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'follow' }})
    report: OnDemandPageUserMetadataInteractionsReport = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserMetadata:
    connections: OnDemandPageUserMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: OnDemandPageUserMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    
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
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: Optional[OnDemandPageUserPreferencesVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: Optional[OnDemandPageUserPreferencesVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: Optional[OnDemandPageUserPreferencesVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserPreferencesVideos:
    privacy: Optional[OnDemandPageUserPreferencesVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserPreferences:
    videos: Optional[OnDemandPageUserPreferencesVideos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserUploadQuotaLifetime:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserUploadQuotaPeriodic:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    reset_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset_date' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    
class OnDemandPageUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclass
class OnDemandPageUserUploadQuotaSpace:
    free: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free' }})
    max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    showing: OnDemandPageUserUploadQuotaSpaceShowingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showing' }})
    used: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserUploadQuota:
    lifetime: OnDemandPageUserUploadQuotaLifetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    periodic: OnDemandPageUserUploadQuotaPeriodic = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodic' }})
    space: OnDemandPageUserUploadQuotaSpace = field(default=None, metadata={'dataclasses_json': { 'field_name': 'space' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserWebsites:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class OnDemandPageUserUser:
    account: OnDemandPageUserAccountEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    bio: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio' }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_filter' }})
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    metadata: OnDemandPageUserMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    preferences: Optional[OnDemandPageUserPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferences' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    upload_quota: OnDemandPageUserUploadQuota = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_quota' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    websites: List[OnDemandPageUserWebsites] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    

@dataclass_json
@dataclass
class OnDemandPage:
    background: OnDemandPageBackgroundPicture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'background' }})
    colors: OnDemandPageColors = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colors' }})
    content_rating: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_rating' }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domain_link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_link' }})
    episodes: OnDemandPageEpisodes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episodes' }})
    film: Optional[video.Video] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'film' }})
    genres: List[on_demand_genre.OnDemandGenre] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genres' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    metadata: OnDemandPageMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_time' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pictures: OnDemandPagePicturesPicture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    preorder: OnDemandPagePreorder = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preorder' }})
    published: OnDemandPagePublished = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    rating: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    subscription: OnDemandPageSubscription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    theme: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme' }})
    thumbnail: OnDemandPageThumbnailPicture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    trailer: OnDemandPageTrailerVideo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trailer' }})
    type: OnDemandPageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: OnDemandPageUserUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
