from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_MARKETPLACE_INSTALLED_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchMarketplaceInstalledAddOnExtensionPathParams:
    installed_add_on_sid: str = field(metadata={'path_param': { 'field_name': 'InstalledAddOnSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMarketplaceInstalledAddOnExtensionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMarketplaceInstalledAddOnExtensionRequest:
    path_params: FetchMarketplaceInstalledAddOnExtensionPathParams = field()
    security: FetchMarketplaceInstalledAddOnExtensionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchMarketplaceInstalledAddOnExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    preview_marketplace_installed_add_on_installed_add_on_extension: Optional[shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension] = field(default=None)
    
