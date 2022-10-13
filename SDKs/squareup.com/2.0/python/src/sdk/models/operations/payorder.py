from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PayOrderPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayOrderSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PayOrderRequest:
    path_params: PayOrderPathParams = field(default=None)
    request: shared.PayOrderRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PayOrderSecurity = field(default=None)
    

@dataclass
class PayOrderResponse:
    content_type: str = field(default=None)
    pay_order_response: Optional[shared.PayOrderResponse] = field(default=None)
    status_code: int = field(default=None)
    
