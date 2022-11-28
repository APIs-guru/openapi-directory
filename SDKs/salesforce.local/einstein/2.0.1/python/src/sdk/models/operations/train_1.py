from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class Train1RequestBody:
    algorithm: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'algorithm' }})
    dataset_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'datasetId' }})
    epochs: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'epochs' }})
    learning_rate: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'learningRate' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    train_params: Optional[shared.V2VisionTrainParams] = field(default=None, metadata={'multipart_form': { 'field_name': 'trainParams', 'json': True }})
    

@dataclass
class Train1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class Train1Request:
    security: Train1Security = field()
    request: Optional[Train1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class Train1Response:
    content_type: str = field()
    status_code: int = field()
    train_response: Optional[shared.TrainResponse] = field(default=None)
    
