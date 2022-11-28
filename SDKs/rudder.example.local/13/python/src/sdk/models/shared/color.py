from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Color:
    alpha: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha') }})
    blue: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blue') }})
    green: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('green') }})
    red: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('red') }})
    
