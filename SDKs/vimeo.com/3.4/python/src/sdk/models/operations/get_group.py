from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGroupPathParams:
    group_id: float = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupRequest:
    path_params: GetGroupPathParams = field()
    

@dataclass
class GetGroupResponse:
    content_type: str = field()
    status_code: int = field()
    group: Optional[shared.Group] = field(default=None)
    
