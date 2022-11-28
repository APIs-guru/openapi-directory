from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SongListAPIDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongListAPIDeleteQueryParams:
    hard_delete: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hardDelete', 'style': 'form', 'explode': True }})
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class SongListAPIDeleteRequest:
    path_params: SongListAPIDeletePathParams = field()
    query_params: SongListAPIDeleteQueryParams = field()
    

@dataclass
class SongListAPIDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
