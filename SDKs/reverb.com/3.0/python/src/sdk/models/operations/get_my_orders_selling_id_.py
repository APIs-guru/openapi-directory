from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyOrdersSellingIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyOrdersSellingIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersSellingIDRequest:
    path_params: GetMyOrdersSellingIDPathParams = field()
    security: GetMyOrdersSellingIDSecurity = field()
    

@dataclass
class GetMyOrdersSellingIDResponse:
    content_type: str = field()
    status_code: int = field()
    
