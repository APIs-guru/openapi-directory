from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAdministrationPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdministrationRequest:
    path_params: GetAdministrationPathParams = field()
    

@dataclass
class GetAdministrationResponse:
    content_type: str = field()
    status_code: int = field()
    administration: Optional[Any] = field(default=None)
    
