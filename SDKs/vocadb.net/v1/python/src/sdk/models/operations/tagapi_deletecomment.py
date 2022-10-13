from dataclasses import dataclass, field



@dataclass
class TagAPIDeleteCommentPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagAPIDeleteCommentRequest:
    path_params: TagAPIDeleteCommentPathParams = field(default=None)
    

@dataclass
class TagAPIDeleteCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
