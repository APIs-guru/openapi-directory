from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateAlbumAlt1RequestBodyLayoutEnum(str, Enum):
    GRID = "grid"
    PLAYER = "player"

class CreateAlbumAlt1RequestBodyPrivacyEnum(str, Enum):
    ANYBODY = "anybody"
    EMBED_ONLY = "embed_only"
    PASSWORD = "password"

class CreateAlbumAlt1RequestBodySortEnum(str, Enum):
    ADDED_FIRST = "added_first"
    ADDED_LAST = "added_last"
    ALPHABETICAL = "alphabetical"
    ARRANGED = "arranged"
    COMMENTS = "comments"
    LIKES = "likes"
    NEWEST = "newest"
    OLDEST = "oldest"
    PLAYS = "plays"

class CreateAlbumAlt1RequestBodyThemeEnum(str, Enum):
    DARK = "dark"
    STANDARD = "standard"


@dataclass_json
@dataclass
class CreateAlbumAlt1RequestBody:
    brand_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand_color' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hide_nav: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hide_nav' }})
    layout: Optional[CreateAlbumAlt1RequestBodyLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    privacy: Optional[CreateAlbumAlt1RequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    review_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_mode' }})
    sort: Optional[CreateAlbumAlt1RequestBodySortEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    theme: Optional[CreateAlbumAlt1RequestBodyThemeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme' }})
    

@dataclass
class CreateAlbumAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAlbumAlt1Request:
    request: CreateAlbumAlt1RequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.album+json' }})
    security: CreateAlbumAlt1Security = field(default=None)
    

@dataclass
class CreateAlbumAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    album: Optional[shared.Album] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
