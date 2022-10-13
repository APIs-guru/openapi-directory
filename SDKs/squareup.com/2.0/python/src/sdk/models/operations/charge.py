from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChargePathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChargeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ChargeRequest:
    path_params: ChargePathParams = field(default=None)
    request: shared.ChargeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ChargeSecurity = field(default=None)
    

@dataclass
class ChargeResponse:
    charge_response: Optional[shared.ChargeResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
