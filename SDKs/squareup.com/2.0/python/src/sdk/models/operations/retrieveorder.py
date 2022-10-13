from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveOrderPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveOrderSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveOrderRequest:
    path_params: RetrieveOrderPathParams = field(default=None)
    security: RetrieveOrderSecurity = field(default=None)
    

@dataclass
class RetrieveOrderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_order: Optional[shared.V1Order] = field(default=None)
    
