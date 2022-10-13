from dataclasses import dataclass, field



@dataclass
class GetSalesSellerSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSalesSellerRequest:
    security: GetSalesSellerSecurity = field(default=None)
    

@dataclass
class GetSalesSellerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
