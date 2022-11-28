from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlacedBetLeg:
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    parts: List[PlacedBetPart] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    
