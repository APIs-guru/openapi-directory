from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateVodBackgroundPathParams:
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVodBackgroundSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateVodBackgroundRequest:
    path_params: CreateVodBackgroundPathParams = field(default=None)
    security: CreateVodBackgroundSecurity = field(default=None)
    

@dataclass
class CreateVodBackgroundResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
