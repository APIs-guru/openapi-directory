from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_TOLLFREE_VERIFICATION_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class ListTollfreeVerificationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared.TollfreeVerificationEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    tollfree_phone_number_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TollfreePhoneNumberSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTollfreeVerificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListTollfreeVerificationListTollfreeVerificationResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListTollfreeVerificationListTollfreeVerificationResponse:
    meta: Optional[ListTollfreeVerificationListTollfreeVerificationResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    verifications: Optional[List[shared.MessagingV1TollfreeVerification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifications') }})
    

@dataclass
class ListTollfreeVerificationRequest:
    query_params: ListTollfreeVerificationQueryParams = field()
    security: ListTollfreeVerificationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListTollfreeVerificationResponse:
    content_type: str = field()
    status_code: int = field()
    list_tollfree_verification_response: Optional[ListTollfreeVerificationListTollfreeVerificationResponse] = field(default=None)
    
