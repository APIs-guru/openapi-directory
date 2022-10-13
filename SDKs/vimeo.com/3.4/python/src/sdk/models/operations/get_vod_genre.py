from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodGenrePathParams:
    genre_id: str = field(default=None, metadata={'path_param': { 'field_name': 'genre_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodGenreRequest:
    path_params: GetVodGenrePathParams = field(default=None)
    

@dataclass
class GetVodGenreResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_genre: Optional[shared.OnDemandGenre] = field(default=None)
    
