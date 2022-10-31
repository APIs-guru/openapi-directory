from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAssetByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetByIDHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetByIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAssetByIDRequest:
    path_params: GetAssetByIDPathParams = field(default=None)
    headers: GetAssetByIDHeaders = field(default=None)
    security: GetAssetByIDSecurity = field(default=None)
    

@dataclass
class GetAssetByIDResponse:
    asset: Optional[shared.Asset] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
