from dataclasses import dataclass, field



@dataclass
class GetMyOrdersBuyingUnpaidSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersBuyingUnpaidRequest:
    security: GetMyOrdersBuyingUnpaidSecurity = field(default=None)
    

@dataclass
class GetMyOrdersBuyingUnpaidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
