from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateQueryPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateQueryCreateQueryRequest:
    language: str = field(metadata={'form': { 'field_name': 'Language' }})
    query: str = field(metadata={'form': { 'field_name': 'Query' }})
    model_build: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ModelBuild' }})
    tasks: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Tasks' }})
    

@dataclass
class CreateQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateQueryRequest:
    path_params: CreateQueryPathParams = field()
    security: CreateQuerySecurity = field()
    request: Optional[CreateQueryCreateQueryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateQueryResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_query: Optional[shared.AutopilotV1AssistantQuery] = field(default=None)
    
