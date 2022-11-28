from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainedModelMetricsPathParams:
    model_id: str = field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainedModelMetricsSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainedModelMetricsRequest:
    path_params: GetTrainedModelMetricsPathParams = field()
    security: GetTrainedModelMetricsSecurity = field()
    

@dataclass
class GetTrainedModelMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    metrics: Optional[shared.Metrics] = field(default=None)
    
