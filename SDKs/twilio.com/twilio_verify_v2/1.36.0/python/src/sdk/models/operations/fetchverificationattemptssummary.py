from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
FETCH_VERIFICATION_ATTEMPTS_SUMMARY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchVerificationAttemptsSummaryQueryParams:
    channel: Optional[shared.VerificationAttemptsSummaryEnumChannelsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Channel', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Country', 'style': 'form', 'explode': True }})
    date_created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    destination_prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationPrefix', 'style': 'form', 'explode': True }})
    verify_service_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VerifyServiceSid', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchVerificationAttemptsSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchVerificationAttemptsSummaryRequest:
    server_url: Optional[str] = field(default=None)
    query_params: FetchVerificationAttemptsSummaryQueryParams = field(default=None)
    security: FetchVerificationAttemptsSummarySecurity = field(default=None)
    

@dataclass
class FetchVerificationAttemptsSummaryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_verification_attempts_summary: Optional[shared.VerifyV2VerificationAttemptsSummary] = field(default=None)
    
