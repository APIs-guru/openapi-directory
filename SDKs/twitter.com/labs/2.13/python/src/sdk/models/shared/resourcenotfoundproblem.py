from dataclasses import dataclass, field
from typing import Any,Enum
from dataclasses_json import dataclass_json

class ResourceNotFoundProblemResourceTypeEnum(str, Enum):
    USER = "user"
    TWEET = "tweet"
    MEDIA = "media"


@dataclass_json
@dataclass
class ResourceNotFoundProblem:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    parameter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_id' }})
    resource_type: ResourceNotFoundProblemResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
