from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateMarketplaceInstalledAddOnPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest:
    configuration: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Configuration' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnRequest:
    path_params: UpdateMarketplaceInstalledAddOnPathParams = field()
    security: UpdateMarketplaceInstalledAddOnSecurity = field()
    request: Optional[UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateMarketplaceInstalledAddOnResponse:
    content_type: str = field()
    status_code: int = field()
    preview_marketplace_installed_add_on: Optional[shared.PreviewMarketplaceInstalledAddOn] = field(default=None)
    
