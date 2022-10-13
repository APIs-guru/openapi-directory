from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EditAlbumPathParams:
    album_id: float = field(default=None, metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class EditAlbumRequestBodyLayoutEnum(str, Enum):
    GRID = "grid"
    PLAYER = "player"

class EditAlbumRequestBodyPrivacyEnum(str, Enum):
    ANYBODY = "anybody"
    EMBED_ONLY = "embed_only"
    PASSWORD = "password"

class EditAlbumRequestBodySortEnum(str, Enum):
    ADDED_FIRST = "added_first"
    ADDED_LAST = "added_last"
    ALPHABETICAL = "alphabetical"
    ARRANGED = "arranged"
    COMMENTS = "comments"
    LIKES = "likes"
    NEWEST = "newest"
    OLDEST = "oldest"
    PLAYS = "plays"

class EditAlbumRequestBodyThemeEnum(str, Enum):
    DARK = "dark"
    STANDARD = "standard"


@dataclass_json
@dataclass
class EditAlbumRequestBody:
    brand_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand_color' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    hide_nav: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hide_nav' }})
    layout: Optional[EditAlbumRequestBodyLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    privacy: Optional[EditAlbumRequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    review_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_mode' }})
    sort: Optional[EditAlbumRequestBodySortEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    theme: Optional[EditAlbumRequestBodyThemeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    use_custom_domain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_custom_domain' }})
    

@dataclass
class EditAlbumSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditAlbumRequest:
    path_params: EditAlbumPathParams = field(default=None)
    request: Optional[EditAlbumRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.album+json' }})
    security: EditAlbumSecurity = field(default=None)
    

@dataclass
class EditAlbumResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    album: Optional[shared.Album] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
