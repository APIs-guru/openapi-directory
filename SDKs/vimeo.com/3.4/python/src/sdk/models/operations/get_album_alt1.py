from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlbumAlt1PathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlbumAlt1Request:
    path_params: GetAlbumAlt1PathParams = field()
    

@dataclass
class GetAlbumAlt1Response:
    content_type: str = field()
    status_code: int = field()
    album: Optional[shared.Album] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
