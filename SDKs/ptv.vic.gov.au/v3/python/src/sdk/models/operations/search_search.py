from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SearchSearchPathParams:
    search_term: str = field(metadata={'path_param': { 'field_name': 'search_term', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchSearchQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    include_addresses: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_addresses', 'style': 'form', 'explode': True }})
    include_outlets: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_outlets', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    match_route_by_suburb: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'match_route_by_suburb', 'style': 'form', 'explode': True }})
    match_stop_by_gtfs_stop_id: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'match_stop_by_gtfs_stop_id', 'style': 'form', 'explode': True }})
    match_stop_by_suburb: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'match_stop_by_suburb', 'style': 'form', 'explode': True }})
    max_distance: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_distance', 'style': 'form', 'explode': True }})
    route_types: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'route_types', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchSearchRequest:
    path_params: SearchSearchPathParams = field()
    query_params: SearchSearchQueryParams = field()
    

@dataclass
class SearchSearchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_search_result: Optional[shared.V3SearchResult] = field(default=None)
    
