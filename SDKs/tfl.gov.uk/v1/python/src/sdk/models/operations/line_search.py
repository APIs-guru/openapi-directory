from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class LineSearchPathParams:
    query: str = field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    
class LineSearchServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class LineSearchQueryParams:
    modes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'modes', 'style': 'form', 'explode': True }})
    service_types: Optional[List[LineSearchServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class LineSearchRequest:
    path_params: LineSearchPathParams = field()
    query_params: LineSearchQueryParams = field()
    

@dataclass
class LineSearchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_route_search_response: Optional[shared.TflAPIPresentationEntitiesRouteSearchResponse] = field(default=None)
    
