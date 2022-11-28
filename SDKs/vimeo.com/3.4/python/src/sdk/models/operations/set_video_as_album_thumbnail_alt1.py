from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SetVideoAsAlbumThumbnailAlt1PathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetVideoAsAlbumThumbnailAlt1RequestBody:
    time_code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    

@dataclass
class SetVideoAsAlbumThumbnailAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetVideoAsAlbumThumbnailAlt1Request:
    path_params: SetVideoAsAlbumThumbnailAlt1PathParams = field()
    security: SetVideoAsAlbumThumbnailAlt1Security = field()
    request: Optional[SetVideoAsAlbumThumbnailAlt1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetVideoAsAlbumThumbnailAlt1Response:
    content_type: str = field()
    status_code: int = field()
    album: Optional[shared.Album] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
