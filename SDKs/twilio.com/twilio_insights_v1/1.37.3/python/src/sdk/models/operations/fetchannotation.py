from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ANNOTATION_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class FetchAnnotationPathParams:
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAnnotationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAnnotationRequest:
    path_params: FetchAnnotationPathParams = field()
    security: FetchAnnotationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchAnnotationResponse:
    content_type: str = field()
    status_code: int = field()
    insights_v1_call_annotation: Optional[shared.InsightsV1CallAnnotation] = field(default=None)
    
