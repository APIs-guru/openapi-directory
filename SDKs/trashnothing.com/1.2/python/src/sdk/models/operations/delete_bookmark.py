from dataclasses import dataclass, field



@dataclass
class DeleteBookmarkPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBookmarkRequest:
    path_params: DeleteBookmarkPathParams = field()
    

@dataclass
class DeleteBookmarkResponse:
    content_type: str = field()
    status_code: int = field()
    
