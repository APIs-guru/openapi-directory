from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest:
    accept_terms_of_service: bool = field(metadata={'form': { 'field_name': 'AcceptTermsOfService' }})
    available_add_on_sid: str = field(metadata={'form': { 'field_name': 'AvailableAddOnSid' }})
    configuration: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Configuration' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMarketplaceInstalledAddOnRequest:
    security: CreateMarketplaceInstalledAddOnSecurity = field()
    request: Optional[CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateMarketplaceInstalledAddOnResponse:
    content_type: str = field()
    status_code: int = field()
    preview_marketplace_installed_add_on: Optional[shared.PreviewMarketplaceInstalledAddOn] = field(default=None)
    
