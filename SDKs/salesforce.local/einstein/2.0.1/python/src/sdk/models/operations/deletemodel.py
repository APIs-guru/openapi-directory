from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteModelPathParams:
    model_id: str = field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteModelSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteModelRequest:
    path_params: DeleteModelPathParams = field()
    security: DeleteModelSecurity = field()
    

@dataclass
class DeleteModelResponse:
    content_type: str = field()
    status_code: int = field()
    deletion_response: Optional[shared.DeletionResponse] = field(default=None)
    
