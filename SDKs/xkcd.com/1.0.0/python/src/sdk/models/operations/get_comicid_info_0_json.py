from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetComicIDInfo0JSONPathParams:
    comic_id: float = field(metadata={'path_param': { 'field_name': 'comicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComicIDInfo0JSONRequest:
    path_params: GetComicIDInfo0JSONPathParams = field()
    

@dataclass
class GetComicIDInfo0JSONResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
