from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SetVideoAsAlbumThumbnailPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetVideoAsAlbumThumbnailRequestBody:
    time_code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    

@dataclass
class SetVideoAsAlbumThumbnailSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetVideoAsAlbumThumbnailRequest:
    path_params: SetVideoAsAlbumThumbnailPathParams = field()
    security: SetVideoAsAlbumThumbnailSecurity = field()
    request: Optional[SetVideoAsAlbumThumbnailRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetVideoAsAlbumThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    album: Optional[shared.Album] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
