from dataclasses import dataclass, field



@dataclass
class GetMyRefundRequestsSellingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyRefundRequestsSellingRequest:
    security: GetMyRefundRequestsSellingSecurity = field(default=None)
    

@dataclass
class GetMyRefundRequestsSellingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
