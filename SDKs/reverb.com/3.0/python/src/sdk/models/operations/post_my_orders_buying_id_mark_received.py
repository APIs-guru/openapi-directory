from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyOrdersBuyingIDMarkReceivedPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyOrdersBuyingIDMarkReceivedSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyOrdersBuyingIDMarkReceivedRequest:
    path_params: PostMyOrdersBuyingIDMarkReceivedPathParams = field()
    security: PostMyOrdersBuyingIDMarkReceivedSecurity = field()
    

@dataclass
class PostMyOrdersBuyingIDMarkReceivedResponse:
    content_type: str = field()
    status_code: int = field()
    
