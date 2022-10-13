from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class TravelTimeGetOverlayPathParams:
    height: int = field(default=None, metadata={'path_param': { 'field_name': 'height', 'style': 'simple', 'explode': False }})
    map_center_lat: float = field(default=None, metadata={'path_param': { 'field_name': 'mapCenterLat', 'style': 'simple', 'explode': False }})
    map_center_lon: float = field(default=None, metadata={'path_param': { 'field_name': 'mapCenterLon', 'style': 'simple', 'explode': False }})
    pin_lat: float = field(default=None, metadata={'path_param': { 'field_name': 'pinLat', 'style': 'simple', 'explode': False }})
    pin_lon: float = field(default=None, metadata={'path_param': { 'field_name': 'pinLon', 'style': 'simple', 'explode': False }})
    width: int = field(default=None, metadata={'path_param': { 'field_name': 'width', 'style': 'simple', 'explode': False }})
    z: int = field(default=None, metadata={'path_param': { 'field_name': 'z', 'style': 'simple', 'explode': False }})
    
class TravelTimeGetOverlayDirectionEnum(str, Enum):
    AVERAGE = "Average"
    FROM = "From"
    TO = "To"


@dataclass
class TravelTimeGetOverlayQueryParams:
    direction: TravelTimeGetOverlayDirectionEnum = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    mode_id: str = field(default=None, metadata={'query_param': { 'field_name': 'modeId', 'style': 'form', 'explode': True }})
    scenario_title: str = field(default=None, metadata={'query_param': { 'field_name': 'scenarioTitle', 'style': 'form', 'explode': True }})
    time_of_day_id: str = field(default=None, metadata={'query_param': { 'field_name': 'timeOfDayId', 'style': 'form', 'explode': True }})
    travel_time_interval: int = field(default=None, metadata={'query_param': { 'field_name': 'travelTimeInterval', 'style': 'form', 'explode': True }})
    

@dataclass
class TravelTimeGetOverlayRequest:
    path_params: TravelTimeGetOverlayPathParams = field(default=None)
    query_params: TravelTimeGetOverlayQueryParams = field(default=None)
    

@dataclass
class TravelTimeGetOverlayResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
