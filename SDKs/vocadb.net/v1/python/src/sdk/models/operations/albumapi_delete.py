from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AlbumAPIDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AlbumAPIDeleteQueryParams:
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIDeleteRequest:
    path_params: AlbumAPIDeletePathParams = field()
    query_params: AlbumAPIDeleteQueryParams = field()
    

@dataclass
class AlbumAPIDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
