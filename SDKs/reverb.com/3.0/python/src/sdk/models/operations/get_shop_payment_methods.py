from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetShopPaymentMethodsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShopPaymentMethodsRequest:
    security: GetShopPaymentMethodsSecurity = field()
    

@dataclass
class GetShopPaymentMethodsResponse:
    content_type: str = field()
    status_code: int = field()
    
