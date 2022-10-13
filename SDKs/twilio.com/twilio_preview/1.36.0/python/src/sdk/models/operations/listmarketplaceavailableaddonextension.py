from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_MARKETPLACE_AVAILABLE_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListMarketplaceAvailableAddOnExtensionPathParams:
    available_add_on_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AvailableAddOnSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMarketplaceAvailableAddOnExtensionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMarketplaceAvailableAddOnExtensionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListMarketplaceAvailableAddOnExtensionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListMarketplaceAvailableAddOnExtensionPathParams = field(default=None)
    query_params: ListMarketplaceAvailableAddOnExtensionQueryParams = field(default=None)
    security: ListMarketplaceAvailableAddOnExtensionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListMarketplaceAvailableAddOnExtension200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListMarketplaceAvailableAddOnExtension200ApplicationJSONListMarketplaceAvailableAddOnExtensionResponse:
    extensions: Optional[List[shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extensions' }})
    meta: Optional[ListMarketplaceAvailableAddOnExtension200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListMarketplaceAvailableAddOnExtensionResponse:
    content_type: str = field(default=None)
    list_marketplace_available_add_on_extension_response: Optional[ListMarketplaceAvailableAddOnExtension200ApplicationJSONListMarketplaceAvailableAddOnExtensionResponse] = field(default=None)
    status_code: int = field(default=None)
    
