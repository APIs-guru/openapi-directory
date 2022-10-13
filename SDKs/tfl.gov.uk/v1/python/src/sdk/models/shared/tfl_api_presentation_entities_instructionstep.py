from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_pathattribute

class TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum(str, Enum):
    NORTH = "North"
    NORTH_EAST = "NorthEast"
    EAST = "East"
    SOUTH_EAST = "SouthEast"
    SOUTH = "South"
    SOUTH_WEST = "SouthWest"
    WEST = "West"
    NORTH_WEST = "NorthWest"

class TflAPIPresentationEntitiesInstructionStepTrackTypeEnum(str, Enum):
    CYCLE_SUPER_HIGHWAY = "CycleSuperHighway"
    CANAL_TOWPATH = "CanalTowpath"
    QUIET_ROAD = "QuietRoad"
    PROVISION_FOR_CYCLISTS = "ProvisionForCyclists"
    BUSY_ROADS = "BusyRoads"
    NONE = "None"
    PUSH_BIKE = "PushBike"
    QUIETWAY = "Quietway"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesInstructionStep:
    cumulative_distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulativeDistance' }})
    cumulative_travel_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulativeTravelTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    description_heading: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptionHeading' }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    path_attribute: Optional[tfl_api_presentation_entities_pathattribute.TflAPIPresentationEntitiesPathAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathAttribute' }})
    sky_direction: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skyDirection' }})
    sky_direction_description: Optional[TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skyDirectionDescription' }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streetName' }})
    track_type: Optional[TflAPIPresentationEntitiesInstructionStepTrackTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackType' }})
    turn_direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'turnDirection' }})
    
