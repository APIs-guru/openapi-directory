from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_VERIFICATION_ATTEMPT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class ListVerificationAttemptQueryParams:
    channel: Optional[shared.VerificationAttemptEnumChannelsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Channel', 'style': 'form', 'explode': True }})
    channel_data_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ChannelData.To', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Country', 'style': 'form', 'explode': True }})
    date_created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared.VerificationAttemptEnumConversionStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    verification_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VerificationSid', 'style': 'form', 'explode': True }})
    verify_service_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VerifyServiceSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVerificationAttemptSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListVerificationAttemptListVerificationAttemptResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListVerificationAttemptListVerificationAttemptResponse:
    attempts: Optional[List[shared.VerifyV2VerificationAttempt]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    meta: Optional[ListVerificationAttemptListVerificationAttemptResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListVerificationAttemptRequest:
    query_params: ListVerificationAttemptQueryParams = field()
    security: ListVerificationAttemptSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListVerificationAttemptResponse:
    content_type: str = field()
    status_code: int = field()
    list_verification_attempt_response: Optional[ListVerificationAttemptListVerificationAttemptResponse] = field(default=None)
    
