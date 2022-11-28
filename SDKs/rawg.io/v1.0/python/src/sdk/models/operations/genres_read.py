from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenresReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenresReadRequest:
    path_params: GenresReadPathParams = field()
    

@dataclass
class GenresReadResponse:
    content_type: str = field()
    status_code: int = field()
    genre_single: Optional[shared.GenreSingle] = field(default=None)
    
