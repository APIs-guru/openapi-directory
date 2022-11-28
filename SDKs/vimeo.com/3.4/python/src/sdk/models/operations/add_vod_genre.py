from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVodGenrePathParams:
    genre_id: str = field(metadata={'path_param': { 'field_name': 'genre_id', 'style': 'simple', 'explode': False }})
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVodGenreSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVodGenreRequest:
    path_params: AddVodGenrePathParams = field()
    security: AddVodGenreSecurity = field()
    

@dataclass
class AddVodGenreResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_genre: Optional[shared.OnDemandGenre] = field(default=None)
    
