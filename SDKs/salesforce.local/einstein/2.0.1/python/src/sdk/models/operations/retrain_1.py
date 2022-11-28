from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class Retrain1RequestBody:
    algorithm: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'algorithm' }})
    epochs: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'epochs' }})
    learning_rate: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'learningRate' }})
    model_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'modelId' }})
    train_params: Optional[shared.V2VisionTrainParams] = field(default=None, metadata={'multipart_form': { 'field_name': 'trainParams', 'json': True }})
    

@dataclass
class Retrain1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class Retrain1Request:
    security: Retrain1Security = field()
    request: Optional[Retrain1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class Retrain1Response:
    content_type: str = field()
    status_code: int = field()
    train_response: Optional[shared.TrainResponse] = field(default=None)
    
