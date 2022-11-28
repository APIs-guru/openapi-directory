from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAlbumCustomThumbnailPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    thumbnail_id: float = field(metadata={'path_param': { 'field_name': 'thumbnail_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAlbumCustomThumbnailSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAlbumCustomThumbnailRequest:
    path_params: DeleteAlbumCustomThumbnailPathParams = field()
    security: DeleteAlbumCustomThumbnailSecurity = field()
    

@dataclass
class DeleteAlbumCustomThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
