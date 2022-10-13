from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SongListAPIDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongListAPIDeleteQueryParams:
    hard_delete: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hardDelete', 'style': 'form', 'explode': True }})
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class SongListAPIDeleteRequest:
    path_params: SongListAPIDeletePathParams = field(default=None)
    query_params: SongListAPIDeleteQueryParams = field(default=None)
    

@dataclass
class SongListAPIDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
