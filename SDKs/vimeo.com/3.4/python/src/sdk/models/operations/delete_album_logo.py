from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAlbumLogoPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    logo_id: float = field(metadata={'path_param': { 'field_name': 'logo_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAlbumLogoSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAlbumLogoRequest:
    path_params: DeleteAlbumLogoPathParams = field()
    security: DeleteAlbumLogoSecurity = field()
    

@dataclass
class DeleteAlbumLogoResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
