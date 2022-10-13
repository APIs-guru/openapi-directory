from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class DisallowedResourceProblemResourceTypeEnum(str, Enum):
    TWEET = "tweet"
    MEDIA = "media"

class DisallowedResourceProblemSectionEnum(str, Enum):
    DATA = "data"
    INCLUDES = "includes"


@dataclass_json
@dataclass
class DisallowedResourceProblem:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_id' }})
    resource_type: DisallowedResourceProblemResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    section: DisallowedResourceProblemSectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
