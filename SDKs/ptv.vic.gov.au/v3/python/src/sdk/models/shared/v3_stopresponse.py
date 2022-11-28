from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3StopResponse:
    disruptions: Optional[dict[str, V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptions') }})
    status: Optional[V3Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stop: Optional[V3StopDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop') }})
    
