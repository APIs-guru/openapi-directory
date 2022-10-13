from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_crowding

class TflAPIPresentationEntitiesIdentifierRouteTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    ALL = "All"
    CYCLE_SUPERHIGHWAYS = "Cycle Superhighways"
    QUIETWAYS = "Quietways"
    CYCLEWAYS = "Cycleways"
    MINI_HOLLANDS = "Mini-Hollands"
    CENTRAL_LONDON_GRID = "Central London Grid"
    STREETSPACE_ROUTE = "Streetspace Route"

class TflAPIPresentationEntitiesIdentifierStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    ALL = "All"
    OPEN = "Open"
    IN_PROGRESS = "In Progress"
    PLANNED = "Planned"
    PLANNED_SUBJECT_TO_FEASIBILITY_AND_CONSULTATION_ = "Planned - Subject to feasibility and consultation."
    NOT_OPEN = "Not Open"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesIdentifier:
    crowding: Optional[tfl_api_presentation_entities_crowding.TflAPIPresentationEntitiesCrowding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crowding' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    route_type: Optional[TflAPIPresentationEntitiesIdentifierRouteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeType' }})
    status: Optional[TflAPIPresentationEntitiesIdentifierStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
