from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_PHONE_NUMBER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class ListPhoneNumberPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListPhoneNumberQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListPhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListPhoneNumberPathParams = field(default=None)
    query_params: ListPhoneNumberQueryParams = field(default=None)
    security: ListPhoneNumberSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListPhoneNumberListPhoneNumberResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListPhoneNumberListPhoneNumberResponse:
    meta: Optional[ListPhoneNumberListPhoneNumberResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    phone_numbers: Optional[List[shared.MessagingV1ServicePhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_numbers' }})
    

@dataclass
class ListPhoneNumberResponse:
    content_type: str = field(default=None)
    list_phone_number_response: Optional[ListPhoneNumberListPhoneNumberResponse] = field(default=None)
    status_code: int = field(default=None)
    
