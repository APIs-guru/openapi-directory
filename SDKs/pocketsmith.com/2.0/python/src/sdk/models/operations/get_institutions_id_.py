from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetInstitutionsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstitutionsIDRequest:
    path_params: GetInstitutionsIDPathParams = field(default=None)
    

@dataclass
class GetInstitutionsIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    institution: Optional[shared.Institution] = field(default=None)
    status_code: int = field(default=None)
    
