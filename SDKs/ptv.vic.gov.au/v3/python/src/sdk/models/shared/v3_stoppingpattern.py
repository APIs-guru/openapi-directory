from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3StoppingPattern:
    departures: Optional[List[V3PatternDeparture]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departures') }})
    directions: Optional[dict[str, V3Direction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directions') }})
    disruptions: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptions') }})
    routes: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    runs: Optional[dict[str, V3Run]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runs') }})
    status: Optional[V3Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stops: Optional[dict[str, V3StoppingPatternStop]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stops') }})
    
