from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlbumPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlbumRequest:
    path_params: GetAlbumPathParams = field()
    

@dataclass
class GetAlbumResponse:
    content_type: str = field()
    status_code: int = field()
    album: Optional[shared.Album] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
