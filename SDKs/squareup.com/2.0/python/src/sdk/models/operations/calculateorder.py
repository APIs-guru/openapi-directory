from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CalculateOrderSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalculateOrderRequest:
    request: shared.CalculateOrderRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CalculateOrderSecurity = field(default=None)
    

@dataclass
class CalculateOrderResponse:
    calculate_order_response: Optional[shared.CalculateOrderResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
