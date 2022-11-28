from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetInstitutionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstitutionsIDRequest:
    path_params: GetInstitutionsIDPathParams = field()
    

@dataclass
class GetInstitutionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    institution: Optional[shared.Institution] = field(default=None)
    
