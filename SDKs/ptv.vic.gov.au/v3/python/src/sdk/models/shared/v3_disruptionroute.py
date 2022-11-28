from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3DisruptionRoute:
    direction: Optional[V3DisruptionDirection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    route_gtfs_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_gtfs_id') }})
    route_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_id') }})
    route_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_name') }})
    route_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_number') }})
    route_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_type') }})
    
