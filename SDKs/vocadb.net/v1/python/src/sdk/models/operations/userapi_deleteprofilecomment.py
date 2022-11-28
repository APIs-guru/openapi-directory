from dataclasses import dataclass, field



@dataclass
class UserAPIDeleteProfileCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIDeleteProfileCommentRequest:
    path_params: UserAPIDeleteProfileCommentPathParams = field()
    

@dataclass
class UserAPIDeleteProfileCommentResponse:
    content_type: str = field()
    status_code: int = field()
    
