from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3StopsOnRouteResponse:
    disruptions: Optional[dict[str, V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptions') }})
    geopath: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geopath') }})
    status: Optional[V3Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stops: Optional[List[V3StopOnRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stops') }})
    
