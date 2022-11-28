from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainStatusAndProgress1PathParams:
    model_id: str = field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainStatusAndProgress1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainStatusAndProgress1Request:
    path_params: GetTrainStatusAndProgress1PathParams = field()
    security: GetTrainStatusAndProgress1Security = field()
    

@dataclass
class GetTrainStatusAndProgress1Response:
    content_type: str = field()
    status_code: int = field()
    train_response: Optional[shared.TrainResponse] = field(default=None)
    
