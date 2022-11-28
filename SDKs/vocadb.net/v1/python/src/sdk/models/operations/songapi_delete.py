from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SongAPIDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongAPIDeleteQueryParams:
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIDeleteRequest:
    path_params: SongAPIDeletePathParams = field()
    query_params: SongAPIDeleteQueryParams = field()
    

@dataclass
class SongAPIDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
