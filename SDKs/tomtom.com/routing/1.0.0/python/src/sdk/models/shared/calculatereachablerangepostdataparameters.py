from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner:
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner:
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class CalculateReachableRangePostDataParametersAvoidAreasRectangles:
    north_east_corner: Optional[CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'northEastCorner' }})
    south_west_corner: Optional[CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'southWestCorner' }})
    

@dataclass_json
@dataclass
class CalculateReachableRangePostDataParametersAvoidAreas:
    rectangles: Optional[List[CalculateReachableRangePostDataParametersAvoidAreasRectangles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rectangles' }})
    

@dataclass_json
@dataclass
class CalculateReachableRangePostDataParameters:
    allow_vignette: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowVignette' }})
    avoid_areas: Optional[CalculateReachableRangePostDataParametersAvoidAreas] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avoidAreas' }})
    avoid_vignette: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avoidVignette' }})
    
