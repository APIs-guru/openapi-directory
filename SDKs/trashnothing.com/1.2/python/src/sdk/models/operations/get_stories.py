from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetStoriesQueryParams:
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStoriesSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_code: Optional[shared.SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[shared.SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetStories200ApplicationJSON:
    stories: Optional[List[shared.Story]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stories') }})
    

@dataclass
class GetStoriesRequest:
    query_params: GetStoriesQueryParams = field()
    security: GetStoriesSecurity = field()
    

@dataclass
class GetStoriesResponse:
    content_type: str = field()
    status_code: int = field()
    get_stories_200_application_json_object: Optional[GetStories200ApplicationJSON] = field(default=None)
    
