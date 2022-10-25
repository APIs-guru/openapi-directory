from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListNetworkAccessProfileNetworkPathParams:
    network_access_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'NetworkAccessProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListNetworkAccessProfileNetworkQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListNetworkAccessProfileNetworkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListNetworkAccessProfileNetworkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListNetworkAccessProfileNetworkPathParams = field(default=None)
    query_params: ListNetworkAccessProfileNetworkQueryParams = field(default=None)
    security: ListNetworkAccessProfileNetworkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse:
    meta: Optional[ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    networks: Optional[List[shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    

@dataclass
class ListNetworkAccessProfileNetworkResponse:
    content_type: str = field(default=None)
    list_network_access_profile_network_response: Optional[ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse] = field(default=None)
    status_code: int = field(default=None)
    
