from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OnDemandRegion:
    country_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    country_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_name') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
