from dataclasses import dataclass, field



@dataclass
class PutMyRefundRequestsSellingIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutMyRefundRequestsSellingIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyRefundRequestsSellingIDRequest:
    path_params: PutMyRefundRequestsSellingIDPathParams = field(default=None)
    security: PutMyRefundRequestsSellingIDSecurity = field(default=None)
    

@dataclass
class PutMyRefundRequestsSellingIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
