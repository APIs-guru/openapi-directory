from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResourceUnauthorizedProblemResourceTypeEnum(str, Enum):
    TWEET = "tweet"
    USER = "user"
    MEDIA = "media"

class ResourceUnauthorizedProblemSectionEnum(str, Enum):
    DATA = "data"
    INCLUDES = "includes"


@dataclass_json
@dataclass
class ResourceUnauthorizedProblem:
    r"""ResourceUnauthorizedProblem
    A problem that indicates you are not allowed to see a particular Tweet, User, etc.
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_id') }})
    resource_type: ResourceUnauthorizedProblemResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    section: ResourceUnauthorizedProblemSectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
