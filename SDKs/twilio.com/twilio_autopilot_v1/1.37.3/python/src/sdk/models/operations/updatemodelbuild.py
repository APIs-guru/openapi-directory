from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateModelBuildPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateModelBuildUpdateModelBuildRequest:
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateModelBuildRequest:
    path_params: UpdateModelBuildPathParams = field()
    security: UpdateModelBuildSecurity = field()
    request: Optional[UpdateModelBuildUpdateModelBuildRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateModelBuildResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_model_build: Optional[shared.AutopilotV1AssistantModelBuild] = field(default=None)
    
