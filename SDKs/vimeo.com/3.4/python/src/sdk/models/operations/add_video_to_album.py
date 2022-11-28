from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVideoToAlbumPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoToAlbumSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoToAlbumRequest:
    path_params: AddVideoToAlbumPathParams = field()
    security: AddVideoToAlbumSecurity = field()
    

@dataclass
class AddVideoToAlbumResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
