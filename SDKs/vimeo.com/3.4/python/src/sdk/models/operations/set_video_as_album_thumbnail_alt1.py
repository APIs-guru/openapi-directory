from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SetVideoAsAlbumThumbnailAlt1PathParams:
    album_id: float = field(default=None, metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetVideoAsAlbumThumbnailAlt1RequestBody:
    time_code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_code' }})
    

@dataclass
class SetVideoAsAlbumThumbnailAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetVideoAsAlbumThumbnailAlt1Request:
    path_params: SetVideoAsAlbumThumbnailAlt1PathParams = field(default=None)
    request: Optional[SetVideoAsAlbumThumbnailAlt1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SetVideoAsAlbumThumbnailAlt1Security = field(default=None)
    

@dataclass
class SetVideoAsAlbumThumbnailAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    album: Optional[shared.Album] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
