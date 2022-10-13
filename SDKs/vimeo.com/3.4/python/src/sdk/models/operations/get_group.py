from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGroupPathParams:
    group_id: float = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupRequest:
    path_params: GetGroupPathParams = field(default=None)
    

@dataclass
class GetGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    
