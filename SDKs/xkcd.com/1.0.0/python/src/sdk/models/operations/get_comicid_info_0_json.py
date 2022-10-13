from dataclasses import dataclass, field



@dataclass
class GetComicIDInfo0JSONPathParams:
    comic_id: float = field(default=None, metadata={'path_param': { 'field_name': 'comicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComicIDInfo0JSONRequest:
    path_params: GetComicIDInfo0JSONPathParams = field(default=None)
    

@dataclass
class GetComicIDInfo0JSONResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
