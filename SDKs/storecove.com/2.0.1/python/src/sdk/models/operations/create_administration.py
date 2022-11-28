from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreateAdministrationPathParams:
    legal_entity_id: int = field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAdministrationRequest:
    path_params: CreateAdministrationPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAdministrationResponse:
    content_type: str = field()
    status_code: int = field()
    administration: Optional[Any] = field(default=None)
    error_models: Optional[List[Any]] = field(default=None)
    
