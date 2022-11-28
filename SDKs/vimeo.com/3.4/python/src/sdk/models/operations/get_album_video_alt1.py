from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlbumVideoAlt1PathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlbumVideoAlt1QueryParams:
    password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlbumVideoAlt1Request:
    path_params: GetAlbumVideoAlt1PathParams = field()
    query_params: GetAlbumVideoAlt1QueryParams = field()
    

@dataclass
class GetAlbumVideoAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
