from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_UNDERSTAND_QUERY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandQueryPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandQueryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUnderstandQueryPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUnderstandQuerySecurity = field(default=None)
    

@dataclass
class CreateUnderstandQueryResponses:
    preview_understand_assistant_query: Optional[shared.PreviewUnderstandAssistantQuery] = field(default=None)
    

@dataclass
class CreateUnderstandQueryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateUnderstandQueryResponses]] = field(default=None)
    status_code: int = field(default=None)
    
