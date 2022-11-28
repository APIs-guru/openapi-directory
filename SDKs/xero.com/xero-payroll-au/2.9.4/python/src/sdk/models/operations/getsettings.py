from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingsHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsRequest:
    headers: GetSettingsHeaders = field()
    security: GetSettingsSecurity = field()
    

@dataclass
class GetSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    settings_object: Optional[shared.SettingsObject] = field(default=None)
    
