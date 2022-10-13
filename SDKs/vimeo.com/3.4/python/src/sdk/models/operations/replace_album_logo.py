from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReplaceAlbumLogoPathParams:
    album_id: float = field(default=None, metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    logo_id: float = field(default=None, metadata={'path_param': { 'field_name': 'logo_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReplaceAlbumLogoRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    

@dataclass
class ReplaceAlbumLogoSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplaceAlbumLogoRequest:
    path_params: ReplaceAlbumLogoPathParams = field(default=None)
    request: Optional[ReplaceAlbumLogoRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.picture+json' }})
    security: ReplaceAlbumLogoSecurity = field(default=None)
    

@dataclass
class ReplaceAlbumLogoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
