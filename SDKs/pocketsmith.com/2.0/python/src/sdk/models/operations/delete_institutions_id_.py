from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteInstitutionsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInstitutionsIDRequest:
    path_params: DeleteInstitutionsIDPathParams = field(default=None)
    

@dataclass
class DeleteInstitutionsIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
