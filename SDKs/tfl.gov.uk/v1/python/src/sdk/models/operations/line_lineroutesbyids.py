from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class LineLineRoutesByIdsPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    
class LineLineRoutesByIdsServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class LineLineRoutesByIdsQueryParams:
    service_types: Optional[List[LineLineRoutesByIdsServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class LineLineRoutesByIdsRequest:
    path_params: LineLineRoutesByIdsPathParams = field()
    query_params: LineLineRoutesByIdsQueryParams = field()
    

@dataclass
class LineLineRoutesByIdsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_lines: Optional[List[shared.TflAPIPresentationEntitiesLine]] = field(default=None)
    
