from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class V3StopGeosearch:
    disruption_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption_ids') }})
    route_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_type') }})
    routes: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    stop_distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_distance') }})
    stop_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_id') }})
    stop_landmark: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_landmark') }})
    stop_latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_latitude') }})
    stop_longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_longitude') }})
    stop_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_name') }})
    stop_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_sequence') }})
    stop_suburb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_suburb') }})
    
