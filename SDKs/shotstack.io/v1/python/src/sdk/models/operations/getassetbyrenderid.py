from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAssetByRenderIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetByRenderIDSecurity:
    developer_key: shared.SchemeDeveloperKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAssetByRenderIDRequest:
    path_params: GetAssetByRenderIDPathParams = field()
    security: GetAssetByRenderIDSecurity = field()
    

@dataclass
class GetAssetByRenderIDResponse:
    content_type: str = field()
    status_code: int = field()
    asset_render_response: Optional[shared.AssetRenderResponse] = field(default=None)
    
