from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class LineRouteServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class LineRouteQueryParams:
    service_types: Optional[List[LineRouteServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class LineRouteRequest:
    query_params: LineRouteQueryParams = field(default=None)
    

@dataclass
class LineRouteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_lines: Optional[List[shared.TflAPIPresentationEntitiesLine]] = field(default=None)
    
