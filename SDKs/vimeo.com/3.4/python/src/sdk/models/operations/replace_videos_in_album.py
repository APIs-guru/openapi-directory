from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReplaceVideosInAlbumPathParams:
    album_id: float = field(default=None, metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReplaceVideosInAlbumRequestBody:
    videos: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass
class ReplaceVideosInAlbumSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplaceVideosInAlbumRequest:
    path_params: ReplaceVideosInAlbumPathParams = field(default=None)
    request: ReplaceVideosInAlbumRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ReplaceVideosInAlbumSecurity = field(default=None)
    

@dataclass
class ReplaceVideosInAlbumResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
