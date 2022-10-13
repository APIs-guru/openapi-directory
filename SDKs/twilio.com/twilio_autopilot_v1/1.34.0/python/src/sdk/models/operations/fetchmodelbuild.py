from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchModelBuildPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchModelBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchModelBuildPathParams = field(default=None)
    security: FetchModelBuildSecurity = field(default=None)
    

@dataclass
class FetchModelBuildResponses:
    autopilot_v1_assistant_model_build: Optional[shared.AutopilotV1AssistantModelBuild] = field(default=None)
    

@dataclass
class FetchModelBuildResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchModelBuildResponses]] = field(default=None)
    status_code: int = field(default=None)
    
