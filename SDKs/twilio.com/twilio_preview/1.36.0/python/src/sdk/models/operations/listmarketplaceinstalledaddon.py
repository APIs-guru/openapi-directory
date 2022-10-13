from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListMarketplaceInstalledAddOnQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListMarketplaceInstalledAddOnRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListMarketplaceInstalledAddOnQueryParams = field(default=None)
    security: ListMarketplaceInstalledAddOnSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListMarketplaceInstalledAddOn200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListMarketplaceInstalledAddOn200ApplicationJSONListMarketplaceInstalledAddOnResponse:
    installed_add_ons: Optional[List[shared.PreviewMarketplaceInstalledAddOn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installed_add_ons' }})
    meta: Optional[ListMarketplaceInstalledAddOn200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListMarketplaceInstalledAddOnResponse:
    content_type: str = field(default=None)
    list_marketplace_installed_add_on_response: Optional[ListMarketplaceInstalledAddOn200ApplicationJSONListMarketplaceInstalledAddOnResponse] = field(default=None)
    status_code: int = field(default=None)
    
