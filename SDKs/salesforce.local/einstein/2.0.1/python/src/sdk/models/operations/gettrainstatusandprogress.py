from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainStatusAndProgressPathParams:
    model_id: str = field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainStatusAndProgressSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainStatusAndProgressRequest:
    path_params: GetTrainStatusAndProgressPathParams = field()
    security: GetTrainStatusAndProgressSecurity = field()
    

@dataclass
class GetTrainStatusAndProgressResponse:
    content_type: str = field()
    status_code: int = field()
    train_response: Optional[shared.TrainResponse] = field(default=None)
    
