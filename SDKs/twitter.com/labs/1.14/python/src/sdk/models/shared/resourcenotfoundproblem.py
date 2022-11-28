from dataclasses import dataclass, field
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResourceNotFoundProblemResourceTypeEnum(str, Enum):
    USER = "user"
    TWEET = "tweet"


@dataclass_json
@dataclass
class ResourceNotFoundProblem:
    r"""ResourceNotFoundProblem
    A problem that indicates that a given Tweet, User, etc. does not exist.
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    parameter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    resource_type: ResourceNotFoundProblemResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
