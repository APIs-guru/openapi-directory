from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_ANNOTATION_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class UpdateAnnotationPathParams:
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAnnotationRequest:
    path_params: UpdateAnnotationPathParams = field()
    security: UpdateAnnotationSecurity = field()
    request: Optional[UpdateAnnotationUpdateAnnotationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateAnnotationResponse:
    content_type: str = field()
    status_code: int = field()
    insights_v1_call_annotation: Optional[shared.InsightsV1CallAnnotation] = field(default=None)
    
