from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRolesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRolesRequest:
    path_params: GetRolesPathParams = field()
    

@dataclass
class GetRolesResponse:
    content_type: str = field()
    status_code: int = field()
    calls: Optional[List[shared.Call]] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
