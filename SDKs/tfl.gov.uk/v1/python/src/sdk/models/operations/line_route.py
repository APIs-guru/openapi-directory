from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class LineRouteServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class LineRouteQueryParams:
    service_types: Optional[List[LineRouteServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class LineRouteRequest:
    query_params: LineRouteQueryParams = field()
    

@dataclass
class LineRouteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_lines: Optional[List[shared.TflAPIPresentationEntitiesLine]] = field(default=None)
    
