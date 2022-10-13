from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SIP_DOMAIN_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSipDomainPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSipDomainQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSipDomainSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSipDomainRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSipDomainPathParams = field(default=None)
    query_params: ListSipDomainQueryParams = field(default=None)
    security: ListSipDomainSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSipDomain200ApplicationJSONListSipDomainResponse:
    domains: Optional[List[shared.APIV2010AccountSipSipDomain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListSipDomainResponses:
    list_sip_domain_response: Optional[ListSipDomain200ApplicationJSONListSipDomainResponse] = field(default=None)
    

@dataclass
class ListSipDomainResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSipDomainResponses]] = field(default=None)
    status_code: int = field(default=None)
    
