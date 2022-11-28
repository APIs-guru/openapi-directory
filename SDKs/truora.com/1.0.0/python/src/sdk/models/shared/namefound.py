from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NameFound:
    r"""NameFound
    Represents names found during the process
    """
    
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    
