from dataclasses import dataclass, field



@dataclass
class GetMyNegotiationsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyNegotiationsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyNegotiationsIDRequest:
    path_params: GetMyNegotiationsIDPathParams = field(default=None)
    security: GetMyNegotiationsIDSecurity = field(default=None)
    

@dataclass
class GetMyNegotiationsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
