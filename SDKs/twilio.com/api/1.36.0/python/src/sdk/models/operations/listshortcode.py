from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SHORT_CODE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListShortCodePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListShortCodeQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    short_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ShortCode', 'style': 'form', 'explode': True }})
    

@dataclass
class ListShortCodeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListShortCodeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListShortCodePathParams = field(default=None)
    query_params: ListShortCodeQueryParams = field(default=None)
    security: ListShortCodeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListShortCodeListShortCodeResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    short_codes: Optional[List[shared.APIV2010AccountShortCode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_codes' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListShortCodeResponse:
    content_type: str = field(default=None)
    list_short_code_response: Optional[ListShortCodeListShortCodeResponse] = field(default=None)
    status_code: int = field(default=None)
    
