from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SongAPIDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongAPIDeleteQueryParams:
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIDeleteRequest:
    path_params: SongAPIDeletePathParams = field(default=None)
    query_params: SongAPIDeleteQueryParams = field(default=None)
    

@dataclass
class SongAPIDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
