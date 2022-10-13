from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EditVideoPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EditVideoRequestBodyEmbedButtons:
    embed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    fullscreen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullscreen' }})
    hd: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hd' }})
    like: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like' }})
    scaling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaling' }})
    share: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'share' }})
    watchlater: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class EditVideoRequestBodyEmbedLogosCustom:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    sticky: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky' }})
    

@dataclass_json
@dataclass
class EditVideoRequestBodyEmbedLogos:
    custom: Optional[EditVideoRequestBodyEmbedLogosCustom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    vimeo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vimeo' }})
    
class EditVideoRequestBodyEmbedTitleNameEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class EditVideoRequestBodyEmbedTitleOwnerEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class EditVideoRequestBodyEmbedTitlePortraitEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"


@dataclass_json
@dataclass
class EditVideoRequestBodyEmbedTitle:
    name: Optional[EditVideoRequestBodyEmbedTitleNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[EditVideoRequestBodyEmbedTitleOwnerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    portrait: Optional[EditVideoRequestBodyEmbedTitlePortraitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portrait' }})
    

@dataclass_json
@dataclass
class EditVideoRequestBodyEmbed:
    buttons: Optional[EditVideoRequestBodyEmbedButtons] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    logos: Optional[EditVideoRequestBodyEmbedLogos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logos' }})
    playbar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playbar' }})
    title: Optional[EditVideoRequestBodyEmbedTitle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    volume: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    
class EditVideoRequestBodyLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"

class EditVideoRequestBodyPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class EditVideoRequestBodyPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class EditVideoRequestBodyPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class EditVideoRequestBodyPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: Optional[EditVideoRequestBodyPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: Optional[EditVideoRequestBodyPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: Optional[EditVideoRequestBodyPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
class EditVideoRequestBodyRatingsMpaaReasonEnum(str, Enum):
    AT = "at"
    BN = "bn"
    N = "n"
    SL = "sl"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclass
class EditVideoRequestBodyRatingsMpaa:
    reason: Optional[EditVideoRequestBodyRatingsMpaaReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
class EditVideoRequestBodyRatingsTvReasonEnum(str, Enum):
    D = "d"
    FV = "fv"
    L = "l"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclass
class EditVideoRequestBodyRatingsTv:
    reason: Optional[EditVideoRequestBodyRatingsTvReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass_json
@dataclass
class EditVideoRequestBodyRatings:
    mpaa: Optional[EditVideoRequestBodyRatingsMpaa] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpaa' }})
    tv: Optional[EditVideoRequestBodyRatingsTv] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tv' }})
    

@dataclass_json
@dataclass
class EditVideoRequestBodyReviewPage:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    

@dataclass_json
@dataclass
class EditVideoRequestBodySpatialDirectorTimeline:
    pitch: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitch' }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roll' }})
    time_code: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_code' }})
    yaw: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yaw' }})
    
class EditVideoRequestBodySpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class EditVideoRequestBodySpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclass
class EditVideoRequestBodySpatial:
    director_timeline: Optional[List[EditVideoRequestBodySpatialDirectorTimeline]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'director_timeline' }})
    field_of_view: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field_of_view' }})
    projection: Optional[EditVideoRequestBodySpatialProjectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projection' }})
    stereo_format: Optional[EditVideoRequestBodySpatialStereoFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stereo_format' }})
    

@dataclass_json
@dataclass
class EditVideoRequestBody:
    content_rating: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_rating' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    embed: Optional[EditVideoRequestBodyEmbed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    license: Optional[EditVideoRequestBodyLicenseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    privacy: Optional[EditVideoRequestBodyPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    ratings: Optional[EditVideoRequestBodyRatings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratings' }})
    review_page: Optional[EditVideoRequestBodyReviewPage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_page' }})
    spatial: Optional[EditVideoRequestBodySpatial] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spatial' }})
    

@dataclass
class EditVideoSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditVideoRequest:
    path_params: EditVideoPathParams = field(default=None)
    request: EditVideoRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.video+json' }})
    security: EditVideoSecurity = field(default=None)
    

@dataclass
class EditVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
