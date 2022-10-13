from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReplaceVideosInAlbumAlt1PathParams:
    album_id: float = field(default=None, metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReplaceVideosInAlbumAlt1RequestBody:
    videos: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass
class ReplaceVideosInAlbumAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplaceVideosInAlbumAlt1Request:
    path_params: ReplaceVideosInAlbumAlt1PathParams = field(default=None)
    request: ReplaceVideosInAlbumAlt1RequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ReplaceVideosInAlbumAlt1Security = field(default=None)
    

@dataclass
class ReplaceVideosInAlbumAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
