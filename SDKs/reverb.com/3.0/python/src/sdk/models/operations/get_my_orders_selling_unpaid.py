from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyOrdersSellingUnpaidSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersSellingUnpaidRequest:
    security: GetMyOrdersSellingUnpaidSecurity = field()
    

@dataclass
class GetMyOrdersSellingUnpaidResponse:
    content_type: str = field()
    status_code: int = field()
    
