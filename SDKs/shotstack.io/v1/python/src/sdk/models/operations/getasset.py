from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAssetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetSecurity:
    developer_key: shared.SchemeDeveloperKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAssetRequest:
    path_params: GetAssetPathParams = field(default=None)
    security: GetAssetSecurity = field(default=None)
    

@dataclass
class GetAssetResponse:
    asset_response: Optional[shared.AssetResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
