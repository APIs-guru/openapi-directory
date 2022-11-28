from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateVideoCustomLogoPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVideoCustomLogoSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateVideoCustomLogoRequest:
    path_params: CreateVideoCustomLogoPathParams = field()
    security: CreateVideoCustomLogoSecurity = field()
    

@dataclass
class CreateVideoCustomLogoResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
