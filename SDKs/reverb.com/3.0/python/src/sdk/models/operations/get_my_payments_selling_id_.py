from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyPaymentsSellingIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyPaymentsSellingIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyPaymentsSellingIDRequest:
    path_params: GetMyPaymentsSellingIDPathParams = field()
    security: GetMyPaymentsSellingIDSecurity = field()
    

@dataclass
class GetMyPaymentsSellingIDResponse:
    content_type: str = field()
    status_code: int = field()
    
