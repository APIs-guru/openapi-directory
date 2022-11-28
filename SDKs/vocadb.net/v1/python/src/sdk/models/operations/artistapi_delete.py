from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ArtistAPIDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArtistAPIDeleteQueryParams:
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class ArtistAPIDeleteRequest:
    path_params: ArtistAPIDeletePathParams = field()
    query_params: ArtistAPIDeleteQueryParams = field()
    

@dataclass
class ArtistAPIDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
