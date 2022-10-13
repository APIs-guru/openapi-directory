from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_identifier


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesMatchedStop:
    accessibility_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessibilitySummary' }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    has_disruption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasDisruption' }})
    ics_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icsId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lines: Optional[List[tfl_api_presentation_entities_identifier.TflAPIPresentationEntitiesIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lines' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    modes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    route_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeId' }})
    station_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stationId' }})
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stop_letter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopLetter' }})
    stop_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopType' }})
    top_most_parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topMostParentId' }})
    towards: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'towards' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
