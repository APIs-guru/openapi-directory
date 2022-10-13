from dataclasses import dataclass, field



@dataclass
class GetOneGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOneGroupRequest:
    path_params: GetOneGroupPathParams = field(default=None)
    

@dataclass
class GetOneGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
