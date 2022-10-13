from dataclasses import dataclass, field



@dataclass
class GetShopPaymentMethodsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShopPaymentMethodsRequest:
    security: GetShopPaymentMethodsSecurity = field(default=None)
    

@dataclass
class GetShopPaymentMethodsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
