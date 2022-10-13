from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class ResourceUnauthorizedProblemResourceTypeEnum(str, Enum):
    TWEET = "tweet"

class ResourceUnauthorizedProblemSectionEnum(str, Enum):
    DATA = "data"
    INCLUDES = "includes"


@dataclass_json
@dataclass
class ResourceUnauthorizedProblem:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_id' }})
    resource_type: ResourceUnauthorizedProblemResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    section: ResourceUnauthorizedProblemSectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
