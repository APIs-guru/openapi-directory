from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateOrderPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateOrderSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateOrderRequest:
    path_params: UpdateOrderPathParams = field(default=None)
    request: shared.V1UpdateOrderRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateOrderSecurity = field(default=None)
    

@dataclass
class UpdateOrderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_order: Optional[shared.V1Order] = field(default=None)
    
