from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyOrdersBuyingUnpaidSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersBuyingUnpaidRequest:
    security: GetMyOrdersBuyingUnpaidSecurity = field()
    

@dataclass
class GetMyOrdersBuyingUnpaidResponse:
    content_type: str = field()
    status_code: int = field()
    
