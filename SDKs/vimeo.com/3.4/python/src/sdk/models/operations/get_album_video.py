from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlbumVideoPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlbumVideoQueryParams:
    password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlbumVideoRequest:
    path_params: GetAlbumVideoPathParams = field()
    query_params: GetAlbumVideoQueryParams = field()
    

@dataclass
class GetAlbumVideoResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
