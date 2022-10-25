from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
CREATE_CALL_FEEDBACK_SUMMARY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateCallFeedbackSummaryPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest:
    end_date: datetime = field(default=None, metadata={'form': { 'field_name': 'EndDate' }})
    include_subaccounts: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'IncludeSubaccounts' }})
    start_date: datetime = field(default=None, metadata={'form': { 'field_name': 'StartDate' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    

@dataclass
class CreateCallFeedbackSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCallFeedbackSummaryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateCallFeedbackSummaryPathParams = field(default=None)
    request: Optional[CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCallFeedbackSummarySecurity = field(default=None)
    

@dataclass
class CreateCallFeedbackSummaryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_call_call_feedback_summary: Optional[shared.APIV2010AccountCallCallFeedbackSummary] = field(default=None)
    
