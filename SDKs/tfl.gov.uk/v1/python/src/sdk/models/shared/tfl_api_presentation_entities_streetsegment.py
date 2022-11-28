from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStreetSegment:
    line_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineString') }})
    source_system_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSystemId') }})
    source_system_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSystemKey') }})
    toid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toid') }})
    
