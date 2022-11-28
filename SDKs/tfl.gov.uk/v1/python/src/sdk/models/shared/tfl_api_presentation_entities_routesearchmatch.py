from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesRouteSearchMatch:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineId') }})
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineName') }})
    line_route_section: Optional[List[TflAPIPresentationEntitiesLineRouteSection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineRouteSection') }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    matched_route_sections: Optional[List[TflAPIPresentationEntitiesMatchedRouteSections]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedRouteSections') }})
    matched_stops: Optional[List[TflAPIPresentationEntitiesMatchedStop]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedStops') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
