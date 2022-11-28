from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDataset1PathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDataset1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDataset1Request:
    path_params: GetDataset1PathParams = field()
    security: GetDataset1Security = field()
    

@dataclass
class GetDataset1Response:
    content_type: str = field()
    status_code: int = field()
    dataset: Optional[shared.Dataset] = field(default=None)
    
