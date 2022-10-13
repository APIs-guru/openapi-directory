from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDInstitutionsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDInstitutionsRequest:
    path_params: GetUsersIDInstitutionsPathParams = field(default=None)
    

@dataclass
class GetUsersIDInstitutionsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    institutions: Optional[List[shared.Institution]] = field(default=None)
    status_code: int = field(default=None)
    
