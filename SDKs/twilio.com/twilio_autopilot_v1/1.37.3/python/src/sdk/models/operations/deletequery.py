from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class DeleteQueryPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteQueryRequest:
    path_params: DeleteQueryPathParams = field()
    security: DeleteQuerySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteQueryResponse:
    content_type: str = field()
    status_code: int = field()
    
