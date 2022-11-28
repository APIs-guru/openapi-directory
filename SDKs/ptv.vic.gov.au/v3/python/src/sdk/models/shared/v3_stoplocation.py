from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3StopLocation:
    gps: Optional[V3StopGps] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gps') }})
    
