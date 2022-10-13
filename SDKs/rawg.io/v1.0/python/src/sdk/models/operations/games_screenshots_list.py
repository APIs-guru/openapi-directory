from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GamesScreenshotsListPathParams:
    game_pk: str = field(default=None, metadata={'path_param': { 'field_name': 'game_pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesScreenshotsListQueryParams:
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GamesScreenshotsListRequest:
    path_params: GamesScreenshotsListPathParams = field(default=None)
    query_params: GamesScreenshotsListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GamesScreenshotsList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.ScreenShot] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class GamesScreenshotsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    games_screenshots_list_200_application_json_object: Optional[GamesScreenshotsList200ApplicationJSON] = field(default=None)
    
