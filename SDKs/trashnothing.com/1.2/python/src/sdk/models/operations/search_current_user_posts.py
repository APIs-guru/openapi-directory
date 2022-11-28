from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SearchCurrentUserPostsQueryParams:
    search: str = field(metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sources: str = field(metadata={'query_param': { 'field_name': 'sources', 'style': 'form', 'explode': True }})
    types: str = field(metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': True }})
    date_max: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_max', 'style': 'form', 'explode': True }})
    date_min: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_min', 'style': 'form', 'explode': True }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    group_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_ids', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    outcomes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outcomes', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    radius: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    user_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_state', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SearchCurrentUserPosts200ApplicationJSON:
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_index') }})
    group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_ids') }})
    num_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_pages') }})
    num_posts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_posts') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    posts: Optional[List[shared.PostSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posts') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_index') }})
    

@dataclass
class SearchCurrentUserPostsRequest:
    query_params: SearchCurrentUserPostsQueryParams = field()
    

@dataclass
class SearchCurrentUserPostsResponse:
    content_type: str = field()
    status_code: int = field()
    search_current_user_posts_200_application_json_object: Optional[SearchCurrentUserPosts200ApplicationJSON] = field(default=None)
    
