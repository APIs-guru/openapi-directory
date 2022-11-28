from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteAssetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAssetSecurity:
    developer_key: shared.SchemeDeveloperKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteAssetRequest:
    path_params: DeleteAssetPathParams = field()
    security: DeleteAssetSecurity = field()
    

@dataclass
class DeleteAssetResponse:
    content_type: str = field()
    status_code: int = field()
    
