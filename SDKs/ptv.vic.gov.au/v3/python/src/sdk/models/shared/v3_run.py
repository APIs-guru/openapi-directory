from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3Run:
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_name') }})
    direction_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction_id') }})
    express_stop_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('express_stop_count') }})
    final_stop_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('final_stop_id') }})
    geopath: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geopath') }})
    route_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_id') }})
    route_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_type') }})
    run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_id') }})
    run_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_ref') }})
    run_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_sequence') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    vehicle_descriptor: Optional[V3VehicleDescriptor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_descriptor') }})
    vehicle_position: Optional[V3VehiclePosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_position') }})
    
