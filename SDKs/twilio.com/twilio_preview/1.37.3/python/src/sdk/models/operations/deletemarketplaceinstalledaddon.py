from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteMarketplaceInstalledAddOnPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMarketplaceInstalledAddOnRequest:
    path_params: DeleteMarketplaceInstalledAddOnPathParams = field()
    security: DeleteMarketplaceInstalledAddOnSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteMarketplaceInstalledAddOnResponse:
    content_type: str = field()
    status_code: int = field()
    
