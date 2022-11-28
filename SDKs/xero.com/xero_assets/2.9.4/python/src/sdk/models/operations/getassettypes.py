from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAssetTypesHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetTypesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAssetTypesRequest:
    headers: GetAssetTypesHeaders = field()
    security: GetAssetTypesSecurity = field()
    

@dataclass
class GetAssetTypesResponse:
    content_type: str = field()
    status_code: int = field()
    asset_types: Optional[List[shared.AssetType]] = field(default=None)
    
