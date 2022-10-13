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
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RetrainRequest:
    request: Optional[RetrainRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: RetrainSecurity = field(default=None)
    

@dataclass
class RetrainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    train_response: Optional[shared.TrainResponse] = field(default=None)
    
