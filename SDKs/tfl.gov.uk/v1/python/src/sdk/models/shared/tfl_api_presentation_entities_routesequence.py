from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesRouteSequence:
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    is_outbound_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOutboundOnly') }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineId') }})
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineName') }})
    line_strings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineStrings') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    ordered_line_routes: Optional[List[TflAPIPresentationEntitiesOrderedRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderedLineRoutes') }})
    stations: Optional[List[TflAPIPresentationEntitiesMatchedStop]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stations') }})
    stop_point_sequences: Optional[List[TflAPIPresentationEntitiesStopPointSequence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopPointSequences') }})
    
