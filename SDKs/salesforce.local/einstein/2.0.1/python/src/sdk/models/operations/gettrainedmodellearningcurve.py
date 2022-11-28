from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainedModelLearningCurvePathParams:
    model_id: str = field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainedModelLearningCurveQueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTrainedModelLearningCurveSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainedModelLearningCurveRequest:
    path_params: GetTrainedModelLearningCurvePathParams = field()
    query_params: GetTrainedModelLearningCurveQueryParams = field()
    security: GetTrainedModelLearningCurveSecurity = field()
    

@dataclass
class GetTrainedModelLearningCurveResponse:
    content_type: str = field()
    status_code: int = field()
    learning_curve_list: Optional[shared.LearningCurveList] = field(default=None)
    
