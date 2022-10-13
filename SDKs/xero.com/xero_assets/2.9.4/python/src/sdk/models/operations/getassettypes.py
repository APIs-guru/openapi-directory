from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAssetTypesHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id' }})
    

@dataclass
class GetAssetTypesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAssetTypesRequest:
    headers: GetAssetTypesHeaders = field(default=None)
    security: GetAssetTypesSecurity = field(default=None)
    

@dataclass
class GetAssetTypesResponse:
    asset_types: Optional[List[shared.AssetType]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
