from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDatasetPathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatasetSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatasetRequest:
    path_params: GetDatasetPathParams = field(default=None)
    security: GetDatasetSecurity = field(default=None)
    

@dataclass
class GetDatasetResponse:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
