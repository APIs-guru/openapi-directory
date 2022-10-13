from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ChangelogTypeEnum(str, Enum):
    UNKNOWN = ""
    ADDED = "added"
    FIXED = "fixed"
    IMPROVED = "improved"
    DEPRECATED = "deprecated"
    REMOVED = "removed"


@dataclass_json
@dataclass
class Changelog:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[ChangelogTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
