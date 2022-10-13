from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
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
class GetStoriesSecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStoriesSecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStoriesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetStoriesSecurity:
    option1: Optional[GetStoriesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetStoriesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetStoriesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetStoriesRequest:
    query_params: GetStoriesQueryParams = field(default=None)
    security: GetStoriesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetStories200ApplicationJSON:
    stories: Optional[List[shared.Story]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stories' }})
    

@dataclass
class GetStoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_stories_200_application_json_object: Optional[GetStories200ApplicationJSON] = field(default=None)
    
