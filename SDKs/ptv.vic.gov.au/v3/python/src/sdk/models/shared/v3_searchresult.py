from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3SearchResult:
    outlets: Optional[List[V3ResultOutlet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outlets') }})
    routes: Optional[List[V3ResultRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    status: Optional[V3Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stops: Optional[List[V3ResultStop]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stops') }})
    
