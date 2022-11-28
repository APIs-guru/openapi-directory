from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_BRAND_VETTING_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class ListBrandVettingPathParams:
    brand_sid: str = field(metadata={'path_param': { 'field_name': 'BrandSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBrandVettingQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    vetting_provider: Optional[shared.BrandVettingEnumVettingProviderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'VettingProvider', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBrandVettingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListBrandVettingListBrandVettingResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListBrandVettingListBrandVettingResponse:
    data: Optional[List[shared.MessagingV1BrandRegistrationsBrandVetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[ListBrandVettingListBrandVettingResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListBrandVettingRequest:
    path_params: ListBrandVettingPathParams = field()
    query_params: ListBrandVettingQueryParams = field()
    security: ListBrandVettingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListBrandVettingResponse:
    content_type: str = field()
    status_code: int = field()
    list_brand_vetting_response: Optional[ListBrandVettingListBrandVettingResponse] = field(default=None)
    
