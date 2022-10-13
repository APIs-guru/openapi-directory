from dataclasses import dataclass, field



@dataclass
class PostMyOrdersBuyingIDMarkReceivedPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyOrdersBuyingIDMarkReceivedSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyOrdersBuyingIDMarkReceivedRequest:
    path_params: PostMyOrdersBuyingIDMarkReceivedPathParams = field(default=None)
    security: PostMyOrdersBuyingIDMarkReceivedSecurity = field(default=None)
    

@dataclass
class PostMyOrdersBuyingIDMarkReceivedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
