from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingsHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetSettingsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsRequest:
    headers: GetSettingsHeaders = field(default=None)
    security: GetSettingsSecurity = field(default=None)
    

@dataclass
class GetSettingsResponse:
    content_type: str = field(default=None)
    settings_object: Optional[shared.SettingsObject] = field(default=None)
    status_code: int = field(default=None)
    
