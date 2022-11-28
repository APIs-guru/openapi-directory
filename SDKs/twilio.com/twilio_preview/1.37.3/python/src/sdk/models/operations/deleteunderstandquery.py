from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_UNDERSTAND_QUERY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandQueryPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandQueryRequest:
    path_params: DeleteUnderstandQueryPathParams = field()
    security: DeleteUnderstandQuerySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUnderstandQueryResponse:
    content_type: str = field()
    status_code: int = field()
    
