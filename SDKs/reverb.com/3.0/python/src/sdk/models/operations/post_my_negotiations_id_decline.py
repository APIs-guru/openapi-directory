from dataclasses import dataclass, field



@dataclass
class PostMyNegotiationsIDDeclinePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyNegotiationsIDDeclineSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyNegotiationsIDDeclineRequest:
    path_params: PostMyNegotiationsIDDeclinePathParams = field(default=None)
    security: PostMyNegotiationsIDDeclineSecurity = field(default=None)
    

@dataclass
class PostMyNegotiationsIDDeclineResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
