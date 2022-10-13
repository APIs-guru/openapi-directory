from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_resultoutlet
from . import v3_resultroute
from . import v3_status
from . import v3_resultstop


@dataclass_json
@dataclass
class V3SearchResult:
    outlets: Optional[List[v3_resultoutlet.V3ResultOutlet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlets' }})
    routes: Optional[List[v3_resultroute.V3ResultRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stops: Optional[List[v3_resultstop.V3ResultStop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stops' }})
    
