from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ArtistAPIDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArtistAPIDeleteQueryParams:
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class ArtistAPIDeleteRequest:
    path_params: ArtistAPIDeletePathParams = field(default=None)
    query_params: ArtistAPIDeleteQueryParams = field(default=None)
    

@dataclass
class ArtistAPIDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
