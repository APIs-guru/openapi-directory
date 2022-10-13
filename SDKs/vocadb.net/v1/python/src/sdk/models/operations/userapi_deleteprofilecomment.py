from dataclasses import dataclass, field



@dataclass
class UserAPIDeleteProfileCommentPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIDeleteProfileCommentRequest:
    path_params: UserAPIDeleteProfileCommentPathParams = field(default=None)
    

@dataclass
class UserAPIDeleteProfileCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
