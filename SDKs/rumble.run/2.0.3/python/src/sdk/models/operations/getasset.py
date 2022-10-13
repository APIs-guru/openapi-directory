from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAssetPathParams:
    asset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAssetRequest:
    path_params: GetAssetPathParams = field(default=None)
    security: GetAssetSecurity = field(default=None)
    

@dataclass
class GetAssetResponse:
    asset: Optional[shared.Asset] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
