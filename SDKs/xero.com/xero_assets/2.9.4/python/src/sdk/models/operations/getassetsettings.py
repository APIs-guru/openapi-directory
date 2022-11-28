from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAssetSettingsHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetSettingsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAssetSettingsRequest:
    headers: GetAssetSettingsHeaders = field()
    security: GetAssetSettingsSecurity = field()
    

@dataclass
class GetAssetSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    setting: Optional[shared.Setting] = field(default=None)
    
