from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointGetByGeoPointQueryParams:
    location_lat: float = field(metadata={'query_param': { 'field_name': 'location.lat', 'style': 'form', 'explode': True }})
    location_lon: float = field(metadata={'query_param': { 'field_name': 'location.lon', 'style': 'form', 'explode': True }})
    stop_types: List[str] = field(metadata={'query_param': { 'field_name': 'stopTypes', 'style': 'form', 'explode': True }})
    categories: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'categories', 'style': 'form', 'explode': True }})
    modes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'modes', 'style': 'form', 'explode': True }})
    radius: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    return_lines: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'returnLines', 'style': 'form', 'explode': True }})
    use_stop_point_hierarchy: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useStopPointHierarchy', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointGetByGeoPointRequest:
    query_params: StopPointGetByGeoPointQueryParams = field()
    

@dataclass
class StopPointGetByGeoPointResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_stop_points_response: Optional[shared.TflAPIPresentationEntitiesStopPointsResponse] = field(default=None)
    
