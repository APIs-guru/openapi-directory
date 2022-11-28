from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_UNDERSTAND_MODEL_BUILD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandModelBuildPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest:
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateUnderstandModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandModelBuildRequest:
    path_params: UpdateUnderstandModelBuildPathParams = field()
    security: UpdateUnderstandModelBuildSecurity = field()
    request: Optional[UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUnderstandModelBuildResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_model_build: Optional[shared.PreviewUnderstandAssistantModelBuild] = field(default=None)
    
