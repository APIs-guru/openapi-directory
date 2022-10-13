from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteModelPathParams:
    model_id: str = field(default=None, metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteModelSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteModelRequest:
    path_params: DeleteModelPathParams = field(default=None)
    security: DeleteModelSecurity = field(default=None)
    

@dataclass
class DeleteModelResponse:
    content_type: str = field(default=None)
    deletion_response: Optional[shared.DeletionResponse] = field(default=None)
    status_code: int = field(default=None)
    
