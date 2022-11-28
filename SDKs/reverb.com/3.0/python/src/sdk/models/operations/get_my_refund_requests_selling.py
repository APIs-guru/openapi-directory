from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyRefundRequestsSellingSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyRefundRequestsSellingRequest:
    security: GetMyRefundRequestsSellingSecurity = field()
    

@dataclass
class GetMyRefundRequestsSellingResponse:
    content_type: str = field()
    status_code: int = field()
    
