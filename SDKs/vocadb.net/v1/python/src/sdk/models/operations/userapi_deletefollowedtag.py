from dataclasses import dataclass, field



@dataclass
class UserAPIDeleteFollowedTagPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIDeleteFollowedTagRequest:
    path_params: UserAPIDeleteFollowedTagPathParams = field()
    

@dataclass
class UserAPIDeleteFollowedTagResponse:
    content_type: str = field()
    status_code: int = field()
    
