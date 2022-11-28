from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NearbyAttributes:
    max_time: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_time') }})
    min_time: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_time') }})
    
