from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrainStatusAndProgress1PathParams:
    model_id: str = field(default=None, metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrainStatusAndProgress1Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrainStatusAndProgress1Request:
    path_params: GetTrainStatusAndProgress1PathParams = field(default=None)
    security: GetTrainStatusAndProgress1Security = field(default=None)
    

@dataclass
class GetTrainStatusAndProgress1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    train_response: Optional[shared.TrainResponse] = field(default=None)
    
