from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_UNDERSTAND_MODEL_BUILD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandModelBuildPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandModelBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUnderstandModelBuildPathParams = field(default=None)
    security: FetchUnderstandModelBuildSecurity = field(default=None)
    

@dataclass
class FetchUnderstandModelBuildResponses:
    preview_understand_assistant_model_build: Optional[shared.PreviewUnderstandAssistantModelBuild] = field(default=None)
    

@dataclass
class FetchUnderstandModelBuildResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUnderstandModelBuildResponses]] = field(default=None)
    status_code: int = field(default=None)
    
