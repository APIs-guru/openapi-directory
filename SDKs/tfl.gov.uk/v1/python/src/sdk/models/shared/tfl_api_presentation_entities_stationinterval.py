from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStationInterval:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    intervals: Optional[List[TflAPIPresentationEntitiesInterval]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervals') }})
    
