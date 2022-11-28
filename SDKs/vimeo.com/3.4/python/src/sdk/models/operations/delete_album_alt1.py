from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAlbumAlt1PathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAlbumAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAlbumAlt1Request:
    path_params: DeleteAlbumAlt1PathParams = field()
    security: DeleteAlbumAlt1Security = field()
    

@dataclass
class DeleteAlbumAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
