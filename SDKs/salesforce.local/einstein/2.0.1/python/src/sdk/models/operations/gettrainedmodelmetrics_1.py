from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainedModelMetrics1PathParams:
    model_id: str = field(default=None, metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainedModelMetrics1Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainedModelMetrics1Request:
    path_params: GetTrainedModelMetrics1PathParams = field(default=None)
    security: GetTrainedModelMetrics1Security = field(default=None)
    

@dataclass
class GetTrainedModelMetrics1Response:
    content_type: str = field(default=None)
    metrics: Optional[shared.Metrics] = field(default=None)
    status_code: int = field(default=None)
    
