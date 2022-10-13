from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_ANNOTATION_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class UpdateAnnotationPathParams:
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAnnotationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAnnotationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateAnnotationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateAnnotationSecurity = field(default=None)
    

@dataclass
class UpdateAnnotationResponses:
    insights_v1_call_annotation: Optional[shared.InsightsV1CallAnnotation] = field(default=None)
    

@dataclass
class UpdateAnnotationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateAnnotationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
