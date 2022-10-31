from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAssetSettingsHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetSettingsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAssetSettingsRequest:
    headers: GetAssetSettingsHeaders = field(default=None)
    security: GetAssetSettingsSecurity = field(default=None)
    

@dataclass
class GetAssetSettingsResponse:
    content_type: str = field(default=None)
    setting: Optional[shared.Setting] = field(default=None)
    status_code: int = field(default=None)
    
