from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_UNDERSTAND_QUERY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandQueryPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandQueryCreateUnderstandQueryRequest:
    language: str = field(metadata={'form': { 'field_name': 'Language' }})
    query: str = field(metadata={'form': { 'field_name': 'Query' }})
    field: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Field' }})
    model_build: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ModelBuild' }})
    tasks: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Tasks' }})
    

@dataclass
class CreateUnderstandQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandQueryRequest:
    path_params: CreateUnderstandQueryPathParams = field()
    security: CreateUnderstandQuerySecurity = field()
    request: Optional[CreateUnderstandQueryCreateUnderstandQueryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUnderstandQueryResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_query: Optional[shared.PreviewUnderstandAssistantQuery] = field(default=None)
    
