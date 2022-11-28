from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_UNDERSTAND_MODEL_BUILD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandModelBuildPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandModelBuildCreateUnderstandModelBuildRequest:
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateUnderstandModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandModelBuildRequest:
    path_params: CreateUnderstandModelBuildPathParams = field()
    security: CreateUnderstandModelBuildSecurity = field()
    request: Optional[CreateUnderstandModelBuildCreateUnderstandModelBuildRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUnderstandModelBuildResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_model_build: Optional[shared.PreviewUnderstandAssistantModelBuild] = field(default=None)
    
