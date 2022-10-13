from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MARKETPLACE_AVAILABLE_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchMarketplaceAvailableAddOnExtensionPathParams:
    available_add_on_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AvailableAddOnSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMarketplaceAvailableAddOnExtensionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMarketplaceAvailableAddOnExtensionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMarketplaceAvailableAddOnExtensionPathParams = field(default=None)
    security: FetchMarketplaceAvailableAddOnExtensionSecurity = field(default=None)
    

@dataclass
class FetchMarketplaceAvailableAddOnExtensionResponses:
    preview_marketplace_available_add_on_available_add_on_extension: Optional[shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension] = field(default=None)
    

@dataclass
class FetchMarketplaceAvailableAddOnExtensionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchMarketplaceAvailableAddOnExtensionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
