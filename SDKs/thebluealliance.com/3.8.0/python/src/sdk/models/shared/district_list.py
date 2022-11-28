from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DistrictList:
    abbreviation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('abbreviation') }})
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    year: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
