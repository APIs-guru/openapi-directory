from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainedModelsPathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainedModelsQueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTrainedModelsSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainedModelsRequest:
    path_params: GetTrainedModelsPathParams = field()
    query_params: GetTrainedModelsQueryParams = field()
    security: GetTrainedModelsSecurity = field()
    

@dataclass
class GetTrainedModelsResponse:
    content_type: str = field()
    status_code: int = field()
    model_list: Optional[shared.ModelList] = field(default=None)
    
