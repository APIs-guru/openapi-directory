from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SearchGroupsQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    distance: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'distance', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    postal_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'postal_code', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchGroupsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_code: Optional[shared.SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[shared.SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class SearchGroups200ApplicationJSON:
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_index') }})
    groups: Optional[List[shared.Group]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    num_groups: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_groups') }})
    num_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_pages') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_index') }})
    

@dataclass
class SearchGroupsRequest:
    query_params: SearchGroupsQueryParams = field()
    security: SearchGroupsSecurity = field()
    

@dataclass
class SearchGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    search_groups_200_application_json_object: Optional[SearchGroups200ApplicationJSON] = field(default=None)
    
