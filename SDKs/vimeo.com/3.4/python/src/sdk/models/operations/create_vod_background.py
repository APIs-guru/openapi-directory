from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateVodBackgroundPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVodBackgroundSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateVodBackgroundRequest:
    path_params: CreateVodBackgroundPathParams = field()
    security: CreateVodBackgroundSecurity = field()
    

@dataclass
class CreateVodBackgroundResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
