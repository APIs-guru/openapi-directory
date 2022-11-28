from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteModel1PathParams:
    model_id: str = field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteModel1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteModel1Request:
    path_params: DeleteModel1PathParams = field()
    security: DeleteModel1Security = field()
    

@dataclass
class DeleteModel1Response:
    content_type: str = field()
    status_code: int = field()
    deletion_response: Optional[shared.DeletionResponse] = field(default=None)
    
