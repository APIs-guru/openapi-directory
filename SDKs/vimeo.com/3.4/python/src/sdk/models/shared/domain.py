from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Domain:
    allow_hd: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_hd') }})
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
