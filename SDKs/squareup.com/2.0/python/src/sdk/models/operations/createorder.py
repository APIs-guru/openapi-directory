from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateOrderSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateOrderRequest:
    request: shared.CreateOrderRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateOrderSecurity = field(default=None)
    

@dataclass
class CreateOrderResponse:
    content_type: str = field(default=None)
    create_order_response: Optional[shared.CreateOrderResponse] = field(default=None)
    status_code: int = field(default=None)
    
