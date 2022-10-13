from dataclasses import dataclass, field



@dataclass
class DeleteBookmarkPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBookmarkRequest:
    path_params: DeleteBookmarkPathParams = field(default=None)
    

@dataclass
class DeleteBookmarkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
