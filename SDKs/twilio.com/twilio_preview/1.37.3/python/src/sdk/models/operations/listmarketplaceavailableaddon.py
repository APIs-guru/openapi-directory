from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MARKETPLACE_AVAILABLE_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListMarketplaceAvailableAddOnQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMarketplaceAvailableAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse:
    available_add_ons: Optional[List[shared.PreviewMarketplaceAvailableAddOn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_add_ons') }})
    meta: Optional[ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListMarketplaceAvailableAddOnRequest:
    query_params: ListMarketplaceAvailableAddOnQueryParams = field()
    security: ListMarketplaceAvailableAddOnSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMarketplaceAvailableAddOnResponse:
    content_type: str = field()
    status_code: int = field()
    list_marketplace_available_add_on_response: Optional[ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse] = field(default=None)
    
