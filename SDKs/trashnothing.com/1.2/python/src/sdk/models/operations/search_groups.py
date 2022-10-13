from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
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
class SearchGroupsSecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchGroupsSecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchGroupsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class SearchGroupsSecurity:
    option1: Optional[SearchGroupsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SearchGroupsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[SearchGroupsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SearchGroupsRequest:
    query_params: SearchGroupsQueryParams = field(default=None)
    security: SearchGroupsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class SearchGroups200ApplicationJSON:
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_index' }})
    groups: Optional[List[shared.Group]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    num_groups: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_groups' }})
    num_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_pages' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_index' }})
    

@dataclass
class SearchGroupsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    search_groups_200_application_json_object: Optional[SearchGroups200ApplicationJSON] = field(default=None)
    
