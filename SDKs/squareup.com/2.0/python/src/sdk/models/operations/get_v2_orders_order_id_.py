from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV2OrdersOrderIDPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV2OrdersOrderIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV2OrdersOrderIDRequest:
    path_params: GetV2OrdersOrderIDPathParams = field(default=None)
    security: GetV2OrdersOrderIDSecurity = field(default=None)
    

@dataclass
class GetV2OrdersOrderIDResponse:
    content_type: str = field(default=None)
    retrieve_order_response: Optional[shared.RetrieveOrderResponse] = field(default=None)
    status_code: int = field(default=None)
    
