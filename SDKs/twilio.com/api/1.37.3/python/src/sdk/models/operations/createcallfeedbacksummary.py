from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_CALL_FEEDBACK_SUMMARY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateCallFeedbackSummaryPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest:
    end_date: date = field(metadata={'form': { 'field_name': 'EndDate' }})
    start_date: date = field(metadata={'form': { 'field_name': 'StartDate' }})
    include_subaccounts: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'IncludeSubaccounts' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    

@dataclass
class CreateCallFeedbackSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCallFeedbackSummaryRequest:
    path_params: CreateCallFeedbackSummaryPathParams = field()
    security: CreateCallFeedbackSummarySecurity = field()
    request: Optional[CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCallFeedbackSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_call_feedback_summary: Optional[shared.APIV2010AccountCallCallFeedbackSummary] = field(default=None)
    
