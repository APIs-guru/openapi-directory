from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateCustomLogoPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCustomLogoSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCustomLogoRequest:
    path_params: CreateCustomLogoPathParams = field()
    security: CreateCustomLogoSecurity = field()
    

@dataclass
class CreateCustomLogoResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
