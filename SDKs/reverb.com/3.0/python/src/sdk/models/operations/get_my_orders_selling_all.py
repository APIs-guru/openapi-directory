from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyOrdersSellingAllSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersSellingAllRequest:
    security: GetMyOrdersSellingAllSecurity = field()
    

@dataclass
class GetMyOrdersSellingAllResponse:
    content_type: str = field()
    status_code: int = field()
    
