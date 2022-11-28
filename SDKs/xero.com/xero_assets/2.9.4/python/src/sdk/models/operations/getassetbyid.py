from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAssetByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetByIDHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetByIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAssetByIDRequest:
    headers: GetAssetByIDHeaders = field()
    path_params: GetAssetByIDPathParams = field()
    security: GetAssetByIDSecurity = field()
    

@dataclass
class GetAssetByIDResponse:
    content_type: str = field()
    status_code: int = field()
    asset: Optional[shared.Asset] = field(default=None)
    
