from dataclasses import dataclass, field



@dataclass
class GetMyOrdersBuyingIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyOrdersBuyingIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersBuyingIDRequest:
    path_params: GetMyOrdersBuyingIDPathParams = field(default=None)
    security: GetMyOrdersBuyingIDSecurity = field(default=None)
    

@dataclass
class GetMyOrdersBuyingIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
