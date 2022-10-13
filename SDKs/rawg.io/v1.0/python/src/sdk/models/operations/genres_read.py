from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenresReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenresReadRequest:
    path_params: GenresReadPathParams = field(default=None)
    

@dataclass
class GenresReadResponse:
    content_type: str = field(default=None)
    genre_single: Optional[shared.GenreSingle] = field(default=None)
    status_code: int = field(default=None)
    
