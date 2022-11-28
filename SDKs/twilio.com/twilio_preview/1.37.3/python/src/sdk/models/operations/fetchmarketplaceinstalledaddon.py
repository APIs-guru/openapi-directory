from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchMarketplaceInstalledAddOnPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMarketplaceInstalledAddOnRequest:
    path_params: FetchMarketplaceInstalledAddOnPathParams = field()
    security: FetchMarketplaceInstalledAddOnSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchMarketplaceInstalledAddOnResponse:
    content_type: str = field()
    status_code: int = field()
    preview_marketplace_installed_add_on: Optional[shared.PreviewMarketplaceInstalledAddOn] = field(default=None)
    
