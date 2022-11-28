from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodGenreByOndemandIDPathParams:
    genre_id: str = field(metadata={'path_param': { 'field_name': 'genre_id', 'style': 'simple', 'explode': False }})
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodGenreByOndemandIDRequest:
    path_params: GetVodGenreByOndemandIDPathParams = field()
    

@dataclass
class GetVodGenreByOndemandIDResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_genre: Optional[shared.OnDemandGenre] = field(default=None)
    
