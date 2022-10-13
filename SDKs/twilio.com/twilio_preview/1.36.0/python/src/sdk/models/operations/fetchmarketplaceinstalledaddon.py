from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchMarketplaceInstalledAddOnPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMarketplaceInstalledAddOnRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMarketplaceInstalledAddOnPathParams = field(default=None)
    security: FetchMarketplaceInstalledAddOnSecurity = field(default=None)
    

@dataclass
class FetchMarketplaceInstalledAddOnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_marketplace_installed_add_on: Optional[shared.PreviewMarketplaceInstalledAddOn] = field(default=None)
    
