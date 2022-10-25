from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_US_APP_TO_PERSON_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class ListUsAppToPersonPathParams:
    messaging_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUsAppToPersonQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUsAppToPersonSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUsAppToPersonRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUsAppToPersonPathParams = field(default=None)
    query_params: ListUsAppToPersonQueryParams = field(default=None)
    security: ListUsAppToPersonSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUsAppToPersonListUsAppToPersonResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListUsAppToPersonListUsAppToPersonResponse:
    compliance: Optional[List[shared.MessagingV1ServiceUsAppToPerson]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliance' }})
    meta: Optional[ListUsAppToPersonListUsAppToPersonResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListUsAppToPersonResponse:
    content_type: str = field(default=None)
    list_us_app_to_person_response: Optional[ListUsAppToPersonListUsAppToPersonResponse] = field(default=None)
    status_code: int = field(default=None)
    
