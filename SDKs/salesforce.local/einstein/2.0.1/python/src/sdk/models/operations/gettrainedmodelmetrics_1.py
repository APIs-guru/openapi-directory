from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainedModelMetrics1PathParams:
    model_id: str = field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainedModelMetrics1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainedModelMetrics1Request:
    path_params: GetTrainedModelMetrics1PathParams = field()
    security: GetTrainedModelMetrics1Security = field()
    

@dataclass
class GetTrainedModelMetrics1Response:
    content_type: str = field()
    status_code: int = field()
    metrics: Optional[shared.Metrics] = field(default=None)
    
