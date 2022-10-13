from dataclasses import dataclass, field



@dataclass
class DeleteConnectionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConnectionSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteConnectionRequest:
    path_params: DeleteConnectionPathParams = field(default=None)
    security: DeleteConnectionSecurity = field(default=None)
    

@dataclass
class DeleteConnectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
