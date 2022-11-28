from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


FETCH_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class FetchSummaryPathParams:
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSummaryQueryParams:
    processing_state: Optional[shared.SummaryEnumProcessingStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ProcessingState', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSummaryRequest:
    path_params: FetchSummaryPathParams = field()
    query_params: FetchSummaryQueryParams = field()
    security: FetchSummarySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    insights_v1_call_summary: Optional[shared.InsightsV1CallSummary] = field(default=None)
    
