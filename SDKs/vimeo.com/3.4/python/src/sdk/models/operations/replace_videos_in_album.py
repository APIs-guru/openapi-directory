from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReplaceVideosInAlbumPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReplaceVideosInAlbumRequestBody:
    videos: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass
class ReplaceVideosInAlbumSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplaceVideosInAlbumRequest:
    path_params: ReplaceVideosInAlbumPathParams = field()
    request: ReplaceVideosInAlbumRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ReplaceVideosInAlbumSecurity = field()
    

@dataclass
class ReplaceVideosInAlbumResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
