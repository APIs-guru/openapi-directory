from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateCheckoutPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCheckoutSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCheckoutRequest:
    path_params: CreateCheckoutPathParams = field(default=None)
    request: shared.CreateCheckoutRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCheckoutSecurity = field(default=None)
    

@dataclass
class CreateCheckoutResponse:
    content_type: str = field(default=None)
    create_checkout_response: Optional[shared.CreateCheckoutResponse] = field(default=None)
    status_code: int = field(default=None)
    
