from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MARKETPLACE_AVAILABLE_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListMarketplaceAvailableAddOnExtensionPathParams:
    available_add_on_sid: str = field(metadata={'path_param': { 'field_name': 'AvailableAddOnSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMarketplaceAvailableAddOnExtensionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMarketplaceAvailableAddOnExtensionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse:
    extensions: Optional[List[shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extensions') }})
    meta: Optional[ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListMarketplaceAvailableAddOnExtensionRequest:
    path_params: ListMarketplaceAvailableAddOnExtensionPathParams = field()
    query_params: ListMarketplaceAvailableAddOnExtensionQueryParams = field()
    security: ListMarketplaceAvailableAddOnExtensionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMarketplaceAvailableAddOnExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    list_marketplace_available_add_on_extension_response: Optional[ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse] = field(default=None)
    
