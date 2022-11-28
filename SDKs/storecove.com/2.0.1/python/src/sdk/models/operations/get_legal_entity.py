from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLegalEntityPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLegalEntityRequest:
    path_params: GetLegalEntityPathParams = field()
    

@dataclass
class GetLegalEntityResponse:
    content_type: str = field()
    status_code: int = field()
    legal_entity: Optional[shared.LegalEntity] = field(default=None)
    
