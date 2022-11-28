from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyOrdersBuyingAllSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersBuyingAllRequest:
    security: GetMyOrdersBuyingAllSecurity = field()
    

@dataclass
class GetMyOrdersBuyingAllResponse:
    content_type: str = field()
    status_code: int = field()
    
