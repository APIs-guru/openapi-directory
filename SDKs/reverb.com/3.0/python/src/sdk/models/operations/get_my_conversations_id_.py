from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyConversationsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyConversationsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyConversationsIDRequest:
    path_params: GetMyConversationsIDPathParams = field()
    security: GetMyConversationsIDSecurity = field()
    

@dataclass
class GetMyConversationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
