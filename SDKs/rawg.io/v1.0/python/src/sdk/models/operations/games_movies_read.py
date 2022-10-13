from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesMoviesReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesMoviesReadRequest:
    path_params: GamesMoviesReadPathParams = field(default=None)
    

@dataclass
class GamesMoviesReadResponse:
    content_type: str = field(default=None)
    movie: Optional[shared.Movie] = field(default=None)
    status_code: int = field(default=None)
    
