from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAdministrationPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = field(default=None, metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdministrationRequest:
    path_params: GetAdministrationPathParams = field(default=None)
    

@dataclass
class GetAdministrationResponse:
    administration: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
