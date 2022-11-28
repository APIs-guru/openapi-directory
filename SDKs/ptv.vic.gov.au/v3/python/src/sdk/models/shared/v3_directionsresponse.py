from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3DirectionsResponse:
    directions: Optional[List[V3DirectionWithDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directions') }})
    status: Optional[V3Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
