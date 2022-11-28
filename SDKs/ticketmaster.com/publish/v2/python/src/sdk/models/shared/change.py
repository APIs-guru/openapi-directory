from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChangeOpEnum(str, Enum):
    ADD = "add"
    REMOVE = "remove"
    REPLACE = "replace"
    MOVE = "move"
    COPY = "copy"
    TEST = "test"


@dataclass_json
@dataclass
class Change:
    r"""Change
    This class defines the Changes on the Publish API
    """
    
    op: ChangeOpEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
