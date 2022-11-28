from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAssetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetSecurity:
    developer_key: shared.SchemeDeveloperKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAssetRequest:
    path_params: GetAssetPathParams = field()
    security: GetAssetSecurity = field()
    

@dataclass
class GetAssetResponse:
    content_type: str = field()
    status_code: int = field()
    asset_response: Optional[shared.AssetResponse] = field(default=None)
    
