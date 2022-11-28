from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAlbumCustomThumbPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAlbumCustomThumbSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAlbumCustomThumbRequest:
    path_params: CreateAlbumCustomThumbPathParams = field()
    security: CreateAlbumCustomThumbSecurity = field()
    

@dataclass
class CreateAlbumCustomThumbResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
