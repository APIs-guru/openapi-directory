from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlbumCustomThumbnailPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    thumbnail_id: float = field(metadata={'path_param': { 'field_name': 'thumbnail_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlbumCustomThumbnailRequest:
    path_params: GetAlbumCustomThumbnailPathParams = field()
    

@dataclass
class GetAlbumCustomThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
