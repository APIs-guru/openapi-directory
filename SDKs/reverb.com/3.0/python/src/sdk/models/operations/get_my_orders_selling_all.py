from dataclasses import dataclass, field



@dataclass
class GetMyOrdersSellingAllSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersSellingAllRequest:
    security: GetMyOrdersSellingAllSecurity = field(default=None)
    

@dataclass
class GetMyOrdersSellingAllResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
