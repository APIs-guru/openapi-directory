from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAssetByRenderIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetByRenderIDSecurity:
    developer_key: shared.SchemeDeveloperKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAssetByRenderIDRequest:
    path_params: GetAssetByRenderIDPathParams = field(default=None)
    security: GetAssetByRenderIDSecurity = field(default=None)
    

@dataclass
class GetAssetByRenderIDResponse:
    asset_render_response: Optional[shared.AssetRenderResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
