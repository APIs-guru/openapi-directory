from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStreet:
    closure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closure') }})
    directions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directions') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    segments: Optional[List[TflAPIPresentationEntitiesStreetSegment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    source_system_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSystemId') }})
    source_system_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSystemKey') }})
    
