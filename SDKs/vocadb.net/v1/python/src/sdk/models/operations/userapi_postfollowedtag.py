from dataclasses import dataclass, field



@dataclass
class UserAPIPostFollowedTagPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIPostFollowedTagRequest:
    path_params: UserAPIPostFollowedTagPathParams = field()
    

@dataclass
class UserAPIPostFollowedTagResponse:
    content_type: str = field()
    status_code: int = field()
    
