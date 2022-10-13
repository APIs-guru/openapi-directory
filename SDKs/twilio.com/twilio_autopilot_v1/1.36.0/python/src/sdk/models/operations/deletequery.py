from dataclasses import dataclass, field
from typing import Optional
DELETE_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class DeleteQueryPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteQueryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteQueryPathParams = field(default=None)
    security: DeleteQuerySecurity = field(default=None)
    

@dataclass
class DeleteQueryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
