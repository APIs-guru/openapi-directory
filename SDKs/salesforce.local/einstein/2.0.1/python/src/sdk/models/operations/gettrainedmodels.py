from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTrainedModelsPathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainedModelsQueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTrainedModelsSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainedModelsRequest:
    path_params: GetTrainedModelsPathParams = field(default=None)
    query_params: GetTrainedModelsQueryParams = field(default=None)
    security: GetTrainedModelsSecurity = field(default=None)
    

@dataclass
class GetTrainedModelsResponse:
    content_type: str = field(default=None)
    model_list: Optional[shared.ModelList] = field(default=None)
    status_code: int = field(default=None)
    
