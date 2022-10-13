from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutV2OrdersOrderIDPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutV2OrdersOrderIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutV2OrdersOrderIDRequest:
    path_params: PutV2OrdersOrderIDPathParams = field(default=None)
    request: shared.UpdateOrderRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutV2OrdersOrderIDSecurity = field(default=None)
    

@dataclass
class PutV2OrdersOrderIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_order_response: Optional[shared.UpdateOrderResponse] = field(default=None)
    
