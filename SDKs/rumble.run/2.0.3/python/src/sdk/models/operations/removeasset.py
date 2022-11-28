from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveAssetPathParams:
    asset_id: str = field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAssetSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAssetRequest:
    path_params: RemoveAssetPathParams = field()
    security: RemoveAssetSecurity = field()
    

@dataclass
class RemoveAssetResponse:
    content_type: str = field()
    status_code: int = field()
    
