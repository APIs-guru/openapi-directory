from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_BRAND_REGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class ListBrandRegistrationsQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBrandRegistrationsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListBrandRegistrationsRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListBrandRegistrationsQueryParams = field(default=None)
    security: ListBrandRegistrationsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListBrandRegistrations200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListBrandRegistrations200ApplicationJSONListBrandRegistrationsResponse:
    data: Optional[List[shared.MessagingV1BrandRegistrations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: Optional[ListBrandRegistrations200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListBrandRegistrationsResponses:
    list_brand_registrations_response: Optional[ListBrandRegistrations200ApplicationJSONListBrandRegistrationsResponse] = field(default=None)
    

@dataclass
class ListBrandRegistrationsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListBrandRegistrationsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
