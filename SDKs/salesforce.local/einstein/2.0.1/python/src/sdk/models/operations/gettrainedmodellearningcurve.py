from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTrainedModelLearningCurvePathParams:
    model_id: str = field(default=None, metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainedModelLearningCurveQueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTrainedModelLearningCurveSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainedModelLearningCurveRequest:
    path_params: GetTrainedModelLearningCurvePathParams = field(default=None)
    query_params: GetTrainedModelLearningCurveQueryParams = field(default=None)
    security: GetTrainedModelLearningCurveSecurity = field(default=None)
    

@dataclass
class GetTrainedModelLearningCurveResponse:
    content_type: str = field(default=None)
    learning_curve_list: Optional[shared.LearningCurveList] = field(default=None)
    status_code: int = field(default=None)
    
