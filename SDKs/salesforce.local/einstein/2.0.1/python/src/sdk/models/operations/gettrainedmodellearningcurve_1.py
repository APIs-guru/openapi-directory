from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTrainedModelLearningCurve1PathParams:
    model_id: str = field(default=None, metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainedModelLearningCurve1QueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTrainedModelLearningCurve1Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainedModelLearningCurve1Request:
    path_params: GetTrainedModelLearningCurve1PathParams = field(default=None)
    query_params: GetTrainedModelLearningCurve1QueryParams = field(default=None)
    security: GetTrainedModelLearningCurve1Security = field(default=None)
    

@dataclass
class GetTrainedModelLearningCurve1Response:
    content_type: str = field(default=None)
    learning_curve_list: Optional[shared.LearningCurveList] = field(default=None)
    status_code: int = field(default=None)
    
