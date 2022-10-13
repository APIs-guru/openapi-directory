from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLegalEntityPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLegalEntityRequest:
    path_params: GetLegalEntityPathParams = field(default=None)
    

@dataclass
class GetLegalEntityResponse:
    content_type: str = field(default=None)
    legal_entity: Optional[shared.LegalEntity] = field(default=None)
    status_code: int = field(default=None)
    
