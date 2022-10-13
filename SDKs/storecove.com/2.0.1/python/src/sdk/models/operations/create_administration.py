from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreateAdministrationPathParams:
    legal_entity_id: int = field(default=None, metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAdministrationRequest:
    path_params: CreateAdministrationPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAdministrationResponse:
    administration: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    error_models: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
