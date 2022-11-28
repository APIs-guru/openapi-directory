from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVodGenresByOndemandIDPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodGenresByOndemandIDRequest:
    path_params: GetVodGenresByOndemandIDPathParams = field()
    

@dataclass
class GetVodGenresByOndemandIDResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_genres: Optional[List[shared.OnDemandGenre]] = field(default=None)
    
