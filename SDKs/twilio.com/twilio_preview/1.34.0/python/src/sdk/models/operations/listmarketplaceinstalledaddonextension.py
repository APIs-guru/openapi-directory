from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_MARKETPLACE_INSTALLED_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListMarketplaceInstalledAddOnExtensionPathParams:
    installed_add_on_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'InstalledAddOnSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMarketplaceInstalledAddOnExtensionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMarketplaceInstalledAddOnExtensionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListMarketplaceInstalledAddOnExtensionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListMarketplaceInstalledAddOnExtensionPathParams = field(default=None)
    query_params: ListMarketplaceInstalledAddOnExtensionQueryParams = field(default=None)
    security: ListMarketplaceInstalledAddOnExtensionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListMarketplaceInstalledAddOnExtension200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListMarketplaceInstalledAddOnExtension200ApplicationJSONListMarketplaceInstalledAddOnExtensionResponse:
    extensions: Optional[List[shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extensions' }})
    meta: Optional[ListMarketplaceInstalledAddOnExtension200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListMarketplaceInstalledAddOnExtensionResponses:
    list_marketplace_installed_add_on_extension_response: Optional[ListMarketplaceInstalledAddOnExtension200ApplicationJSONListMarketplaceInstalledAddOnExtensionResponse] = field(default=None)
    

@dataclass
class ListMarketplaceInstalledAddOnExtensionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListMarketplaceInstalledAddOnExtensionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
