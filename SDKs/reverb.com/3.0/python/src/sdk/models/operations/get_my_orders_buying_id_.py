from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyOrdersBuyingIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyOrdersBuyingIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersBuyingIDRequest:
    path_params: GetMyOrdersBuyingIDPathParams = field()
    security: GetMyOrdersBuyingIDSecurity = field()
    

@dataclass
class GetMyOrdersBuyingIDResponse:
    content_type: str = field()
    status_code: int = field()
    
