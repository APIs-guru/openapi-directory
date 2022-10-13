from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class Get1PathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class Get1Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class Get1Request:
    path_params: Get1PathParams = field(default=None)
    security: Get1Security = field(default=None)
    

@dataclass
class Get1Response:
    content_type: str = field(default=None)
    deletion_response: Optional[shared.DeletionResponse] = field(default=None)
    status_code: int = field(default=None)
    
