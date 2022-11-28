from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVideoToAlbumAlt1PathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoToAlbumAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoToAlbumAlt1Request:
    path_params: AddVideoToAlbumAlt1PathParams = field()
    security: AddVideoToAlbumAlt1Security = field()
    

@dataclass
class AddVideoToAlbumAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
