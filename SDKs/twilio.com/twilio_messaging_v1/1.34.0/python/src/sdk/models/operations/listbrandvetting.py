from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_BRAND_VETTING_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class ListBrandVettingPathParams:
    brand_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BrandSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBrandVettingQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    vetting_provider: Optional[shared.BrandVettingEnumVettingProviderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'VettingProvider', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBrandVettingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListBrandVettingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListBrandVettingPathParams = field(default=None)
    query_params: ListBrandVettingQueryParams = field(default=None)
    security: ListBrandVettingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListBrandVetting200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListBrandVetting200ApplicationJSONListBrandVettingResponse:
    data: Optional[List[shared.MessagingV1BrandRegistrationsBrandVetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: Optional[ListBrandVetting200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListBrandVettingResponses:
    list_brand_vetting_response: Optional[ListBrandVetting200ApplicationJSONListBrandVettingResponse] = field(default=None)
    

@dataclass
class ListBrandVettingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListBrandVettingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
