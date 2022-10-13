from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateModelBuildPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateModelBuildRequestBodyCreateModelBuildRequest:
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateModelBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateModelBuildPathParams = field(default=None)
    request: Optional[CreateModelBuildRequestBodyCreateModelBuildRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateModelBuildSecurity = field(default=None)
    

@dataclass
class CreateModelBuildResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_model_build: Optional[shared.AutopilotV1AssistantModelBuild] = field(default=None)
    
