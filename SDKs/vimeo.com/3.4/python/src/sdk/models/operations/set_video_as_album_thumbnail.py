from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SetVideoAsAlbumThumbnailPathParams:
    album_id: float = field(default=None, metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetVideoAsAlbumThumbnailRequestBody:
    time_code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_code' }})
    

@dataclass
class SetVideoAsAlbumThumbnailSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetVideoAsAlbumThumbnailRequest:
    path_params: SetVideoAsAlbumThumbnailPathParams = field(default=None)
    request: Optional[SetVideoAsAlbumThumbnailRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SetVideoAsAlbumThumbnailSecurity = field(default=None)
    

@dataclass
class SetVideoAsAlbumThumbnailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    album: Optional[shared.Album] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
