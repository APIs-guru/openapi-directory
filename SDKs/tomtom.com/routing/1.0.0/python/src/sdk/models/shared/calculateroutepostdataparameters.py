from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner:
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner:
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class CalculateRoutePostDataParametersAvoidAreasRectangles:
    north_east_corner: Optional[CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'northEastCorner' }})
    south_west_corner: Optional[CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'southWestCorner' }})
    

@dataclass_json
@dataclass
class CalculateRoutePostDataParametersAvoidAreas:
    rectangles: Optional[List[CalculateRoutePostDataParametersAvoidAreasRectangles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rectangles' }})
    

@dataclass_json
@dataclass
class CalculateRoutePostDataParameters:
    allow_vignette: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowVignette' }})
    avoid_areas: Optional[CalculateRoutePostDataParametersAvoidAreas] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avoidAreas' }})
    avoid_vignette: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avoidVignette' }})
    supporting_points: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportingPoints' }})
    
