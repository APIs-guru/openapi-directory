from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MARKETPLACE_INSTALLED_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchMarketplaceInstalledAddOnExtensionPathParams:
    installed_add_on_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'InstalledAddOnSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMarketplaceInstalledAddOnExtensionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMarketplaceInstalledAddOnExtensionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMarketplaceInstalledAddOnExtensionPathParams = field(default=None)
    security: FetchMarketplaceInstalledAddOnExtensionSecurity = field(default=None)
    

@dataclass
class FetchMarketplaceInstalledAddOnExtensionResponses:
    preview_marketplace_installed_add_on_installed_add_on_extension: Optional[shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension] = field(default=None)
    

@dataclass
class FetchMarketplaceInstalledAddOnExtensionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchMarketplaceInstalledAddOnExtensionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
