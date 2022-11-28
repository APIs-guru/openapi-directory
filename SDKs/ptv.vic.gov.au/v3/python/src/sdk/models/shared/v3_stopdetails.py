from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3StopDetails:
    disruption_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption_ids') }})
    route_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_type') }})
    routes: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    station_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('station_description') }})
    station_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('station_type') }})
    stop_accessibility: Optional[V3StopAccessibility] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_accessibility') }})
    stop_amenities: Optional[V3StopAmenityDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_amenities') }})
    stop_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_id') }})
    stop_landmark: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_landmark') }})
    stop_location: Optional[V3StopLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_location') }})
    stop_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_name') }})
    stop_staffing: Optional[V3StopStaffing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_staffing') }})
    
