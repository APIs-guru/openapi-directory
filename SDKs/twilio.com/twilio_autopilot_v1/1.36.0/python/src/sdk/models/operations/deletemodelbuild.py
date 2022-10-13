from dataclasses import dataclass, field
from typing import Optional
DELETE_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class DeleteModelBuildPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteModelBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteModelBuildPathParams = field(default=None)
    security: DeleteModelBuildSecurity = field(default=None)
    

@dataclass
class DeleteModelBuildResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
