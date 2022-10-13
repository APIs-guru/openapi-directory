from dataclasses import dataclass, field



@dataclass
class UserAPIPostFollowedTagPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIPostFollowedTagRequest:
    path_params: UserAPIPostFollowedTagPathParams = field(default=None)
    

@dataclass
class UserAPIPostFollowedTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
