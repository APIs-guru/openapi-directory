from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainedModels1PathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainedModels1QueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTrainedModels1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainedModels1Request:
    path_params: GetTrainedModels1PathParams = field()
    query_params: GetTrainedModels1QueryParams = field()
    security: GetTrainedModels1Security = field()
    

@dataclass
class GetTrainedModels1Response:
    content_type: str = field()
    status_code: int = field()
    model_list: Optional[shared.ModelList] = field(default=None)
    
