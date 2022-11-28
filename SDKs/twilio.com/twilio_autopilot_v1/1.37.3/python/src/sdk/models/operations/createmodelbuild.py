from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateModelBuildPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateModelBuildCreateModelBuildRequest:
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateModelBuildRequest:
    path_params: CreateModelBuildPathParams = field()
    security: CreateModelBuildSecurity = field()
    request: Optional[CreateModelBuildCreateModelBuildRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateModelBuildResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_model_build: Optional[shared.AutopilotV1AssistantModelBuild] = field(default=None)
    
