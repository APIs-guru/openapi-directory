from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCustomLogoPathParams:
    logo_id: float = field(metadata={'path_param': { 'field_name': 'logo_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomLogoRequest:
    path_params: GetCustomLogoPathParams = field()
    

@dataclass
class GetCustomLogoResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
