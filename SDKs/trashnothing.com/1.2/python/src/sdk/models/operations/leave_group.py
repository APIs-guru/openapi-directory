from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LeaveGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeaveGroupRequest:
    path_params: LeaveGroupPathParams = field(default=None)
    

@dataclass
class LeaveGroupResponse:
    content_type: str = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
