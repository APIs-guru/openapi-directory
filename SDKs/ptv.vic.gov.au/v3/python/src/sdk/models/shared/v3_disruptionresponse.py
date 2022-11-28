from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3DisruptionResponse:
    disruption: Optional[V3Disruption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption') }})
    status: Optional[V3Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
