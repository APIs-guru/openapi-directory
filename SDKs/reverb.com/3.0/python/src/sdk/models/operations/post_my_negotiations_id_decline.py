from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyNegotiationsIDDeclinePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyNegotiationsIDDeclineSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyNegotiationsIDDeclineRequest:
    path_params: PostMyNegotiationsIDDeclinePathParams = field()
    security: PostMyNegotiationsIDDeclineSecurity = field()
    

@dataclass
class PostMyNegotiationsIDDeclineResponse:
    content_type: str = field()
    status_code: int = field()
    
