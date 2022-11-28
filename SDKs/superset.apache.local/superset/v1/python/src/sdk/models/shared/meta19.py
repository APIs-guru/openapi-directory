from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Meta19:
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
