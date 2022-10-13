from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class ListFactorPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFactorQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFactorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListFactorRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListFactorPathParams = field(default=None)
    query_params: ListFactorQueryParams = field(default=None)
    security: ListFactorSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListFactor200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListFactor200ApplicationJSONListFactorResponse:
    factors: Optional[List[shared.VerifyV2ServiceEntityFactor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factors' }})
    meta: Optional[ListFactor200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListFactorResponses:
    list_factor_response: Optional[ListFactor200ApplicationJSONListFactorResponse] = field(default=None)
    

@dataclass
class ListFactorResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListFactorResponses]] = field(default=None)
    status_code: int = field(default=None)
    
