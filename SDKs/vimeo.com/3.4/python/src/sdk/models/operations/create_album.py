from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAlbumPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class CreateAlbumRequestBodyLayoutEnum(str, Enum):
    GRID = "grid"
    PLAYER = "player"

class CreateAlbumRequestBodyPrivacyEnum(str, Enum):
    ANYBODY = "anybody"
    EMBED_ONLY = "embed_only"
    PASSWORD = "password"

class CreateAlbumRequestBodySortEnum(str, Enum):
    ADDED_FIRST = "added_first"
    ADDED_LAST = "added_last"
    ALPHABETICAL = "alphabetical"
    ARRANGED = "arranged"
    COMMENTS = "comments"
    LIKES = "likes"
    NEWEST = "newest"
    OLDEST = "oldest"
    PLAYS = "plays"

class CreateAlbumRequestBodyThemeEnum(str, Enum):
    DARK = "dark"
    STANDARD = "standard"


@dataclass_json
@dataclass
class CreateAlbumRequestBody:
    brand_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand_color' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hide_nav: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hide_nav' }})
    layout: Optional[CreateAlbumRequestBodyLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    privacy: Optional[CreateAlbumRequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    review_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_mode' }})
    sort: Optional[CreateAlbumRequestBodySortEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    theme: Optional[CreateAlbumRequestBodyThemeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme' }})
    

@dataclass
class CreateAlbumSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAlbumRequest:
    path_params: CreateAlbumPathParams = field(default=None)
    request: CreateAlbumRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.album+json' }})
    security: CreateAlbumSecurity = field(default=None)
    

@dataclass
class CreateAlbumResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    album: Optional[shared.Album] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
