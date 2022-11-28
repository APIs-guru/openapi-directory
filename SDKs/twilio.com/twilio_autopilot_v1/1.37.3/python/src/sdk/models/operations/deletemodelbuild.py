from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class DeleteModelBuildPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteModelBuildRequest:
    path_params: DeleteModelBuildPathParams = field()
    security: DeleteModelBuildSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteModelBuildResponse:
    content_type: str = field()
    status_code: int = field()
    
