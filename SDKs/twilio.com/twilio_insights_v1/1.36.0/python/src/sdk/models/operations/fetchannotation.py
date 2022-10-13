from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ANNOTATION_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class FetchAnnotationPathParams:
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAnnotationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAnnotationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchAnnotationPathParams = field(default=None)
    security: FetchAnnotationSecurity = field(default=None)
    

@dataclass
class FetchAnnotationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    insights_v1_call_annotation: Optional[shared.InsightsV1CallAnnotation] = field(default=None)
    
