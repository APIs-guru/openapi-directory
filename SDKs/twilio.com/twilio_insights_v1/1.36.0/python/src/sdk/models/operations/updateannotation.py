from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_ANNOTATION_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class UpdateAnnotationPathParams:
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAnnotationUpdateAnnotationRequest:
    answered_by: Optional[shared.AnnotationEnumAnsweredByEnum] = field(default=None, metadata={'form': { 'field_name': 'AnsweredBy' }})
    call_score: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CallScore' }})
    comment: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Comment' }})
    connectivity_issue: Optional[shared.AnnotationEnumConnectivityIssueEnum] = field(default=None, metadata={'form': { 'field_name': 'ConnectivityIssue' }})
    incident: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Incident' }})
    quality_issues: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'QualityIssues' }})
    spam: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Spam' }})
    

@dataclass
class UpdateAnnotationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAnnotationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateAnnotationPathParams = field(default=None)
    request: Optional[UpdateAnnotationUpdateAnnotationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateAnnotationSecurity = field(default=None)
    

@dataclass
class UpdateAnnotationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    insights_v1_call_annotation: Optional[shared.InsightsV1CallAnnotation] = field(default=None)
    
