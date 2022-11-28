from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReplaceVideosInAlbumAlt1PathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReplaceVideosInAlbumAlt1RequestBody:
    videos: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass
class ReplaceVideosInAlbumAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplaceVideosInAlbumAlt1Request:
    path_params: ReplaceVideosInAlbumAlt1PathParams = field()
    request: ReplaceVideosInAlbumAlt1RequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ReplaceVideosInAlbumAlt1Security = field()
    

@dataclass
class ReplaceVideosInAlbumAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
