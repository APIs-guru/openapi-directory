from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointSearchPathParams:
    query: str = field(default=None, metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointSearchQueryParams:
    fares_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'faresOnly', 'style': 'form', 'explode': True }})
    include_hubs: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeHubs', 'style': 'form', 'explode': True }})
    lines: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'lines', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    modes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'modes', 'style': 'form', 'explode': True }})
    tfl_operated_national_rail_stations_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'tflOperatedNationalRailStationsOnly', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointSearchRequest:
    path_params: StopPointSearchPathParams = field(default=None)
    query_params: StopPointSearchQueryParams = field(default=None)
    

@dataclass
class StopPointSearchResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_search_response: Optional[shared.TflAPIPresentationEntitiesSearchResponse] = field(default=None)
    
