from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class LineRouteByModePathParams:
    modes: List[str] = field(metadata={'path_param': { 'field_name': 'modes', 'style': 'simple', 'explode': False }})
    
class LineRouteByModeServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class LineRouteByModeQueryParams:
    service_types: Optional[List[LineRouteByModeServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class LineRouteByModeRequest:
    path_params: LineRouteByModePathParams = field()
    query_params: LineRouteByModeQueryParams = field()
    

@dataclass
class LineRouteByModeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_lines: Optional[List[shared.TflAPIPresentationEntitiesLine]] = field(default=None)
    
