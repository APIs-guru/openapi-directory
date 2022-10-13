from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_outlet
from . import v3_status


@dataclass_json
@dataclass
class V3OutletResponse:
    outlets: Optional[List[v3_outlet.V3Outlet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlets' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
