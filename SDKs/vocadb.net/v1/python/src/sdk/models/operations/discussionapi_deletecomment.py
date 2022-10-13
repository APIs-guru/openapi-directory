from dataclasses import dataclass, field



@dataclass
class DiscussionAPIDeleteCommentPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DiscussionAPIDeleteCommentRequest:
    path_params: DiscussionAPIDeleteCommentPathParams = field(default=None)
    

@dataclass
class DiscussionAPIDeleteCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
