from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PlaceGetOverlayPathParams:
    lat: str = field(metadata={'path_param': { 'field_name': 'Lat', 'style': 'simple', 'explode': False }})
    lon: str = field(metadata={'path_param': { 'field_name': 'Lon', 'style': 'simple', 'explode': False }})
    height: int = field(metadata={'path_param': { 'field_name': 'height', 'style': 'simple', 'explode': False }})
    type: List[str] = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    width: int = field(metadata={'path_param': { 'field_name': 'width', 'style': 'simple', 'explode': False }})
    z: int = field(metadata={'path_param': { 'field_name': 'z', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlaceGetOverlayQueryParams:
    lat: str = field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    location_lat: float = field(metadata={'query_param': { 'field_name': 'location.lat', 'style': 'form', 'explode': True }})
    location_lon: float = field(metadata={'query_param': { 'field_name': 'location.lon', 'style': 'form', 'explode': True }})
    lon: str = field(metadata={'query_param': { 'field_name': 'lon', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaceGetOverlayRequest:
    path_params: PlaceGetOverlayPathParams = field()
    query_params: PlaceGetOverlayQueryParams = field()
    

@dataclass
class PlaceGetOverlayResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
