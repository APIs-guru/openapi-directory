from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_UNDERSTAND_MODEL_BUILD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandModelBuildPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandModelBuildRequestBodyUpdateUnderstandModelBuildRequest:
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateUnderstandModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandModelBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandModelBuildPathParams = field(default=None)
    request: Optional[UpdateUnderstandModelBuildRequestBodyUpdateUnderstandModelBuildRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandModelBuildSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandModelBuildResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_understand_assistant_model_build: Optional[shared.PreviewUnderstandAssistantModelBuild] = field(default=None)
    
