from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SIGNING_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSigningKeyPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSigningKeyQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSigningKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSigningKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSigningKeyPathParams = field(default=None)
    query_params: ListSigningKeyQueryParams = field(default=None)
    security: ListSigningKeySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSigningKey200ApplicationJSONListSigningKeyResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    signing_keys: Optional[List[shared.APIV2010AccountSigningKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signing_keys' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListSigningKeyResponse:
    content_type: str = field(default=None)
    list_signing_key_response: Optional[ListSigningKey200ApplicationJSONListSigningKeyResponse] = field(default=None)
    status_code: int = field(default=None)
    
