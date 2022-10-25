from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_MARKETPLACE_INSTALLED_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateMarketplaceInstalledAddOnExtensionPathParams:
    installed_add_on_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'InstalledAddOnSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest:
    enabled: bool = field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnExtensionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnExtensionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateMarketplaceInstalledAddOnExtensionPathParams = field(default=None)
    request: Optional[UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateMarketplaceInstalledAddOnExtensionSecurity = field(default=None)
    

@dataclass
class UpdateMarketplaceInstalledAddOnExtensionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_marketplace_installed_add_on_installed_add_on_extension: Optional[shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension] = field(default=None)
    
