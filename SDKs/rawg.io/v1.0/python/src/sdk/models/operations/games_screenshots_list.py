from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GamesScreenshotsListPathParams:
    game_pk: str = field(metadata={'path_param': { 'field_name': 'game_pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesScreenshotsListQueryParams:
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GamesScreenshotsList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.ScreenShot] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class GamesScreenshotsListRequest:
    path_params: GamesScreenshotsListPathParams = field()
    query_params: GamesScreenshotsListQueryParams = field()
    

@dataclass
class GamesScreenshotsListResponse:
    content_type: str = field()
    status_code: int = field()
    games_screenshots_list_200_application_json_object: Optional[GamesScreenshotsList200ApplicationJSON] = field(default=None)
    
