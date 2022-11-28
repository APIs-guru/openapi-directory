from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_UNDERSTAND_MODEL_BUILD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandModelBuildPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandModelBuildRequest:
    path_params: FetchUnderstandModelBuildPathParams = field()
    security: FetchUnderstandModelBuildSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUnderstandModelBuildResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_model_build: Optional[shared.PreviewUnderstandAssistantModelBuild] = field(default=None)
    
