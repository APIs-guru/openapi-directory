from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteInstitutionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInstitutionsIDRequest:
    path_params: DeleteInstitutionsIDPathParams = field()
    

@dataclass
class DeleteInstitutionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
