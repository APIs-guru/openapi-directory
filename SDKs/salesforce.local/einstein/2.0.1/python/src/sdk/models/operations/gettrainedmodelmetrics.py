from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainedModelMetricsPathParams:
    model_id: str = field(default=None, metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainedModelMetricsSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainedModelMetricsRequest:
    path_params: GetTrainedModelMetricsPathParams = field(default=None)
    security: GetTrainedModelMetricsSecurity = field(default=None)
    

@dataclass
class GetTrainedModelMetricsResponse:
    content_type: str = field(default=None)
    metrics: Optional[shared.Metrics] = field(default=None)
    status_code: int = field(default=None)
    
