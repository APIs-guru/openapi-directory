from dataclasses import dataclass, field



@dataclass
class GetMyConversationsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyConversationsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyConversationsIDRequest:
    path_params: GetMyConversationsIDPathParams = field(default=None)
    security: GetMyConversationsIDSecurity = field(default=None)
    

@dataclass
class GetMyConversationsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
