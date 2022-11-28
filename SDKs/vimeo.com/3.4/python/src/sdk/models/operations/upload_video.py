from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UploadVideoPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UploadVideoRequestBodyEmbedButtons:
    embed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    fullscreen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullscreen') }})
    hd: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd') }})
    like: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    scaling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaling') }})
    share: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    watchlater: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclass
class UploadVideoRequestBodyEmbedLogosCustom:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    sticky: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky') }})
    

@dataclass_json
@dataclass
class UploadVideoRequestBodyEmbedLogos:
    custom: Optional[UploadVideoRequestBodyEmbedLogosCustom] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    vimeo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vimeo') }})
    
class UploadVideoRequestBodyEmbedTitleNameEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class UploadVideoRequestBodyEmbedTitleOwnerEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class UploadVideoRequestBodyEmbedTitlePortraitEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"


@dataclass_json
@dataclass
class UploadVideoRequestBodyEmbedTitle:
    name: Optional[UploadVideoRequestBodyEmbedTitleNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[UploadVideoRequestBodyEmbedTitleOwnerEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    portrait: Optional[UploadVideoRequestBodyEmbedTitlePortraitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portrait') }})
    

@dataclass_json
@dataclass
class UploadVideoRequestBodyEmbed:
    buttons: Optional[UploadVideoRequestBodyEmbedButtons] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    logos: Optional[UploadVideoRequestBodyEmbedLogos] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logos') }})
    playbar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playbar') }})
    title: Optional[UploadVideoRequestBodyEmbedTitle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    volume: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
class UploadVideoRequestBodyLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"

class UploadVideoRequestBodyPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class UploadVideoRequestBodyPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class UploadVideoRequestBodyPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class UploadVideoRequestBodyPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[UploadVideoRequestBodyPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[UploadVideoRequestBodyPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[UploadVideoRequestBodyPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
class UploadVideoRequestBodyRatingsMpaaReasonEnum(str, Enum):
    AT = "at"
    BN = "bn"
    N = "n"
    SL = "sl"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclass
class UploadVideoRequestBodyRatingsMpaa:
    reason: Optional[UploadVideoRequestBodyRatingsMpaaReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
class UploadVideoRequestBodyRatingsTvReasonEnum(str, Enum):
    D = "d"
    FV = "fv"
    L = "l"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclass
class UploadVideoRequestBodyRatingsTv:
    reason: Optional[UploadVideoRequestBodyRatingsTvReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class UploadVideoRequestBodyRatings:
    mpaa: Optional[UploadVideoRequestBodyRatingsMpaa] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mpaa') }})
    tv: Optional[UploadVideoRequestBodyRatingsTv] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tv') }})
    

@dataclass_json
@dataclass
class UploadVideoRequestBodyReviewPage:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclass_json
@dataclass
class UploadVideoRequestBodySpatialDirectorTimeline:
    pitch: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    time_code: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    yaw: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaw') }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roll') }})
    
class UploadVideoRequestBodySpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class UploadVideoRequestBodySpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclass
class UploadVideoRequestBodySpatial:
    director_timeline: Optional[List[UploadVideoRequestBodySpatialDirectorTimeline]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('director_timeline') }})
    field_of_view: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_of_view') }})
    projection: Optional[UploadVideoRequestBodySpatialProjectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    stereo_format: Optional[UploadVideoRequestBodySpatialStereoFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_format') }})
    
class UploadVideoRequestBodyUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"


@dataclass_json
@dataclass
class UploadVideoRequestBodyUpload:
    approach: UploadVideoRequestBodyUploadApproachEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclass
class UploadVideoRequestBody:
    upload: UploadVideoRequestBodyUpload = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    content_rating: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    embed: Optional[UploadVideoRequestBodyEmbed] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    license: Optional[UploadVideoRequestBodyLicenseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    privacy: Optional[UploadVideoRequestBodyPrivacy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    ratings: Optional[UploadVideoRequestBodyRatings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratings') }})
    review_page: Optional[UploadVideoRequestBodyReviewPage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_page') }})
    spatial: Optional[UploadVideoRequestBodySpatial] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatial') }})
    

@dataclass
class UploadVideoRequest:
    path_params: UploadVideoPathParams = field()
    request: UploadVideoRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.video+json' }})
    

@dataclass
class UploadVideoResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
