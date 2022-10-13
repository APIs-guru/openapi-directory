from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyEmbedButtons:
    embed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    fullscreen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullscreen' }})
    hd: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hd' }})
    like: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like' }})
    scaling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaling' }})
    share: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'share' }})
    watchlater: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyEmbedLogosCustom:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    sticky: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky' }})
    

@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyEmbedLogos:
    custom: Optional[UploadVideoAlt1RequestBodyEmbedLogosCustom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    vimeo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vimeo' }})
    
class UploadVideoAlt1RequestBodyEmbedTitleNameEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"


@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyEmbedTitle:
    name: Optional[UploadVideoAlt1RequestBodyEmbedTitleNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    portrait: Optional[UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portrait' }})
    

@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyEmbed:
    buttons: Optional[UploadVideoAlt1RequestBodyEmbedButtons] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    logos: Optional[UploadVideoAlt1RequestBodyEmbedLogos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logos' }})
    playbar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playbar' }})
    title: Optional[UploadVideoAlt1RequestBodyEmbedTitle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    volume: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    
class UploadVideoAlt1RequestBodyLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"

class UploadVideoAlt1RequestBodyPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class UploadVideoAlt1RequestBodyPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class UploadVideoAlt1RequestBodyPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: Optional[UploadVideoAlt1RequestBodyPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: Optional[UploadVideoAlt1RequestBodyPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: Optional[UploadVideoAlt1RequestBodyPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
class UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum(str, Enum):
    AT = "at"
    BN = "bn"
    N = "n"
    SL = "sl"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyRatingsMpaa:
    reason: Optional[UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
class UploadVideoAlt1RequestBodyRatingsTvReasonEnum(str, Enum):
    D = "d"
    FV = "fv"
    L = "l"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyRatingsTv:
    reason: Optional[UploadVideoAlt1RequestBodyRatingsTvReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyRatings:
    mpaa: Optional[UploadVideoAlt1RequestBodyRatingsMpaa] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpaa' }})
    tv: Optional[UploadVideoAlt1RequestBodyRatingsTv] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tv' }})
    

@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyReviewPage:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    

@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodySpatialDirectorTimeline:
    pitch: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitch' }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roll' }})
    time_code: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_code' }})
    yaw: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yaw' }})
    
class UploadVideoAlt1RequestBodySpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class UploadVideoAlt1RequestBodySpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodySpatial:
    director_timeline: Optional[List[UploadVideoAlt1RequestBodySpatialDirectorTimeline]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'director_timeline' }})
    field_of_view: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field_of_view' }})
    projection: Optional[UploadVideoAlt1RequestBodySpatialProjectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projection' }})
    stereo_format: Optional[UploadVideoAlt1RequestBodySpatialStereoFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stereo_format' }})
    
class UploadVideoAlt1RequestBodyUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"


@dataclass_json
@dataclass
class UploadVideoAlt1RequestBodyUpload:
    approach: UploadVideoAlt1RequestBodyUploadApproachEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approach' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

@dataclass_json
@dataclass
class UploadVideoAlt1RequestBody:
    content_rating: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_rating' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    embed: Optional[UploadVideoAlt1RequestBodyEmbed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    license: Optional[UploadVideoAlt1RequestBodyLicenseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    privacy: Optional[UploadVideoAlt1RequestBodyPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    ratings: Optional[UploadVideoAlt1RequestBodyRatings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratings' }})
    review_page: Optional[UploadVideoAlt1RequestBodyReviewPage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_page' }})
    spatial: Optional[UploadVideoAlt1RequestBodySpatial] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spatial' }})
    upload: UploadVideoAlt1RequestBodyUpload = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload' }})
    

@dataclass
class UploadVideoAlt1Request:
    request: UploadVideoAlt1RequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.video+json' }})
    

@dataclass
class UploadVideoAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
