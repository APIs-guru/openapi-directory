from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GamesGameSeriesListPathParams:
    game_pk: str = field(default=None, metadata={'path_param': { 'field_name': 'game_pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesGameSeriesListQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GamesGameSeriesListRequest:
    path_params: GamesGameSeriesListPathParams = field(default=None)
    query_params: GamesGameSeriesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GamesGameSeriesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Game] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class GamesGameSeriesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    games_game_series_list_200_application_json_object: Optional[GamesGameSeriesList200ApplicationJSON] = field(default=None)
    
