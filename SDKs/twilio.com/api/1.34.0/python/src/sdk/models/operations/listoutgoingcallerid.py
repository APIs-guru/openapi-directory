from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_OUTGOING_CALLER_ID_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListOutgoingCallerIDPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListOutgoingCallerIDQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class ListOutgoingCallerIDSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListOutgoingCallerIDRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListOutgoingCallerIDPathParams = field(default=None)
    query_params: ListOutgoingCallerIDQueryParams = field(default=None)
    security: ListOutgoingCallerIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListOutgoingCallerID200ApplicationJSONListOutgoingCallerIDResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    outgoing_caller_ids: Optional[List[shared.APIV2010AccountOutgoingCallerID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outgoing_caller_ids' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListOutgoingCallerIDResponses:
    list_outgoing_caller_id_response: Optional[ListOutgoingCallerID200ApplicationJSONListOutgoingCallerIDResponse] = field(default=None)
    

@dataclass
class ListOutgoingCallerIDResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListOutgoingCallerIDResponses]] = field(default=None)
    status_code: int = field(default=None)
    
