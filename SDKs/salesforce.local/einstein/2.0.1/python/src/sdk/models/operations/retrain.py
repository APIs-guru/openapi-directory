from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrainRequestBody:
    algorithm: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'algorithm' }})
    epochs: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'epochs' }})
    learning_rate: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'learningRate' }})
    model_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'modelId' }})
    train_params: Optional[shared.V2LanguageTrainParams] = field(default=None, metadata={'multipart_form': { 'field_name': 'trainParams', 'json': True }})
    

@dataclass
class RetrainSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RetrainRequest:
    security: RetrainSecurity = field()
    request: Optional[RetrainRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class RetrainResponse:
    content_type: str = field()
    status_code: int = field()
    train_response: Optional[shared.TrainResponse] = field(default=None)
    
