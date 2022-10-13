from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MARKETPLACE_AVAILABLE_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchMarketplaceAvailableAddOnPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMarketplaceAvailableAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMarketplaceAvailableAddOnRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMarketplaceAvailableAddOnPathParams = field(default=None)
    security: FetchMarketplaceAvailableAddOnSecurity = field(default=None)
    

@dataclass
class FetchMarketplaceAvailableAddOnResponses:
    preview_marketplace_available_add_on: Optional[shared.PreviewMarketplaceAvailableAddOn] = field(default=None)
    

@dataclass
class FetchMarketplaceAvailableAddOnResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchMarketplaceAvailableAddOnResponses]] = field(default=None)
    status_code: int = field(default=None)
    
