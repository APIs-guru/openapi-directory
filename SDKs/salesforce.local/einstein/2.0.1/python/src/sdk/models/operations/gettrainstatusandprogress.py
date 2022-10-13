from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainStatusAndProgressPathParams:
    model_id: str = field(default=None, metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainStatusAndProgressSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainStatusAndProgressRequest:
    path_params: GetTrainStatusAndProgressPathParams = field(default=None)
    security: GetTrainStatusAndProgressSecurity = field(default=None)
    

@dataclass
class GetTrainStatusAndProgressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    train_response: Optional[shared.TrainResponse] = field(default=None)
    
