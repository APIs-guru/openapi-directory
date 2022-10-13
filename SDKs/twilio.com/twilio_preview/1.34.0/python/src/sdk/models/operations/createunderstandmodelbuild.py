from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_UNDERSTAND_MODEL_BUILD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandModelBuildPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandModelBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUnderstandModelBuildPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUnderstandModelBuildSecurity = field(default=None)
    

@dataclass
class CreateUnderstandModelBuildResponses:
    preview_understand_assistant_model_build: Optional[shared.PreviewUnderstandAssistantModelBuild] = field(default=None)
    

@dataclass
class CreateUnderstandModelBuildResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateUnderstandModelBuildResponses]] = field(default=None)
    status_code: int = field(default=None)
    
