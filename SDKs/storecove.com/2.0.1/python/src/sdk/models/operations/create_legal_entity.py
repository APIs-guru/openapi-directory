from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateLegalEntityRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateLegalEntityResponse:
    content_type: str = field()
    status_code: int = field()
    error_models: Optional[List[Any]] = field(default=None)
    legal_entity: Optional[shared.LegalEntity] = field(default=None)
    
