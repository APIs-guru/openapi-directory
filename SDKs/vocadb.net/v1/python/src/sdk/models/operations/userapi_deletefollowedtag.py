from dataclasses import dataclass, field



@dataclass
class UserAPIDeleteFollowedTagPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIDeleteFollowedTagRequest:
    path_params: UserAPIDeleteFollowedTagPathParams = field(default=None)
    

@dataclass
class UserAPIDeleteFollowedTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
