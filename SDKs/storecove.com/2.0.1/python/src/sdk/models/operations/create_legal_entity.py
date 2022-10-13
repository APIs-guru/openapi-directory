from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateLegalEntityRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateLegalEntityResponse:
    content_type: str = field(default=None)
    error_models: Optional[List[Any]] = field(default=None)
    legal_entity: Optional[shared.LegalEntity] = field(default=None)
    status_code: int = field(default=None)
    
