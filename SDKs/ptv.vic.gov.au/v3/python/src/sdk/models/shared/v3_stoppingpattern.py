from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import v3_patterndeparture
from . import v3_direction
from . import v3_disruption
from . import v3_run
from . import v3_status
from . import v3_stoppingpatternstop


@dataclass_json
@dataclass
class V3StoppingPattern:
    departures: Optional[List[v3_patterndeparture.V3PatternDeparture]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departures' }})
    directions: Optional[dict[str, v3_direction.V3Direction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directions' }})
    disruptions: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruptions' }})
    routes: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    runs: Optional[dict[str, v3_run.V3Run]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runs' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stops: Optional[dict[str, v3_stoppingpatternstop.V3StoppingPatternStop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stops' }})
    
