from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutMyRefundRequestsSellingIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutMyRefundRequestsSellingIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyRefundRequestsSellingIDRequest:
    path_params: PutMyRefundRequestsSellingIDPathParams = field()
    security: PutMyRefundRequestsSellingIDSecurity = field()
    

@dataclass
class PutMyRefundRequestsSellingIDResponse:
    content_type: str = field()
    status_code: int = field()
    
