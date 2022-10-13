from dataclasses import dataclass, field
from typing import Optional
DELETE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteMarketplaceInstalledAddOnPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMarketplaceInstalledAddOnRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteMarketplaceInstalledAddOnPathParams = field(default=None)
    security: DeleteMarketplaceInstalledAddOnSecurity = field(default=None)
    

@dataclass
class DeleteMarketplaceInstalledAddOnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
