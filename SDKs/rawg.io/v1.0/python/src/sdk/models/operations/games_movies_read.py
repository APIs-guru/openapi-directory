from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesMoviesReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesMoviesReadRequest:
    path_params: GamesMoviesReadPathParams = field()
    

@dataclass
class GamesMoviesReadResponse:
    content_type: str = field()
    status_code: int = field()
    movie: Optional[shared.Movie] = field(default=None)
    
