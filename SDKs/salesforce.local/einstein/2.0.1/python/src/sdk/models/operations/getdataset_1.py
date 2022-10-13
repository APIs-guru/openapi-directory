from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDataset1PathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDataset1Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDataset1Request:
    path_params: GetDataset1PathParams = field(default=None)
    security: GetDataset1Security = field(default=None)
    

@dataclass
class GetDataset1Response:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
