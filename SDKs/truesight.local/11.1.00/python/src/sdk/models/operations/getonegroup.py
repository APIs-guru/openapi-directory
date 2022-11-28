from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOneGroupPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOneGroupRequest:
    path_params: GetOneGroupPathParams = field()
    

@dataclass
class GetOneGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
