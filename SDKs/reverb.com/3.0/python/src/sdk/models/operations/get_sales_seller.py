from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetSalesSellerSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSalesSellerRequest:
    security: GetSalesSellerSecurity = field()
    

@dataclass
class GetSalesSellerResponse:
    content_type: str = field()
    status_code: int = field()
    
