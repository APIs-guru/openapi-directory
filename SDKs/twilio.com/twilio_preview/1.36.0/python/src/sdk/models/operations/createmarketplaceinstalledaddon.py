from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateMarketplaceInstalledAddOnRequestBodyCreateMarketplaceInstalledAddOnRequest:
    accept_terms_of_service: bool = field(default=None, metadata={'form': { 'field_name': 'AcceptTermsOfService' }})
    available_add_on_sid: str = field(default=None, metadata={'form': { 'field_name': 'AvailableAddOnSid' }})
    configuration: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Configuration' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMarketplaceInstalledAddOnRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateMarketplaceInstalledAddOnRequestBodyCreateMarketplaceInstalledAddOnRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMarketplaceInstalledAddOnSecurity = field(default=None)
    

@dataclass
class CreateMarketplaceInstalledAddOnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_marketplace_installed_add_on: Optional[shared.PreviewMarketplaceInstalledAddOn] = field(default=None)
    
