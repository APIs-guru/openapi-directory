from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_MARKETPLACE_INSTALLED_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateMarketplaceInstalledAddOnExtensionPathParams:
    installed_add_on_sid: str = field(metadata={'path_param': { 'field_name': 'InstalledAddOnSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest:
    enabled: bool = field(metadata={'form': { 'field_name': 'Enabled' }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnExtensionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMarketplaceInstalledAddOnExtensionRequest:
    path_params: UpdateMarketplaceInstalledAddOnExtensionPathParams = field()
    security: UpdateMarketplaceInstalledAddOnExtensionSecurity = field()
    request: Optional[UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateMarketplaceInstalledAddOnExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    preview_marketplace_installed_add_on_installed_add_on_extension: Optional[shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension] = field(default=None)
    
