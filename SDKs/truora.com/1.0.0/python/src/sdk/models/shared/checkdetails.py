from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckDetails:
    r"""CheckDetails
    Represents background check details
    """
    
    check_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_id') }})
    data_set: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_set') }})
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_name') }})
    group: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    score: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    tables: List[Table] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tables') }})
    
