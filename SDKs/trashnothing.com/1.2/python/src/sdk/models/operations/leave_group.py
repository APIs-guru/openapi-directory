from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LeaveGroupPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeaveGroupRequest:
    path_params: LeaveGroupPathParams = field()
    

@dataclass
class LeaveGroupResponse:
    content_type: str = field()
    status_code: int = field()
    group: Optional[shared.Group] = field(default=None)
    
