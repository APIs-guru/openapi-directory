from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyOrdersSellingAwaitingShipmentSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersSellingAwaitingShipmentRequest:
    security: GetMyOrdersSellingAwaitingShipmentSecurity = field()
    

@dataclass
class GetMyOrdersSellingAwaitingShipmentResponse:
    content_type: str = field()
    status_code: int = field()
    
