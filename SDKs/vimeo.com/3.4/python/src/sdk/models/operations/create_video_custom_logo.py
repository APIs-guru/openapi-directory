from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateVideoCustomLogoPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVideoCustomLogoSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateVideoCustomLogoRequest:
    path_params: CreateVideoCustomLogoPathParams = field(default=None)
    security: CreateVideoCustomLogoSecurity = field(default=None)
    

@dataclass
class CreateVideoCustomLogoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
