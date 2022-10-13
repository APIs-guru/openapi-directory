from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GamesParentGamesListPathParams:
    game_pk: str = field(default=None, metadata={'path_param': { 'field_name': 'game_pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesParentGamesListQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GamesParentGamesListRequest:
    path_params: GamesParentGamesListPathParams = field(default=None)
    query_params: GamesParentGamesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GamesParentGamesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Game] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class GamesParentGamesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    games_parent_games_list_200_application_json_object: Optional[GamesParentGamesList200ApplicationJSON] = field(default=None)
    
