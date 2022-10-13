from dataclasses import dataclass, field



@dataclass
class GetMyOrdersSellingUnpaidSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersSellingUnpaidRequest:
    security: GetMyOrdersSellingUnpaidSecurity = field(default=None)
    

@dataclass
class GetMyOrdersSellingUnpaidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
