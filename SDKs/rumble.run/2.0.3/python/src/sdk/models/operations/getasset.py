from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAssetPathParams:
    asset_id: str = field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAssetRequest:
    path_params: GetAssetPathParams = field()
    security: GetAssetSecurity = field()
    

@dataclass
class GetAssetResponse:
    content_type: str = field()
    status_code: int = field()
    asset: Optional[shared.Asset] = field(default=None)
    
