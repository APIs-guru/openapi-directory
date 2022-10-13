from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteDataset1PathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDataset1Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteDataset1Request:
    path_params: DeleteDataset1PathParams = field(default=None)
    security: DeleteDataset1Security = field(default=None)
    

@dataclass
class DeleteDataset1Response:
    content_type: str = field(default=None)
    deletion_response: Optional[shared.DeletionResponse] = field(default=None)
    status_code: int = field(default=None)
    
