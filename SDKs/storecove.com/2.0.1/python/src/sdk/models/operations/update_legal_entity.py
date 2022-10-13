from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdateLegalEntityPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLegalEntityRequest:
    path_params: UpdateLegalEntityPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLegalEntityResponse:
    content_type: str = field(default=None)
    error_models: Optional[List[Any]] = field(default=None)
    legal_entity: Optional[shared.LegalEntity] = field(default=None)
    status_code: int = field(default=None)
    
