from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_lineroutesection
from . import tfl_api_presentation_entities_matchedroutesections
from . import tfl_api_presentation_entities_matchedstop


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesRouteSearchMatch:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineId' }})
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineName' }})
    line_route_section: Optional[List[tfl_api_presentation_entities_lineroutesection.TflAPIPresentationEntitiesLineRouteSection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineRouteSection' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    matched_route_sections: Optional[List[tfl_api_presentation_entities_matchedroutesections.TflAPIPresentationEntitiesMatchedRouteSections]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedRouteSections' }})
    matched_stops: Optional[List[tfl_api_presentation_entities_matchedstop.TflAPIPresentationEntitiesMatchedStop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedStops' }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
