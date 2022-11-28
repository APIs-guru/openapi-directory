from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum


@dataclass
class TravelTimeGetOverlayPathParams:
    height: int = field(metadata={'path_param': { 'field_name': 'height', 'style': 'simple', 'explode': False }})
    map_center_lat: float = field(metadata={'path_param': { 'field_name': 'mapCenterLat', 'style': 'simple', 'explode': False }})
    map_center_lon: float = field(metadata={'path_param': { 'field_name': 'mapCenterLon', 'style': 'simple', 'explode': False }})
    pin_lat: float = field(metadata={'path_param': { 'field_name': 'pinLat', 'style': 'simple', 'explode': False }})
    pin_lon: float = field(metadata={'path_param': { 'field_name': 'pinLon', 'style': 'simple', 'explode': False }})
    width: int = field(metadata={'path_param': { 'field_name': 'width', 'style': 'simple', 'explode': False }})
    z: int = field(metadata={'path_param': { 'field_name': 'z', 'style': 'simple', 'explode': False }})
    
class TravelTimeGetOverlayDirectionEnum(str, Enum):
    AVERAGE = "Average"
    FROM = "From"
    TO = "To"


@dataclass
class TravelTimeGetOverlayQueryParams:
    direction: TravelTimeGetOverlayDirectionEnum = field(metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    mode_id: str = field(metadata={'query_param': { 'field_name': 'modeId', 'style': 'form', 'explode': True }})
    scenario_title: str = field(metadata={'query_param': { 'field_name': 'scenarioTitle', 'style': 'form', 'explode': True }})
    time_of_day_id: str = field(metadata={'query_param': { 'field_name': 'timeOfDayId', 'style': 'form', 'explode': True }})
    travel_time_interval: int = field(metadata={'query_param': { 'field_name': 'travelTimeInterval', 'style': 'form', 'explode': True }})
    

@dataclass
class TravelTimeGetOverlayRequest:
    path_params: TravelTimeGetOverlayPathParams = field()
    query_params: TravelTimeGetOverlayQueryParams = field()
    

@dataclass
class TravelTimeGetOverlayResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
