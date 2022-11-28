from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteDataset1PathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDataset1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteDataset1Request:
    path_params: DeleteDataset1PathParams = field()
    security: DeleteDataset1Security = field()
    

@dataclass
class DeleteDataset1Response:
    content_type: str = field()
    status_code: int = field()
    deletion_response: Optional[shared.DeletionResponse] = field(default=None)
    
