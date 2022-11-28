from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_MARKETPLACE_AVAILABLE_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchMarketplaceAvailableAddOnPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMarketplaceAvailableAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMarketplaceAvailableAddOnRequest:
    path_params: FetchMarketplaceAvailableAddOnPathParams = field()
    security: FetchMarketplaceAvailableAddOnSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchMarketplaceAvailableAddOnResponse:
    content_type: str = field()
    status_code: int = field()
    preview_marketplace_available_add_on: Optional[shared.PreviewMarketplaceAvailableAddOn] = field(default=None)
    
