from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_outletgeolocation
from . import v3_status


@dataclass_json
@dataclass
class V3OutletGeolocationResponse:
    outlets: Optional[List[v3_outletgeolocation.V3OutletGeolocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlets' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
