from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDatasetPathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatasetSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatasetRequest:
    path_params: GetDatasetPathParams = field()
    security: GetDatasetSecurity = field()
    

@dataclass
class GetDatasetResponse:
    content_type: str = field()
    status_code: int = field()
    dataset: Optional[shared.Dataset] = field(default=None)
    
