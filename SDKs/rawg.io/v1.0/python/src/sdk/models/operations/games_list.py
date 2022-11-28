from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GamesListQueryParams:
    creators: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'creators', 'style': 'form', 'explode': True }})
    dates: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dates', 'style': 'form', 'explode': True }})
    developers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'developers', 'style': 'form', 'explode': True }})
    exclude_additions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_additions', 'style': 'form', 'explode': True }})
    exclude_collection: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_collection', 'style': 'form', 'explode': True }})
    exclude_game_series: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_game_series', 'style': 'form', 'explode': True }})
    exclude_parents: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_parents', 'style': 'form', 'explode': True }})
    exclude_stores: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_stores', 'style': 'form', 'explode': True }})
    genres: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'genres', 'style': 'form', 'explode': True }})
    metacritic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'metacritic', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    parent_platforms: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent_platforms', 'style': 'form', 'explode': True }})
    platforms: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'platforms', 'style': 'form', 'explode': True }})
    platforms_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'platforms_count', 'style': 'form', 'explode': True }})
    publishers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'publishers', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    search_exact: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'search_exact', 'style': 'form', 'explode': True }})
    search_precise: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'search_precise', 'style': 'form', 'explode': True }})
    stores: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'stores', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    updated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updated', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GamesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.Game] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class GamesListRequest:
    query_params: GamesListQueryParams = field()
    

@dataclass
class GamesListResponse:
    content_type: str = field()
    status_code: int = field()
    games_list_200_application_json_object: Optional[GamesList200ApplicationJSON] = field(default=None)
    
