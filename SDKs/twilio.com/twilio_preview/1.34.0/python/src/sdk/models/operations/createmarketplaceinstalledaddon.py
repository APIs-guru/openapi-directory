from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMarketplaceInstalledAddOnRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMarketplaceInstalledAddOnSecurity = field(default=None)
    

@dataclass
class CreateMarketplaceInstalledAddOnResponses:
    preview_marketplace_installed_add_on: Optional[shared.PreviewMarketplaceInstalledAddOn] = field(default=None)
    

@dataclass
class CreateMarketplaceInstalledAddOnResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateMarketplaceInstalledAddOnResponses]] = field(default=None)
    status_code: int = field(default=None)
    
