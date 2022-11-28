from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreatePeppolIdentifierPathParams:
    legal_entity_id: int = field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePeppolIdentifierRequest:
    path_params: CreatePeppolIdentifierPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePeppolIdentifierResponse:
    content_type: str = field()
    status_code: int = field()
    error_models: Optional[List[Any]] = field(default=None)
    peppol_identifier: Optional[Any] = field(default=None)
    
