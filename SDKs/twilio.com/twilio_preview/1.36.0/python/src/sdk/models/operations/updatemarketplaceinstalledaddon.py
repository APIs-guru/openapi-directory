from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateMarketplaceInstalledAddOnPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest:
    configuration: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Configuration' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateMarketplaceInstalledAddOnPathParams = field(default=None)
    request: Optional[UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateMarketplaceInstalledAddOnSecurity = field(default=None)
    

@dataclass
class UpdateMarketplaceInstalledAddOnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_marketplace_installed_add_on: Optional[shared.PreviewMarketplaceInstalledAddOn] = field(default=None)
    
