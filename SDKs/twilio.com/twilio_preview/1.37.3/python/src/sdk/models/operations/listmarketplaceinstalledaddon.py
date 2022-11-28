from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListMarketplaceInstalledAddOnQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse:
    installed_add_ons: Optional[List[shared.PreviewMarketplaceInstalledAddOn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installed_add_ons') }})
    meta: Optional[ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListMarketplaceInstalledAddOnRequest:
    query_params: ListMarketplaceInstalledAddOnQueryParams = field()
    security: ListMarketplaceInstalledAddOnSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMarketplaceInstalledAddOnResponse:
    content_type: str = field()
    status_code: int = field()
    list_marketplace_installed_add_on_response: Optional[ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse] = field(default=None)
    
